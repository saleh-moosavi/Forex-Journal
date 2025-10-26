import useData from "../hooks/useData";
import { dataType } from "../types/dataType";
import CardView from "../components/main/CardView";
import { DataContext } from "../context/DataContext";
import { useContext, useEffect, useState, Fragment } from "react";

export default function Index() {
  const { getAllData } = useData();
  const { refreshFlag } = useContext(DataContext);
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    getAllData().then(setData);
  }, [refreshFlag]);

  if (data.length === 0) {
    return (
      <p className="text-3xl text-white font-bold flex justify-center items-center h-full animate-pulse">
        Nothing To Share
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5 p-5 mb-20">
      {data.map((item) => (
        <Fragment key={item.id!}>
          <CardView data={item} />
        </Fragment>
      ))}
    </div>
  );
}
