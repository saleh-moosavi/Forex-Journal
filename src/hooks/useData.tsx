import { useContext } from "react";
import { dataType } from "../types/dataType";
import { connectStore } from "../utils/indexedDB";
import { DataContext } from "../context/DataContext";

export default function useData() {
  const { triggerRefresh } = useContext(DataContext);

  const getAllData = async (): Promise<dataType[]> => {
    const store = await connectStore();
    return new Promise((resolve) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result as dataType[]);
      request.onerror = () => resolve([]);
    });
  };

  const getData = async (id: number): Promise<dataType | null> => {
    const store = await connectStore();
    return new Promise((resolve) => {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
    });
  };

  const editData = async (id: number, data: dataType) => {
    const store = await connectStore("readwrite");
    const updated = { ...data, id };
    store.put(updated);
    triggerRefresh();
  };

  const setData = async (data: dataType) => {
    const store = await connectStore("readwrite");
    store.add(data);
    triggerRefresh();
  };

  const setAllData = async (data: dataType[]) => {
    const store = await connectStore("readwrite");
    const clearRequest = store.clear();
    clearRequest.onsuccess = () => {
      data.forEach((item) => store.add(item));
      triggerRefresh();
    };
  };

  const deleteData = async (id: number) => {
    const store = await connectStore("readwrite");
    store.delete(id);
    triggerRefresh();
  };

  return { getAllData, getData, editData, setAllData, setData, deleteData };
}
