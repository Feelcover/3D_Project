import { useCarousel } from "@/hooks/useCarousel";
import React, { FC } from "react";
import CarouselItem from "./CarouselItem";

const Carousel: FC = () => {
  const { items } = useCarousel();

  return (
    <div className="mt-10">
      {items.length ? (
        items.map((item) => <CarouselItem key={item.id} item={item} />)
      ) : (
        <div>Элементы не найдены</div>
      )}
    </div>
  );
};

export default Carousel;
