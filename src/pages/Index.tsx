import { useEffect, useState } from "react";
import ListItem from "./ListItem";

export default function Index() {
  const [data, setData]: any = useState([]);

  //Get data from localStorage after page loaded 
  useEffect(() => {
    localStorage.getItem("backtest") &&
      setData(JSON.parse(localStorage.getItem("backtest") || ""));
  }, []);

  //delete data from localStorage when you click on delete button 
  const deleteHandler = (e: any) => {
    if (confirm(`Are You Sure ??`)) {
      const newData = [...data];
      newData.splice(e.target.dataset.id, 1);
      setData(newData);
      localStorage.setItem("backtest", JSON.stringify(newData));
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-3 pt-20 px-2">
      {data.length > 0 ? (
        data.map((value: any, index: any) => {
          return (
            <ListItem
              key={index}
              dataId={index}
              currency={value.currency}
              result={value.result}
              date={value.date}
              time={value.time}
              desc={value.desc}
              htf={value.htf}
              mtf={value.mtf}
              ltf={value.ltf}
              deleteHandler={(e: any) => deleteHandler(e)}
            />
          );
        })
      ) : (
        <p className="text-rose-300 text-xl font-semibold">nothing to share</p>
      )}
    </div>
  );
}
