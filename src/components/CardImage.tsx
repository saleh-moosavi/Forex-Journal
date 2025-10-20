import { useState } from "react";

export default function CardImage({
  htf,
  mtf,
  ltf,
}: {
  htf: string;
  mtf: string;
  ltf: string;
}) {
  const [currentImg, setCurrentImg] = useState(htf);
  return (
    <>
      <img
        src={currentImg}
        className="bg-gray-400 w-full aspect-video object-cover"
        alt="Image"
      />
      <article className="w-full grid grid-cols-3 gap-2 p-2 *:cursor-pointer *:rounded-lg">
        <img
          src={htf}
          onClick={() => setCurrentImg(htf)}
          className="bg-gray-400"
          alt="Image"
        />
        <img
          src={mtf}
          onClick={() => setCurrentImg(mtf)}
          className="bg-gray-400"
          alt="Image"
        />
        <img
          src={ltf}
          onClick={() => setCurrentImg(ltf)}
          className="bg-gray-400"
          alt="Image"
        />
      </article>
    </>
  );
}
