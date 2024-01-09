import { cn } from "@/lib/utils";
import Image from "next/image";

type TProjectImageProps = {
  src: string;
  style: React.CSSProperties;
};
export const ProjectImage = ({ src, style }: TProjectImageProps) => {
  return (
    <div
      key={src}
      className={cn("absolute h-60 hover:scale-110")}
      style={style}
    >
      <Image
        src={src}
        alt={src.slice(src.lastIndexOf("."))}
        fill
        priority
        className="shadow-x"
      />
    </div>
  );
};

export const NoImagesBox = () => (
  <div className="flex h-40 w-full items-center justify-center text-xl text-muted-foreground sm:text-xl">
    No Image available..
  </div>
);
