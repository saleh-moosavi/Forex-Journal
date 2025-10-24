import useData from "./useData";
import toastContext from "../context/Toast";
import { useCallback, useContext } from "react";

interface UseClipboardReturn {
  copyToClipboard: () => Promise<void>;
  isSupported: boolean;
}

export default function useClipboard(): UseClipboardReturn {
  const { setToast } = useContext(toastContext);
  const { getAllData } = useData();
  const isSupported = Boolean(
    typeof navigator !== "undefined" && navigator.clipboard?.writeText
  );

  const copyToClipboard = useCallback(async (): Promise<void> => {
    if (!isSupported) {
      setToast({
        isVisible: true,
        color: "bg-rose-500",
        text: "Clipboard API not supported in this browser!",
      });
      return;
    }

    try {
      const data = JSON.stringify(await getAllData());
      await navigator.clipboard.writeText(data);

      setToast({
        isVisible: true,
        color: "bg-blue-600",
        text: "Text copied to clipboard",
      });
    } catch (error) {
      setToast({
        isVisible: true,
        color: "bg-rose-500",
        text: "Failed to copy text to clipboard!",
      });
      return;
    }
  }, [isSupported]);

  return { copyToClipboard, isSupported };
}
