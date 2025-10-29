import { useContext } from "react";
import { PopUpContext } from "../context/PopUpContext";

export default function PopUp() {
  const { message, isVisible, setIsVisible, resolver } =
    useContext(PopUpContext);

  const handleConfirm = () => {
    if (resolver) resolver();
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] text-white flex justify-center items-center">
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 p-0.5 rounded-lg hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300">
        <div className="bg-gradient-to-t from-[#000022] to-[#330055] rounded-lg overflow-hidden grid gap-10 relative p-5">
          <p>{message}</p>
          <article className="flex items-center justify-between gap-10">
            <button
              type="button"
              onClick={handleConfirm}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-400 transition-colors duration-200 rounded-lg w-full"
            >
              Yes
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-slate-600 hover:bg-slate-400 transition-colors duration-200 rounded-lg w-full"
            >
              No
            </button>
          </article>
        </div>
      </section>
    </div>
  );
}
