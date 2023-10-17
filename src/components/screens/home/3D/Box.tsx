import useActions from "@/hooks/useActions";
import { ICarouselItem } from "@/store/carousel/carousel.interface";
import { useTexture } from "@react-three/drei";
import { ThreeElements, useFrame } from "@react-three/fiber";
import React, { FC, useRef, useState } from "react";
import * as THREE from "three";

type TypeBox = {
  item: ICarouselItem;
} & ThreeElements["mesh"];

const Box: FC<TypeBox> = ({ item, ...rest }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const image = useTexture(item.image);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 2;
      ref.current.rotation.y += delta;
    }
  });

  const { changeCurrentId } = useActions();
  return (
    <mesh
      {...rest}
      ref={ref}
      scale={3}
      onClick={() => changeCurrentId(item.id)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial map={image} side={THREE.FrontSide} />
    </mesh>
  );
};

export default Box;
