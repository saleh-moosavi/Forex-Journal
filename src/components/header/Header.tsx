import HeaderButton from "./HeaderButton";
import InstallPWAButton from "./PwaButton";
import useExportData from "../../hooks/useExport";
import { ImportBackupButton } from "./ImportButton";
import { ImHome, ImPlus, ImDownload } from "react-icons/im";

export default function Header() {
  const { downloadBackup } = useExportData();

  return (
    <div className="w-fit fixed z-50 bottom-5 inset-x-0 mx-auto flex justify-around gap-4 items-center px-4 py-1 bg-gradient-to-t from-[#330055] to-[#000022] rounded-lg shadow shadow-white">
      <HeaderButton
        title="Export Data"
        icon={<ImDownload />}
        onClick={downloadBackup}
      />
      <HeaderButton link="/add" title="Add" icon={<ImPlus />} />
      <InstallPWAButton />
      <HeaderButton link="/" title="Home" icon={<ImHome />} />
      <ImportBackupButton />
    </div>
  );
}
