import { ICarouselItem } from "@/store/carousel/carousel.interface";
import React, { FC } from "react";
import cn from "clsx";
import { useCarousel } from "@/hooks/useCarousel";
import ThreeProvider from "./Three";
import Box from "./Box";

const Carousel3DItem: FC<{ item: ICarouselItem }> = ({ item }) => {
  const { currentId } = useCarousel();
  const isActive = currentId === item.id;

  return (
    <div className={cn(isActive ? "w-1/2 h-96" : "w-1/4 h-60")}>
        <ThreeProvider>
          <Box position={[0, 0, 0]} item={item}/>
        </ThreeProvider>
      <div
        className={cn(
          "mx-auto mt-16 bg-aqua h-2 rounded transition-all duration-500 ease-in-out",
          isActive ? "w-1/2" : "w-0"
        )}
      />
    </div>
  );
};

export default Carousel3DItem;
