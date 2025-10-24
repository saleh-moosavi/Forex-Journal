export interface dataType {
  currency: "EURUSD" | "XAUUSD";
  result: "TP" | "SL";
  date: string;
  time: string;
  desc: string;
  images: Blob[];
  id?: number;
}

export type reducerAction =
  | {
      type: "result" | "currency" | "desc" | "time" | "date";
      value: string;
    }
  | { type: "params" | "reset"; value: dataType }
  | { type: "image" | "reset"; value: FileList | null };

export interface errorType {
  date?: string;
  desc?: string;
  time?: string;
  image?: string;
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
