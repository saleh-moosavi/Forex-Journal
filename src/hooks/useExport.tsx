import useData from "./useData";
import toastContext from "../context/Toast";
import { useCallback, useContext } from "react";
import { blobToBase64 } from "../utils/blobConvert";

export default function useExportData() {
  const { setToast } = useContext(toastContext);
  const { getAllData } = useData();

  const downloadBackup = useCallback(async (): Promise<void> => {
    try {
      const data = await getAllData();

      // Convert Blobs -> Base64 strings
      const serializedData = await Promise.all(
        data.map(async (item) => ({
          ...item,
          images: await Promise.all(item.images.map(blobToBase64)),
        }))
      );

      // Create JSON blob
      const jsonString = JSON.stringify(serializedData, null, 2);
      const blob = new Blob([jsonString], { type: "application/json" });

      // Create and trigger download
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      a.href = url;
      a.download = `backup-${timestamp}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setToast({
        isVisible: true,
        color: "bg-blue-600",
        text: "Backup file downloaded successfully",
      });
    } catch (error) {
      console.error(error);
      setToast({
        isVisible: true,
        color: "bg-rose-500",
        text: "Failed to create backup file!",
      });
    }
  }, []);

  return { downloadBackup };
}
