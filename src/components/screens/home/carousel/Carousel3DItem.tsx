import { ICarouselItem } from "@/store/carousel/carousel.interface";
import Image from "next/image";
import React, { FC } from "react";
import cn from "clsx";
import { useCarousel } from "@/hooks/useCarousel";
import useActions from "@/hooks/useActions";
import ThreeProvider from "./Three";
import Box from "./Box";

const Carousel3DItem: FC<{ item: ICarouselItem }> = ({ item }) => {
  const { currentId } = useCarousel();
  const { changeCurrentId } = useActions();
  const isActive = currentId === item.id;

  return (
    <div className={cn("mx-14", isActive ? "w-1/2" : "w-1/4")}>
      <button onClick={() => changeCurrentId(item.id)}>
        {/* <Image
          className="rounded-x1 shadow-lg overflow-hidden"
          src={item.image}
          alt=""
          width={700}
          height={394}
        /> */}
        <ThreeProvider>
          <Box position={[0, 0, 0]} />
        </ThreeProvider>
      </button>
      <div
        className={cn(
          "mx-auto mt-10 bg-aqua h-2 rounded transition-all duration-500 ease-in-out",
          isActive ? "w-1/2" : "w-0"
        )}
      />
    </div>
  );
};

export default Carousel3DItem;
