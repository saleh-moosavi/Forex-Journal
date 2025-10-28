import { ProfileButtonsProp } from "../../types/components";

export default function ProfileButton({
  icon,
  title,
  onClick,
  children,
}: ProfileButtonsProp) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-lg transition-all duration-500"
    >
      {children}
      <span className="*:fill-white *:text-white *:size-5">{icon}</span>
      <div className="absolute top-1/2 left-full -translate-y-1/2 ml-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
        {title}
      </div>
    </button>
  );
}
