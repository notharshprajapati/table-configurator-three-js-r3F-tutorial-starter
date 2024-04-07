import { OrbitControls, Stage } from "@react-three/drei";
import { Untitled } from "./Untitled";
// import { Donut } from "./Donut";
// import { Sphere } from "./Sphere";
export const Experience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        shadows={{
          type: "accumulative",
          color: "#fff",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >
        <Untitled />
        {/* <Donut /> */}
        {/* <Sphere /> */}
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};
