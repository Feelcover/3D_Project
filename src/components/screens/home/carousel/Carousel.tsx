import { useCarousel } from "@/hooks/useCarousel";
import React, { FC } from "react";
import Carousel3DItem from "../3D/Carousel3DItem";
import CarouselItem from "./CarouselItem";
import Navigation from "./Navigation";

const Carousel: FC = () => {
  const { items } = useCarousel();

  return (
    <section className="mt-14">
      <div className="flex items-center">
        {items.length ? (
          items.map((item) => <Carousel3DItem key={item.id} item={item} />)
        ) : (
          <div>Элементы не найдены</div>
        )}
      </div>
      <Navigation />
    </section>
  );
};

export default Carousel;
