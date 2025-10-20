import { dataType } from "../types/dataType";

interface reducerActionType {
  type: string;
  value: object[] | object | string;
}

// initial value of state
export const initialReducer = {
  currency: "",
  result: "",
  date: "",
  time: "",
  desc: "",
  htf: "",
  mtf: "",
  ltf: "",
};

// handle change in state
export const reducer = (state: dataType, action: reducerActionType) => {
  switch (action.type) {
    case "htf":
      return { ...state, htf: action.value };
    case "mtf":
      return { ...state, mtf: action.value };
    case "ltf":
      return { ...state, ltf: action.value };
    case "result":
      return { ...state, result: action.value };
    case "currency":
      return { ...state, currency: action.value };
    case "desc":
      return { ...state, desc: action.value };
    case "time":
      return { ...state, time: action.value };
    case "date":
      return { ...state, date: action.value };
    case "params":
      return { ...(action.value as any) };
    case "reset":
      return { ...(action.value as any) };

    default:
      break;
  }
};
