import { createContext, ReactNode, useState } from "react";

interface PopUpContextType {
  message: string;
  isVisible: boolean;
  resolver: (() => void) | null;
  setMessage: (message: string) => void;
  setIsVisible: (visible: boolean) => void;
  setResolver: (fn: () => void) => void;
}

export const PopUpContext = createContext<PopUpContextType>({
  message: "",
  isVisible: false,
  resolver: null,
  setMessage: () => {},
  setIsVisible: () => {},
  setResolver: () => {},
});

export function PopUpProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [resolver, setResolver] = useState<(() => void) | null>(null);

  return (
    <PopUpContext.Provider
      value={{
        message,
        isVisible,
        resolver,
        setMessage,
        setIsVisible,
        setResolver,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
}
