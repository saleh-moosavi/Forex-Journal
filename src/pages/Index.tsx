import { MouseEvent, useEffect, useState } from "react";
import ListItem from "./ListItem";

type dataType = {
  [key: string]: string;
};

export default function Index() {
  const initialData: dataType[] = [];
  const [data, setData]: [
    dataType[],
    React.Dispatch<React.SetStateAction<dataType[]>>
  ] = useState(initialData);

  //Get data from localStorage after page loaded
  useEffect(() => {
    localStorage.getItem("backtest") &&
      setData(JSON.parse(localStorage.getItem("backtest") || ""));
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
    <div className="flex flex-col items-center gap-y-3 pt-20 px-2">
      {data.length > 0 ? (
        data.map((value: dataType, index: number) => {
          return (
            <ListItem
              key={index}
              dataId={index.toString()}
              currency={value.currency}
              result={value.result}
              date={value.date}
              time={value.time}
              desc={value.desc}
              htf={value.htf}
              mtf={value.mtf}
              ltf={value.ltf}
              deleteHandler={(e: MouseEvent<HTMLElement>) => deleteHandler(e)}
            />
          );
        })
      ) : (
        <p className="text-rose-300 text-xl font-semibold">nothing to share</p>
      )}
    </div>
  );
}
