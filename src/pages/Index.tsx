import useData from "../hooks/useData";
import { Link } from "react-router-dom";
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
      <article className="flex flex-col justify-center items-center gap-10 h-full">
        <p className="text-3xl text-white font-bold animate-pulse">
          Your Journal List is Empty
        </p>
        <Link
          to="/add"
          className="text-white font-bold px-8 py-2 border rounded-lg backdrop-blur-sm hover:border-purple-300 hover:text-purple-300 transition-all duration-200"
        >
          Add a Journal
        </Link>
      </article>
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
