import useData from "../hooks/useData";
import { useEffect, useState } from "react";
import Chart from "../components/profile/Chart";
import { extractData } from "../utils/extractData";
import Content from "../components/profile/Content";
import SideBar from "../components/profile/SideBar";
import { analyzedDataType } from "../types/dataType";

export default function Profile() {
  const { getAllData } = useData();
  const [analyzedData, setAnalyzedData] = useState<analyzedDataType | null>(
    null
  );

  useEffect(() => {
    (async function () {
      const response = extractData(await getAllData());
      setAnalyzedData(response);
    })();
  }, []);

  return (
    <article className="flex flex-col md:flex-row min-h-full md:h-full gap-5 p-5 mb-20 lg:mb-0 text-white">
      <SideBar />
      <section className="w-full min-h-full grid md:grid-cols-2 *:col-span-1 gap-5 rounded-lg p-2 backdrop-blur-md shadow shadow-white">
        <Chart data={analyzedData} />
        <Content data={analyzedData} />
      </section>
    </article>
  );
}
