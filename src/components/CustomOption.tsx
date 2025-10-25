import { CustomOptionProps } from "../types/dataType";
import { useState, useEffect, useRef, useCallback } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

export default function CustomOption({
  error,
  title,
  value,
  options = [],
  onChangeHandler,
}: CustomOptionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown open/close
  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Handle option selection
  const handleOptionClick = useCallback(
    (item: string) => {
      onChangeHandler(item);
      setIsOpen(false);
    },
    [onChangeHandler]
  );

  const ArrowIcon = isOpen ? RiArrowUpSLine : RiArrowDownSLine;

  return (
    <section>
      <div ref={dropdownRef} className="relative w-full shrink-0 text-white">
        <button
          type="button"
          onClick={toggleDropdown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className="w-full p-2 rounded-md bg-white/20 text-left flex justify-between items-center"
        >
          <span>{value ? value : `Select ${title}`}</span>
          <ArrowIcon className="size-5" />
        </button>

        <ul
          role="listbox"
          aria-label={title}
          className={`absolute top-full left-0 w-full bg-purple-950 rounded-md mt-1 z-10 ${
            isOpen
              ? "opacity-100 visible scale-y-100"
              : "opacity-0 invisible scale-y-95"
          } transition-all duration-200`}
        >
          {options.length > 0 ? (
            options.map((item) => (
              <li
                key={item}
                role="option"
                aria-selected={value === item}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionClick(item);
                }}
                className="p-2 hover:bg-white/10 cursor-pointer"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="p-2">No options</li>
          )}
        </ul>
      </div>
      {error && <p className="text-rose-400 text-xs mt-1">{error}</p>}
    </section>
  );
}
