import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { dataType } from "../types/dataType";

export default function ListItem({
  id,
  data,
  delHandler,
}: {
  id: string;
  data: dataType;
  delHandler: (e: MouseEvent<HTMLElement>) => void;
}) {
  return (
    <article className="flex justify-between gap-x-2 bg-white/30 w-full mx-5 h-fit p-3 rounded-md">
      <section className="grid grid-cols-3 gap-x-2 shrink-0">
        <a href={data.htf} target="_blank">
          <img className="object-cover w-20 h-full" src={data.htf} alt="1" />
        </a>
        <a href={data.mtf} target="_blank">
          <img className="object-cover w-20 h-full" src={data.mtf} alt="2" />
        </a>
        <a href={data.ltf} target="_blank">
          <img className="object-cover w-20 h-full" src={data.ltf} alt="3" />
        </a>
      </section>

      <section className="flex flex-col items-end justify-between gap-y-1">
        <div className="flex items-center gap-x-2">
          <p className="text-sm font-semibold text-white">{data.date}</p>
          <p className="text-sm font-semibold text-white">{data.time}</p>
          <p className="bg-green-500 px-2 rounded-md">{data.currency}</p>
          <p className="bg-green-500 px-2 rounded-md">{data.result}</p>
        </div>
        <p className="text-sm font-semibold text-right">{data.desc}</p>
        <div className="text-end">
          <button
            className="bg-red-500 px-2 rounded-md m-2"
            data-id={id}
            onClick={delHandler}
          >
            Delete
          </button>
          <button className="bg-yellow-500 px-2 rounded-md" data-id={id}>
            <Link to={`/add/${id}`}>Edit</Link>
          </button>
        </div>
      </section>
    </article>
  );
}
