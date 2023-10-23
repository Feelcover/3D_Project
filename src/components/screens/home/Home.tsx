import React, { FC } from "react";
import Carousel from "./carousel/Carousel";
import ThreeProvider from "./3D/Three";

const Home: FC = () => {
  return (
    <div className="m-16">
      <h1 className="text-7xl text-center font-medium">ThreeJS</h1>
      <Carousel />
      <ThreeProvider/>
    </div>
  );
};

export default Home;
