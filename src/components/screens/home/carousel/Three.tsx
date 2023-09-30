import { Canvas } from "@react-three/fiber";
import React, { PropsWithChildren } from "react";

const ThreeProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
};

export default ThreeProvider;
