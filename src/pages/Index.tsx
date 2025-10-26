import useData from "../hooks/useData";
import { dataType } from "../types/dataType";
import CardView from "../components/main/CardView";
import { Fragment, useEffect, useState } from "react";

export default function Index() {
  const { getAllData } = useData();
  const [data, setData] = useState<dataType[]>([]);

  //Get data from localStorage after page loaded
  useEffect(() => {
    getAllData().then((res) => {
      setData(res);
    });
  }, []);

  if (data.length > 0) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5 p-5 mb-20">
        {data.map((item) => {
          return (
            <Fragment key={item.id!}>
              <CardView data={item} />
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
