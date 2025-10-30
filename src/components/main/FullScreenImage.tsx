import { FaX } from "react-icons/fa6";
import { MouseEvent, useEffect, useState } from "react";

export default function FullScreenImage({
  url,
  isOpen,
  setIsOpen,
}: {
  url: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  const closeFullScreen = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  // detect mobile landscape mode
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 679;
      setIsMobileLandscape(isMobile);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <section
      className="fixed inset-0 z-[70] bg-black/20 backdrop-blur-sm flex justify-center items-center"
      onClick={closeFullScreen}
    >
      <FaX
        className="text-white fixed top-5 right-5 size-5 cursor-pointer hover:text-rose-600 hover:rotate-180 transition-all duration-300 z-[80]"
        onClick={closeFullScreen}
      />
      <img
        src={url}
        alt="Image"
        onClick={(e) => e.stopPropagation()}
        className={`
            transition-all duration-500 rounded-lg object-contain
            ${
              isMobileLandscape
                ? "rotate-90 max-h-[90vw] max-w-[90vh]"
                : "max-w-[90vw] max-h-[90vh]"
            }
          `}
      />
    </section>
  );
}
