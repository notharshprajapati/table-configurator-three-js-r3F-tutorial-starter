import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [1, 1, 0], fov: 50 }}>
        <Experience />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]}>
          <planeGeometry args={[800, 800]} />
          <meshStandardMaterial color={"black"} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
