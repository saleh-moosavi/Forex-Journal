import { MouseEvent } from "react";
import { Link } from "react-router-dom";

type ListItemType = {
  dataId: string;
  currency: string;
  result: string;
  date: string;
  time: string;
  desc: string;
  htf: string;
  mtf: string;
  ltf: string;
  deleteHandler: (e: MouseEvent<HTMLElement>) => void;
};

export default function ListItem(props: ListItemType) {
  return (
    <article className="flex justify-between gap-x-2 bg-white/30 w-full mx-5 h-fit p-3 rounded-md">
      <section className="grid grid-cols-3 gap-x-2 shrink-0">
        <a href={props.htf} target="_blank"><img className="object-cover w-20 h-full" src={props.htf} alt="1" /></a>
        <a href={props.mtf} target="_blank"><img className="object-cover w-20 h-full" src={props.mtf} alt="2" /></a>
        <a href={props.ltf} target="_blank"><img className="object-cover w-20 h-full" src={props.ltf} alt="3" /></a>
      </section>

      <section className="flex flex-col items-end justify-between gap-y-1">
        <div className="flex items-center gap-x-2">
          <p className="text-sm font-semibold text-white">{props.date}</p>
          <p className="text-sm font-semibold text-white">{props.time}</p>
          <p className="bg-green-500 px-2 rounded-md">{props.currency}</p>
          <p className="bg-green-500 px-2 rounded-md">{props.result}</p>
        </div>
        <p className="text-sm font-semibold text-right">{props.desc}</p>
        <div className="text-end">
          <button
            className="bg-red-500 px-2 rounded-md m-2"
            data-id={props.dataId}
            onClick={props.deleteHandler}
          >
            Delete
          </button>
          <button
            className="bg-yellow-500 px-2 rounded-md"
            data-id={props.dataId}
          >
            <Link to={`/add/${props.dataId}`}>Edit</Link>
          </button>
        </div>
      </section>
    </article>
  );
}
