import { dataType } from "../types/dataType";

export function addFormValidator(data: dataType) {
  if (
    typeof data.time === typeof new Date().toISOString().split("T")[0] &&
    typeof data.date ===
      typeof new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }) &&
    typeof data.htf === typeof new URL("https://www.google.com") &&
    typeof data.mtf === typeof new URL("https://www.google.com") &&
    typeof data.ltf === typeof new URL("https://www.google.com") &&
    data.result !== "SL" &&
    data.result !== "TP" &&
    data.currency !== "EURUSD" &&
    data.currency !== "XAUUSD" &&
    data.desc.trim() !== ""
  )
    return true;
  return false;
}
