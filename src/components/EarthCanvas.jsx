/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loading from "./CanvasLoder";

const Earth = () => {
  const earth = useGLTF("./Earth2/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} />

      <spotLight
        penumbra={1}
        castShadow
        position={[-20, 50, 10]}
        angle={0.12}
        intensity={1}
      />
      <primitive
        object={earth.scene}
        position-y={0}
        rotation-y={0}
        scale={3.9}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fav: 50, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<Loading />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
