// Robot.jsx
import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Robot(props) {
  const { scene, animations } = useGLTF("/public/Robot.gltf"); // <-- your GLB file
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Play first animation (check Sketchfab which ones exist)
    if (actions && actions["Idle"]) {
      actions["Idle"].play();
    } else {
      // If no "Idle", just play the first animation
      const firstAction = Object.values(actions)[0];
      if (firstAction) firstAction.play();
    }
  }, [actions]);

  return <primitive object={scene} {...props} />;
}
