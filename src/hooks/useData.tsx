import { dataType } from "../types/dataType";
import { openDB, getStore } from "../utils/indexedDB";

const connectStore = async (mode: IDBTransactionMode = "readonly") => {
  const db = await openDB();
  return getStore(db, mode);
};

export default function useData() {
  //return all Data
  const getAllData = async (): Promise<dataType[]> => {
    const store = await connectStore();
    return new Promise((resolve) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result as dataType[]);
      request.onerror = () => resolve([]);
    });
  };

  //return single Data
  const getData = async (id: number): Promise<dataType | null> => {
    const store = await connectStore();
    return new Promise((resolve) => {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
    });
  };

  //edit single Data
  const editData = async (id: number, data: dataType) => {
    const store = await connectStore("readwrite");
    const updated = { ...data, id };
    store.put(updated);
  };

  //set single Data
  const setData = async (data: dataType) => {
    const store = await connectStore("readwrite");
    store.add(data);
  };

  //set all Data from clipboard
  const setAllData = async (data: dataType[]) => {
    const store = await connectStore("readwrite");

    const clearRequest = store.clear();
    clearRequest.onsuccess = () => {
      data.forEach((item) => store.add(item));
    };
  };

  //delete single Data
  const deleteData = async (id: number) => {
    const store = await connectStore("readwrite");
    store.delete(id);
  };

  return { getAllData, getData, editData, setAllData, setData, deleteData };
}
