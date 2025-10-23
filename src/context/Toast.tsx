import { createContext } from "react";
import { SetToastType, ToastState } from "../types/dataType";

interface ThemeProviderProps {
  toast: ToastState;
  setToast: SetToastType;
}

const toastContext = createContext<ThemeProviderProps>({
  toast: { isVisible: false, text: "", color: "bg-blue-600" },
  setToast: (toast) => {
    toast;
  },
});

export default toastContext;
