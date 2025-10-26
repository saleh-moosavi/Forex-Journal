import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  icon: ReactNode;
  link?: string;
  onClick?: () => Promise<void> | void;
};

export default function HeaderButton({ title, icon, link, onClick }: Props) {
  const baseClass =
    "relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500";

  const tooltip = (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
      {title}
    </div>
  );

  const iconWrapper = <span className="*:fill-white *:size-5">{icon}</span>;

  return link ? (
    <Link to={link} className={baseClass}>
      {iconWrapper}
      {tooltip}
    </Link>
  ) : (
    <div onClick={onClick} className={baseClass}>
      {iconWrapper}
      {tooltip}
    </div>
  );
}
