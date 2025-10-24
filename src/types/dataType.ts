export interface dataType {
  currency: "EURUSD" | "XAUUSD";
  result: "TP" | "SL";
  date: string;
  time: string;
  desc: string;
  htf: string;
  mtf: string;
  ltf: string;
  id?: number;
}

export type reducerAction =
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

export interface errorType {
  htf?: string;
  mtf?: string;
  ltf?: string;
  time?: string;
  date?: string;
  desc?: string;
  result?: string;
  currency?: string;
}

export interface ToastState {
  isVisible: boolean;
  text: string;
  color: "bg-rose-500" | "bg-blue-600";
}

export type SetToastType = React.Dispatch<
  React.SetStateAction<{
    isVisible: boolean;
    text: string;
    color: "bg-rose-500" | "bg-blue-600";
  }>
>;
