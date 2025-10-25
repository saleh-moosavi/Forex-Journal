import { Link } from "react-router-dom";
import InstallPWAButton from "./PwaButton";
import useClipboard from "../hooks/useClipboard";
import { ImCopy, ImHome, ImPlus } from "react-icons/im";

export default function Header() {
  const { copyToClipboard } = useClipboard();

  return (
    <div className="w-fit fixed z-50 bottom-5 inset-x-0 mx-auto flex justify-around gap-4 items-center px-4 py-1 bg-gradient-to-t from-[#330055] to-[#000022] rounded-lg shadow shadow-white">
      <Link
        to="/"
        className="blcok relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
      >
        <ImHome className="fill-white size-5" />

        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Home
        </div>
      </Link>

      <Link
        to="/add"
        className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
      >
        <ImPlus className="fill-white size-5" />

        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Add
        </div>
      </Link>

      <div
        onClick={copyToClipboard}
        className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
      >
        <ImCopy className="fill-white size-5" />

        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Copy Data
        </div>
      </div>
      <InstallPWAButton />
    </div>
  );
}
