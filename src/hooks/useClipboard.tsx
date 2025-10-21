import { useCallback } from "react";
import useGetData from "./useGetData";

interface UseClipboardReturn {
  copyToClipboard: () => Promise<void>;
  isSupported: boolean;
}

export default function useClipboard(): UseClipboardReturn {
  const { getAllData } = useGetData();
  const isSupported = Boolean(
    typeof navigator !== "undefined" && navigator.clipboard?.writeText
  );

  const copyToClipboard = useCallback(async (): Promise<void> => {
    if (!isSupported) {
      alert("Clipboard API not supported in this browser!");
      return;
    }

    try {
      const data = JSON.stringify(getAllData());
      await navigator.clipboard.writeText(data);

      alert("Text copied to clipboard!");
    } catch (error) {
      alert("Failed to copy text to clipboard:");
      return;
    }
  }, [isSupported]);

  return { copyToClipboard, isSupported };
}
