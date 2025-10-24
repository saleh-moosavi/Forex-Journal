import { dataType } from "../types/dataType";
import { openDB, getStore } from "../utils/indexedDB";

export default function useGetData() {
  const getAllData = async (): Promise<dataType[]> => {
    const db = await openDB();
    const store = getStore(db);
    return new Promise((resolve) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result as dataType[]);
      request.onerror = () => resolve([]);
    });
  };

  const getData = async (id: number): Promise<dataType | undefined> => {
    const db = await openDB();
    const store = getStore(db);
    return new Promise((resolve) => {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(undefined);
    });
  };

  return { getAllData, getData };
}
