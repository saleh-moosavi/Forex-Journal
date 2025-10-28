import { Link } from "react-router-dom";
import { HeaderButtonsProp } from "../../types/components";

export default function HeaderButton({ title, icon, link }: HeaderButtonsProp) {
  return (
    <Link
      to={link}
      className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
    >
      <span className="*:fill-white *:text-white *:size-5">{icon}</span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
        {title}
      </div>
    </Link>
  );
}
