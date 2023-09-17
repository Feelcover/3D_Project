import useActions from "@/hooks/useActions";
import React, { FC } from "react";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

const Navigation: FC = () => {
  const { nextSlide, prevSlide } = useActions();
  return (
    <div className="mt-10 w-1/2 flex items-center justify-center mx-auto">
      <button
        onClick={() => prevSlide()}
        className="mr-14 transition-colors duration-300 hover:text-aqua"
      >
        <BsChevronDoubleLeft size={40} />
      </button>
      <button
        onClick={() => nextSlide()}
        className="transition-colors duration-300 hover:text-aqua"
      >
        <BsChevronDoubleRight size={40} />
      </button>
    </div>
  );
};

export default Navigation;
