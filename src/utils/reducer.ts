import { dataType, reducerAction } from "../types/dataType";

// initial value of state
export const initialReducer: dataType = {
  currency: "EURUSD",
  result: "TP",
  date: new Date().toISOString().split("T")[0],
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }),
  desc: "",
  htf: "",
  mtf: "",
  ltf: "",
};

export const reducer = (state: dataType, action: reducerAction): dataType => {
  switch (action.type) {
    case "htf":
    case "mtf":
    case "ltf":
    case "result":
    case "currency":
    case "desc":
    case "time":
    case "date":
      return { ...state, [action.type]: action.value as string };

    case "params":
    case "reset":
      return {
        ...initialReducer,
        ...(action.value as Partial<dataType>),
      } as dataType;

    default:
      return state;
  }
};
