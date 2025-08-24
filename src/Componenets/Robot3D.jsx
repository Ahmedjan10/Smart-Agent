'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const RobotModel = () => {
  const robotRef = useRef(null);
  const headRef = useRef(null);
  const eyesRef = useRef(null);

  useFrame((state) => {
    if (robotRef.current) {
      robotRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      robotRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.03;
    }
    if (eyesRef.current) {
      const blinkTime = state.clock.elapsedTime * 2;
      const blink = Math.sin(blinkTime) > 0.98 ? 0.1 : 1;
      eyesRef.current.scale.y = blink;
    }
  });

  return (
    <group ref={robotRef} position={[0, -0.5, 0]}>
      {/* Head */}
      <mesh ref={headRef} position={[0, 1.2, 0]}>
        <boxGeometry args={[0.8, 0.6, 0.7]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} emissive="#00d4ff" emissiveIntensity={0.1} />
      </mesh>

      {/* Eyes */}
      <group ref={eyesRef} position={[0, 1.3, 0.3]}>
        {[-0.15, 0.15].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <sphereGeometry args={[0.08]} />
            <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.8} />
          </mesh>
        ))}
      </group>

      {/* Antenna */}
      <mesh position={[0, 1.6, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.05]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1} />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1, 1.2, 0.8]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} emissive="#00d4ff" emissiveIntensity={0.05} />
      </mesh>

      {/* Chest panel */}
      <mesh position={[0, 0.4, 0.35]}>
        <boxGeometry args={[0.6, 0.4, 0.05]} />
        <meshStandardMaterial color="#00d4ff" transparent opacity={0.3} emissive="#00d4ff" emissiveIntensity={0.3} />
      </mesh>

      {/* Arms */}
      {[-0.7, 0.7].map((x, i) => (
        <mesh key={i} position={[x, 0.6, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.8]} />
          <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Legs */}
      {[-0.25, 0.25].map((x, i) => (
        <mesh key={i} position={[x, -0.7, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.8]} />
          <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Feet */}
      {[-0.25, 0.25].map((x, i) => (
        <mesh key={i} position={[x, -1.15, 0.1]}>
          <boxGeometry args={[0.2, 0.1, 0.4]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
};

const HolographicRings = () => {
  const ringsRef = useRef(null);

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={ringsRef}>
      {[1, 1.5, 2].map((radius, index) => (
        <mesh key={index} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <torusGeometry args={[radius, 0.01, 8, 32]} />
          <meshStandardMaterial
            color="#00d4ff"
            transparent
            opacity={0.3 - index * 0.1}
            emissive="#00d4ff"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

const Robot3D = () => {
  return (
    <div className="w-full h-96 rounded-3xl overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 2, 2]} intensity={0.8} color="#00d4ff" />
        <pointLight position={[-2, -2, 2]} intensity={0.5} color="#a855f7" />
        <spotLight position={[0, 3, 0]} angle={0.3} penumbra={1} intensity={0.8} color="#00d4ff" />

        {/* 3D Content */}
        <RobotModel />
        <HolographicRings />

        {/* Fog */}
        <fog attach="fog" args={['#0a0a0f', 3, 8]} />
      </Canvas>
    </div>
  );
};

export default Robot3D;
