import { MouseEvent } from "react";
import CardImage from "./CardImage";
import { dataType } from "../types/dataType";
import { DeleteButton, EditButton } from "./CustomButton";

export default function CardView({
  id,
  data,
  delHandler,
}: {
  id: string;
  data: dataType;
  delHandler: (e: MouseEvent<HTMLElement>) => void;
}) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-violet-600 p-0.5 rounded-lg hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300">
      <div className="bg-gradient-to-t from-[#000022] to-[#330055] rounded-lg overflow-hidden grid relative">
        <CardImage htf={data.htf} mtf={data.mtf} ltf={data.ltf} />
        <article className="flex justify-between gap-2 p-2 text-sm font-semibold text-center text-white">
          <section className="grid items-start gap-2 shrink-0">
            <p className="bg-blue-600 py-1 px-2 rounded-md">{data.currency}</p>
            <p className="bg-blue-600 py-1 px-2 rounded-md">{data.result}</p>
            <p className="bg-slate-700 py-1 px-2 rounded-md">{data.date}</p>
            <p className="bg-slate-700 py-1 px-2 rounded-md">{data.time}</p>
          </section>
          <div className="text-white text-start w-full group">
            <p>
              {data.desc.slice(0, 150) +
                `${data.desc.length > 150 ? " ..." : ""}` ||
                "There is No Description Here!"}
            </p>
            {data.desc.length > 150 && (
              <p className="absolute inset-0 bg-black p-2 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                {data.desc}
              </p>
            )}
          </div>
          <article className="h-full flex flex-col justify-between gap-2 text-white">
            <DeleteButton delHandler={delHandler} id={id} />
            <EditButton id={id} />
          </article>
        </article>
      </div>
    </section>
  );
}
