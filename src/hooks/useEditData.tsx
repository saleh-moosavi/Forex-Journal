import { dataType } from "../types/dataType";
import { openDB, getStore } from "../utils/indexedDB";

export default function useEditData() {
  const editData = async (id: number, data: dataType) => {
    const db = await openDB();
    const store = getStore(db, "readwrite");
    const updated = { ...data, id };
    store.put(updated);
  };
  return { editData };
}
