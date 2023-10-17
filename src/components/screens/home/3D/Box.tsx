import { useTexture } from "@react-three/drei";
import { ThreeElements, useFrame } from "@react-three/fiber";
import React, { FC, useRef, useState } from "react";

type TypeBox = {
  image: string
} & ThreeElements["mesh"]

const Box: FC<TypeBox> = (props) => {
  const ref = useRef<THREE.Group>(null!);
  useFrame((state, delta) => (ref.current.rotation.y += delta));

  const image = useTexture(props.image)

  return (
    <group ref={ref}>
      <Plane map={image}/>
    </group>
  );
};

export default Box;
