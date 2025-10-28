import { dataType } from "../types/dataType";

export const extractData = (data: dataType[]) => {
  const dataCount = data.length;
  const tpCount = data.filter((item) => item.result === "TP").length;
  const slCount = data.filter((item) => item.result === "SL").length;
  const winRate = ((tpCount / dataCount) * 100).toFixed(2);
  const loseRate = ((slCount / dataCount) * 100).toFixed(2);
  const EuroTrade = data.filter((item) => item.currency === "EURUSD").length;
  const GoldTrade = data.filter((item) => item.currency === "XAUUSD").length;

  return {
    dataCount,
    tpCount,
    slCount,
    winRate,
    loseRate,
    EuroTrade,
    GoldTrade,
  };
};
