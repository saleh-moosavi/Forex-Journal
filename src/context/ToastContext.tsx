import { createContext, ReactNode, useState } from "react";
import { SetToastType, ToastState } from "../types/dataType";

interface ThemeProviderProps {
  toast: ToastState;
  setToast: SetToastType;
}

export const toastContext = createContext<ThemeProviderProps>({
  toast: { isVisible: false, text: "", color: "bg-blue-600" },
  setToast: (toast) => {
    toast;
  },
});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>({
    isVisible: false,
    text: "",
    color: "bg-blue-600",
  });

  return (
    <toastContext.Provider value={{ toast, setToast }}>
      {children}
    </toastContext.Provider>
  );
}
