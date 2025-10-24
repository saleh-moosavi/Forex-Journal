import { ChangeEvent } from "react";

interface ImageInputProps {
  value: Blob[];
  error?: string;
  changeHandler: (files: FileList | null) => void;
}

export default function ImageInput({
  value,
  error,
  changeHandler,
}: ImageInputProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      changeHandler(e.target.files);
    }
  };

  return (
    <article className="space-y-2">
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="p-2 w-full rounded-md bg-white/20 text-white"
      />
      {error && value.length === 0 && (
        <p className="text-rose-400 text-xs">{error}</p>
      )}
      {value.length > 0 && (
        <section className="grid grid-cols-3 gap-2 items-center justify-items-center bg-white/20 rounded-md p-2">
          {value.map((blob: Blob, i: number) => (
            <img
              key={i}
              src={URL.createObjectURL(blob)}
              alt={`Preview image ${i}`}
              className="rounded-md"
            />
          ))}
        </section>
      )}
    </article>
  );
}
