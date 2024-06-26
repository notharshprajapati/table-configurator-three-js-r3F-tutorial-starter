/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/untitled.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Untitled(props) {
  const { nodes, materials } = useGLTF("./models/untitled.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
        scale={[15, 0.1, 10]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Material.003"]}
        position={[6, 0, 8.6]}
        scale={[0.2, 1, 0.4]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Material.003"]}
        position={[-7, 0, 8.6]}
        scale={[0.2, 1, 0.4]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.004"]}
        position={[8.615, 1, -6.92]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Material.004"]}
        position={[8, 0.2, 4.33]}
        scale={[1, 0.1, 5]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["Material.005"]}
        position={[-4, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/untitled.glb");
