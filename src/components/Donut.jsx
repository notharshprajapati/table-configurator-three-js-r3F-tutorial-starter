import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Donut(props) {
  const { nodes, materials } = useGLTF("./models/donut.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Torus.geometry} material={nodes.Torus.material} />
    </group>
  );
}

useGLTF.preload("./models/donut.glb");
