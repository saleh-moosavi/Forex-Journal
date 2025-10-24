import { useState } from "react";

export default function CardImage({ images }: { images: Blob[] }) {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <>
      <img
        src={URL.createObjectURL(images[currentImg])}
        className="bg-white/30 w-full aspect-video object-cover text-white text-center"
        alt="Image"
      />
      <article className="image-slider w-full *:h-full object-cover flex items-center overflow-x-scroll gap-2 p-2 *:cursor-pointer *:rounded-lg min-h-[88px] *:bg-white/30 *:text-white *:text-center">
        {images.map((blob: Blob, i: number) => (
          <img
            key={i}
            onClick={() => setCurrentImg(i)}
            src={URL.createObjectURL(blob)}
            alt={`Preview image ${i}`}
            className="rounded-md object-cover w-2/5"
          />
        ))}
      </article>
    </>
  );
}
