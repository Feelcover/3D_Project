import React, { FC } from "react";
import Carousel from "./carousel/Carousel";
import Three from "./carousel/Three";

const Home: FC = () => {
  return (
    <div className="m-16">
      <h1 className="text-7xl text-center font-medium">Portfolio</h1>
      <Carousel />
      <Three/>
    </div>
  );
};

export default Home;
