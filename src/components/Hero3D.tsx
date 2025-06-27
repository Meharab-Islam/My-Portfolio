"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "@react-three/drei";

export default function Hero3D() {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <OrbitControls />
        <Box>
          <meshStandardMaterial attach="material" color="skyblue" />
        </Box>
      </Canvas>
    </div>
  );
}
