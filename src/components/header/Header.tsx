import HeaderButton from "./HeaderButton";
import { FaUserCircle } from "react-icons/fa";
import { ImHome, ImPlus } from "react-icons/im";

export default function Header() {
  return (
    <div className="w-fit fixed z-50 bottom-5 inset-x-0 mx-auto flex justify-around gap-4 items-center px-4 py-1 bg-gradient-to-t from-[#330055] to-[#000022] rounded-lg shadow shadow-white">
      <HeaderButton link="/add" title="Add" icon={<ImPlus />} />
      <HeaderButton link="/" title="Home" icon={<ImHome />} />
      <HeaderButton link="/profile" title="Profile" icon={<FaUserCircle />} />
    </div>
  );
}
