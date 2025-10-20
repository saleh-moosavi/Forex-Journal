import useGetData from "../hooks/useGetData";
import { dataType } from "../types/dataType";
import CardView from "../components/CardView";
import { MouseEvent, useEffect, useState } from "react";

export default function Index() {
  const { getAllData } = useGetData();
  const [data, setData] = useState<dataType[]>([]);

  //Get data from localStorage after page loaded
  useEffect(() => {
    const data = getAllData();
    setData(data);
  }, []);

  //delete data from localStorage when you click on delete button
  const deleteHandler = (e: MouseEvent<HTMLElement>) => {
    if (confirm(`Are You Sure ??`)) {
      const newData = [...data];
      const target = e.target as HTMLElement;
      newData.splice(Number(target.dataset.id), 1);
      setData(newData);
      localStorage.setItem("backtest", JSON.stringify(newData));
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-3 pt-20 px-2">
      {data.length > 0 ? (
        data.map((value, index: number) => {
          return (
            <CardView
              key={index}
              id={index.toString()}
              data={value}
              delHandler={(e: MouseEvent<HTMLElement>) => deleteHandler(e)}
            />
          );
        })
      ) : (
        <p className="text-rose-300 text-xl font-semibold">nothing to share</p>
      )}
    </div>
  );
}
