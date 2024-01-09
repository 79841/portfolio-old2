"use client";
import { TProjectData } from "@/types/Project";
import { useState } from "react";
import { NoImagesBox, ProjectImage } from "./ProjectImage";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";

type TImagesProps = {
  images: TProjectData["images"];
  imageWidth: string;
};
export const Carousel = ({ images, imageWidth }: TImagesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex w-full flex-col items-center gap-2">
      {images.length > 0 ? (
        <>
          <div className="relative h-60 w-full">
            {images.map((imageUrl, i) => {
              const isSelected = i === currentIndex;

              const style = {
                left: `calc((100% - ${imageWidth}) / ${
                  images.length - 1
                } * ${i})`,
                width: imageWidth,
                zIndex: isSelected ? "50" : `${10 - i}`,
              };
              return (
                <div key={imageUrl} onClick={() => setCurrentIndex(i)}>
                  <ProjectImage style={style} src={imageUrl} />
                </div>
              );
            })}
          </div>
          <div className="flex items-center">
            {Array.from({ length: images.length }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "text-muted-foreground",
                  currentIndex === i && "text-primary",
                )}
                onClick={() => setCurrentIndex(i)}
              >
                <Dot />
              </div>
            ))}
          </div>
        </>
      ) : (
        <NoImagesBox />
      )}
    </div>
  );
};
