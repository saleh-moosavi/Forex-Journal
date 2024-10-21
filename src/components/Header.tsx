import { Link } from "react-router-dom";

export default function Header() {
  //Copy Data To Clipboard
  const copyToClipboard = () => {
    if (navigator.clipboard) {
      const data: string | null =
        localStorage.getItem("backtest") && localStorage.getItem("backtest");

      navigator.clipboard
        .writeText(data ? data : "")
        .then(() => {
          alert("Text copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
        });
    } else {
      console.error("Clipboard API not supported");
    }
  };

  return (
    <div className="text-white p-5 fixed top-0 right-0 left-0 bg-white/20 backdrop-blur-sm">
      <ul className="flex justify-between px-5 w-full text-sm font-bold">
        <ul className="flex gap-x-5 hover:*:cursor-pointer">
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>
        <li className="hover:cursor-pointer" onClick={copyToClipboard}>
          Copy Data
        </li>
      </ul>
    </div>
  );
}
