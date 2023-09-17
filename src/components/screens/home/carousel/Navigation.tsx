import useActions from "@/hooks/useActions";
import React, { FC } from "react";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

const Navigation: FC = () => {
  const { nextSlide, prevSlide } = useActions();
  return (
    <div>
      <button onClick={() => prevSlide()}>
        <BsChevronDoubleRight />
      </button>
      <button onClick={() => nextSlide()}>
        <BsChevronDoubleLeft />
      </button>
    </div>
  );
};

export default Navigation;
