import toastContext from "../context/Toast";
import { useContext, useEffect } from "react";

export default function Toast() {
  const { toast, setToast } = useContext(toastContext);

  useEffect(() => {
    if (!toast.isVisible) return;

    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast.isVisible, setToast]);

  return (
    <div
      className={`
        fixed inset-x-0 w-fit top-5 mx-auto px-4 py-2 rounded-lg text-white
        ${
          toast.isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0"
        }
        transition-[transform,opacity] duration-300 ${toast.color}
      `}
    >
      <p>{toast.text}</p>
    </div>
  );
}
