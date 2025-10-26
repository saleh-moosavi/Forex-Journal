import { createContext, useState, ReactNode } from "react";

interface DataContextType {
  refreshFlag: boolean;
  triggerRefresh: () => void;
}

export const DataContext = createContext<DataContextType>({
  refreshFlag: false,
  triggerRefresh: () => {},
});

export function DataProvider({ children }: { children: ReactNode }) {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const triggerRefresh = () => setRefreshFlag((prev) => !prev);

  return (
    <DataContext.Provider value={{ refreshFlag, triggerRefresh }}>
      {children}
    </DataContext.Provider>
  );
}
