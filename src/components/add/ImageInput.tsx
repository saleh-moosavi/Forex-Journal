import { ImageInputProps } from "../../types/components";
import { ChangeEvent, useEffect, useMemo, useRef } from "react";

export default function ImageInput({
  value,
  error,
  changeHandler,
}: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      changeHandler(e.target.files);
    }
  };

  const imageUrls = useMemo(() => {
    if (!value?.length) return [];
    const urls = value.map((blob) => URL.createObjectURL(blob));
    return urls;
  }, [value]);

  useEffect(() => {
    return () => {
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageUrls]);

  return (
    <article>
      <input
        multiple
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={() => {
          inputRef.current?.click();
        }}
        className="p-2 w-full rounded-md bg-white/20 text-white"
      >
        Select Your Images
      </button>
      {error && value.length === 0 && (
        <p className="text-rose-400 text-xs">{error}</p>
      )}
      {value.length > 0 && (
        <section className="grid grid-cols-3 gap-2 mt-1 items-center justify-items-center bg-white/20 rounded-md p-2">
          {imageUrls.map((url: string, i: number) => (
            <img
              key={i}
              src={url}
              loading="lazy"
              className="rounded-md"
              alt={`Preview image ${i}`}
            />
          ))}
        </section>
      )}
    </article>
  );
}
