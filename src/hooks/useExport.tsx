import useData from "./useData";
import toastContext from "../context/Toast";
import { useCallback, useContext } from "react";
import { blobToBase64 } from "../utils/blobConvert";
import { downloadFile } from "../utils/downloadFile";

export default function useExportData() {
  const { setToast } = useContext(toastContext);
  const { getAllData } = useData();

  const downloadBackup = useCallback(async (): Promise<void> => {
    try {
      const data = await getAllData();

      const serialized = await Promise.all(
        data.map(async (item) => ({
          ...item,
          images: await Promise.all(item.images.map(blobToBase64)),
        }))
      );

      const json = JSON.stringify(serialized, null, 2);
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      downloadFile(json, `backup-${timestamp}.json`);

      setToast({
        isVisible: true,
        color: "bg-blue-600",
        text: "Backup file downloaded successfully",
      });
    } catch (err) {
      console.error(err);
      setToast({
        isVisible: true,
        color: "bg-rose-500",
        text: "Failed to create backup file!",
      });
    }
  }, [getAllData, setToast]);

  return { downloadBackup };
}
