import useGetData from "../hooks/useGetData";
import { dataType } from "../types/dataType";
import useSetData from "../hooks/useSetData";
import CardView from "../components/CardView";
import { deleteItem } from "../utils/deleteItem";
import { Fragment, MouseEvent, useEffect, useState } from "react";

export default function Index() {
  const { getAllData } = useGetData();
  const { setAllData } = useSetData();
  const [data, setData] = useState<dataType[]>([]);

  //Get data from localStorage after page loaded
  useEffect(() => {
    const data = getAllData();
    setData(data);
  }, []);

  //delete data from localStorage when you click on delete button
  const deleteHandler = (e: MouseEvent<HTMLElement>) => {
    if (confirm(`Are You Sure ??`)) {
      const newData = deleteItem(e, data);
      setData(newData);
      setAllData(newData);
    }
  };

  if (data.length > 0) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5 p-5 mb-20">
        {data.map((value, index: number) => {
          return (
            <Fragment key={index}>
              <CardView
                key={index}
                id={index.toString()}
                data={value}
                delHandler={(e: MouseEvent<HTMLElement>) => deleteHandler(e)}
              />
            </Fragment>
          );
        })}
      </div>
    );
  }

  return (
    <p className="text-3xl text-white font-bold flex justify-center items-center h-full animate-pulse">
      Nothing To Share
    </p>
  );
}
