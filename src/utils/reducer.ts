import { dataType } from "../types/dataType";

type Action =
  | {
      type:
        | "htf"
        | "mtf"
        | "ltf"
        | "result"
        | "currency"
        | "desc"
        | "time"
        | "date";
      value: string;
    }
  | { type: "params" | "reset"; value: dataType };

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

export const reducer = (state: dataType, action: Action): dataType => {
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
