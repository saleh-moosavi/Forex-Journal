import { useRef } from "react";
import InstallPWAButton from "./PwaButton";
import ProfileButton from "./ProfileButton";
import useImportData from "../../hooks/useImport";
import useExportData from "../../hooks/useExport";
import { ImDownload, ImUpload } from "react-icons/im";

export default function SideBar() {
  const { setBackup } = useImportData();
  const { downloadBackup } = useExportData();
  const InputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) await setBackup(file);
    e.target.value = "";
  };

  return (
    <div className="lg:h-full flex md:flex-col justify-between backdrop-blur-md shadow shadow-white p-2 rounded-lg z-10">
      <img
        src="/pwa-512.png"
        alt="image logo"
        className="w-10 aspect-square object-cover"
      />
      <article className="flex flex-row md:flex-col gap-2">
        <ProfileButton
          title="Export Data"
          icon={<ImDownload />}
          onClick={downloadBackup}
        />
        <ProfileButton
          title="Import Data"
          icon={<ImUpload />}
          onClick={() => InputRef.current?.click()}
        >
          <input
            type="file"
            accept=".json"
            ref={InputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </ProfileButton>
        <InstallPWAButton />
      </article>
    </div>
  );
}
