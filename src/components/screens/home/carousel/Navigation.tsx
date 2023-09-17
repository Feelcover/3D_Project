import useActions from "@/hooks/useActions";
import React, { FC } from "react";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

const Navigation: FC = () => {
  const { nextSlide, prevSlide } = useActions();
  return (
    <div>
      <button onClick={() => prevSlide()}>
      <BsChevronDoubleLeft />

      </button>
      <button onClick={() => nextSlide()}>
        <BsChevronDoubleRight />

      </button>
    </div>
  );
};

export default Navigation;
