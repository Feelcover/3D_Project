import { Canvas } from "@react-three/fiber";
import React, { PropsWithChildren, Suspense } from "react";

const ThreeProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Canvas camera={{ far: 100}} shadows='soft'>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
      {children}
      </Suspense>
    </Canvas>
  );
};

export default ThreeProvider;
