import Image from "next/image";
import React from "react";

type TImageBoxProps = {
  src: string;
  alt: string;
};
export const ImageBox = ({ src, alt }: TImageBoxProps) => {
  return (
    <div className="flex h-16 w-16 items-center justify-center overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={60}
        height={60}
        className="object-cover"
      />
    </div>
  );
};
