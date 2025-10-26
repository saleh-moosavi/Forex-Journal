import { ImUpload } from "react-icons/im";
import useImportData from "../hooks/useImport";

export function ImportBackupButton() {
  const { setBackup } = useImportData();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) await setBackup(file);
    e.target.value = "";
  };

  return (
    <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
      <ImUpload className="fill-white size-5" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
        Import Backup
      </div>
    </div>
  );
}
