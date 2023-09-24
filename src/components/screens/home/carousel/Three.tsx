import { Canvas } from '@react-three/fiber'
import React from 'react'
import Box from './Box'


const Three = () => {
  return (
    <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-3, 0, 0]} />
    <Box position={[3, 0, 0]} />
  </Canvas>
  )
}

export default Three