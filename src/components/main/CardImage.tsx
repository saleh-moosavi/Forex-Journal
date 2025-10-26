import { useEffect, useMemo, useState } from "react";

export default function CardImage({ images }: { images: Blob[] }) {
  const [currentImg, setCurrentImg] = useState(0);

  const imageUrls = useMemo(() => {
    if (!images?.length) return [];
    const urls = images.map((blob) => URL.createObjectURL(blob));
    return urls;
  }, [images]);

  useEffect(() => {
    return () => {
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageUrls]);

  return (
    <>
      <img
        src={imageUrls[currentImg]}
        className="bg-white/30 w-full aspect-video object-cover text-white text-center"
        alt="Image"
      />
      <article className="image-slider w-full object-cover flex items-center overflow-x-scroll gap-2 p-2">
        {imageUrls.map((url: string, i: number) => (
          <img
            key={i}
            src={url}
            loading="lazy"
            decoding="async"
            alt={`Preview image ${i}`}
            onClick={() => setCurrentImg(i)}
            className="rounded-md object-cover w-2/5 max-h-[75px] h-full cursor-pointer bg-white/30 text-white text-center"
          />
        ))}
      </article>
    </>
  );
}
