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
        className="bg-white/30 w-full aspect-video object-cover text-white text-center"
        alt="Image"
      />
      <article className="w-full *:h-full object-cover grid grid-cols-3 gap-2 p-2 *:cursor-pointer *:rounded-lg min-h-[88px] *:bg-white/30 *:text-white *:text-center">
        <img src={htf} onClick={() => setCurrentImg(htf)} alt="Image" />
        <img src={mtf} onClick={() => setCurrentImg(mtf)} alt="Image" />
        <img src={ltf} onClick={() => setCurrentImg(ltf)} alt="Image" />
      </article>
    </>
  );
}
