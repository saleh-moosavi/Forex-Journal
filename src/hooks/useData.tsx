import { useContext } from "react";
import { dataType } from "../types/dataType";
import { connectStore } from "../utils/indexedDB";
import { DataContext } from "../context/DataContext";
import { toastContext } from "../context/ToastContext";

export default function useData() {
  const { setToast } = useContext(toastContext);
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
    setToast({
      isVisible: true,
      color: "bg-blue-600",
      text: `Item Edited Successfully`,
    });
    triggerRefresh();
  };

  const setData = async (data: dataType) => {
    const store = await connectStore("readwrite");
    store.add(data);
    setToast({
      isVisible: true,
      color: "bg-blue-600",
      text: `Journal Added Successfully`,
    });
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
    setToast({
      isVisible: true,
      color: "bg-blue-600",
      text: `Item Deleted Successfully`,
    });
    triggerRefresh();
  };

  return { getAllData, getData, editData, setAllData, setData, deleteData };
}
