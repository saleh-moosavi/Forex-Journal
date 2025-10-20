import { dataType } from "../types/dataType";

export default function useSetData() {
  const setData = (data: dataType) => {
    const oldData =
      localStorage.getItem("backtest") &&
      JSON.parse(localStorage.getItem("backtest") || "");
    const newAll = oldData?.length > 0 ? [...oldData, data] : [data];
    localStorage.setItem("backtest", JSON.stringify(newAll));
  };
  const setAllData = (data: dataType[]) => {
    localStorage.setItem("backtest", JSON.stringify(data));
  };
  return { setData, setAllData };
}
