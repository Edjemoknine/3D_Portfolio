/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loading from "./CanvasLoder";

const Hero = ({ isMobile }) => {
  const PC = useGLTF("./Pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={2} />

      <spotLight
        penumbra={1}
        castShadow
        position={[-20, 50, 10]}
        angle={0.12}
        intensity={1}
      />

      <primitive
        object={PC.scene}
        scale={isMobile ? 0.3 : 1}
        position={[0, -1.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      // className="bg-red-300"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loading />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Hero />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ModelCanvas;
