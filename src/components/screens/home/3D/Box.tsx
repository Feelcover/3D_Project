import { useTexture } from "@react-three/drei";
import { ThreeElements, useFrame } from "@react-three/fiber";
import React, { FC, useRef, useState } from "react";

type TypeBox = {
  image: string
} & ThreeElements["mesh"]

const Box: FC<TypeBox> = (props) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.y += delta));

  const image = useTexture(props.image)

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 3}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshBasicMaterial map={image}/>
    </mesh>
  );
};

export default Box;
