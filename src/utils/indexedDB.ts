const DB_NAME = "journalDB";
const STORE_NAME = "backtest";
const DB_VERSION = 1;

export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const getStore = (
  db: IDBDatabase,
  mode: IDBTransactionMode = "readonly"
): IDBObjectStore => {
  const tx = db.transaction(STORE_NAME, mode);
  return tx.objectStore(STORE_NAME);
};

export const connectStore = async (mode: IDBTransactionMode = "readonly") => {
  const db = await openDB();
  return getStore(db, mode);
};
