import { dataType } from "../types/dataType";

export default function useEditData() {
  const editData = (data: dataType, id: string) => {
    const all: object[] = JSON.parse(localStorage.getItem("backtest") || "");
    all.splice(Number(id), 1, data);
    localStorage.setItem("backtest", JSON.stringify(all));
  };
  return { editData };
}
