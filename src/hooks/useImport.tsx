import useData from "./useData";
import { dataType } from "../types/dataType";
import { useCallback, useContext } from "react";
import { base64ToBlob } from "../utils/blobConvert";
import { toastContext } from "../context/ToastContext";

type BackupDataType = Omit<dataType, "images"> & { images: string[] };

export default function useImportData() {
  const { setToast } = useContext(toastContext);
  const { setAllData } = useData();

  const setBackup = useCallback(
    async (file: File): Promise<void> => {
      try {
        const text = await file.text();
        const parsed: BackupDataType[] = JSON.parse(text);

        const restored: dataType[] = parsed.map((item) => ({
          ...item,
          images: item.images.map(base64ToBlob),
        }));

        await setAllData(restored);

        setToast({
          isVisible: true,
          color: "bg-blue-600",
          text: "Backup imported successfully",
        });
      } catch (err) {
        console.error(err);
        setToast({
          isVisible: true,
          color: "bg-rose-500",
          text: "Failed to import backup file!",
        });
      }
    },
    [setAllData, setToast]
  );

  return { setBackup };
}
