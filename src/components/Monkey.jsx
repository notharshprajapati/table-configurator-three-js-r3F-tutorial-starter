import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Monkey(props) {
  const { nodes, materials } = useGLTF("./models/monkey.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
      />
    </group>
  );
}

useGLTF.preload("./models/monkey.glb");
