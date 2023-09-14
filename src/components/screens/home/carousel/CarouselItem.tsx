import { ICarouselItem } from "@/store/carousel/carousel.interface";
import Image from "next/image";
import React, { FC } from "react";

const CarouselItem: FC<{ item: ICarouselItem }> = ({ item }) => {
  return (
    <div className="rounded-x1 shadow-lg overflow-hidden mx-14">
      <Image src={item.image} alt="" width={700} height={394} />
    </div>
  );
};

export default CarouselItem;
