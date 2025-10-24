import { openDB, getStore } from "../utils/indexedDB";

export const deleteItem = async (id: number) => {
  const db = await openDB();
  const store = getStore(db, "readwrite");
  store.delete(id);
};
