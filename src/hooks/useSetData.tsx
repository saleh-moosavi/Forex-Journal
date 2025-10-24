import { dataType } from "../types/dataType";
import { openDB, getStore } from "../utils/indexedDB";

export default function useSetData() {
  const setData = async (data: dataType) => {
    const db = await openDB();
    const store = getStore(db, "readwrite");
    store.add(data);
  };

  const setAllData = async (data: dataType[]) => {
    const db = await openDB();
    const store = getStore(db, "readwrite");

    const clearRequest = store.clear();
    clearRequest.onsuccess = () => {
      data.forEach((item) => store.add(item));
    };
  };

  return { setData, setAllData };
}
