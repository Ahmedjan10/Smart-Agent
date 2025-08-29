import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import Robot from "./Robot"; // import updated Robot.jsx

function Robot3D() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Robot rotation={[0, -Math.PI / 2, 0]} scale={1.1} position={[0.5, -0.5, -0.7]} />
        <Environment preset="city" background={false} intensity={0.5} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

export default Robot3D;
