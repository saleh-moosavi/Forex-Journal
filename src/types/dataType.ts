export interface dataType {
  currency: "EURUSD" | "XAUUSD";
  result: "TP" | "SL";
  date: string;
  time: string;
  desc: string;
  htf: string;
  mtf: string;
  ltf: string;
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
