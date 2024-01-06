import { PropsWithChildren, ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TDefaultCarouselProps = {
  renders: ReactNode[];
};
export const DefaultCarousel = ({ renders }: TDefaultCarouselProps) => {
  return (
    <div className="pr-12">
      <Carousel>
        <CarouselContent>
          {renders.map((Item) => (
            <CarouselItem key={Item?.toString()}>{Item}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
