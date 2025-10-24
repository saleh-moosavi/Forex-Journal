import { dataType, errorType } from "../types/dataType";

export function addFormValidator(data: dataType) {
  const error: errorType = {};
  if (!data.time.match(/^(2[0-3]|[01][0-9]):[0-5][0-9]$/))
    error["time"] = "Time Is Not Valid";
  if (!data.date.match(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/))
    error["date"] = "Date Is Not Valid";
  // images
  if (data.images.length === 0) error["image"] = "Image Required";

  if (data.result !== "SL" && data.result !== "TP")
    error["result"] = "Result is Not Valid";
  if (data.currency !== "EURUSD" && data.currency !== "XAUUSD")
    error["currency"] = "Currency is Not Valid";
  if (data.desc.trim() === "") error["desc"] = "Description Required";
  if (Object.keys(error).length === 0) {
    return { isValid: true, error };
  }
  return { isValid: false, error };
}
