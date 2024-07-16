import { OrbitControls, Stage } from "@react-three/drei";
import { Untitled } from "./Untitled";
import { OneObst } from "./OneObst";
export const Experience = () => {
  return (
    <>
      <Stage adjustCamera={1}>
        {/* <Untitled /> */}
        <OneObst rotation={[0, Math.PI / 2, 0]} />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 3}
      />
    </>
  );
};
