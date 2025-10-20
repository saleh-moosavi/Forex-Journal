import { dataType } from "../types/dataType";

export default function useGetData() {
  const getAllData = (): dataType[] => {
    const res: dataType[] = JSON.parse(localStorage.getItem("backtest") || "");
    if (res !== null && res.length >= 1) {
      return res;
    }
    return [];
  };

  const getData = (id: string) => {
    const res: dataType[] = JSON.parse(localStorage.getItem("backtest") || "");
    const currentData = res.filter(
      (item: dataType) => res.indexOf(item) === Number(id)
    );
    return currentData[0];
  };
  return { getAllData, getData };
}
