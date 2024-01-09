import { Html, useProgress } from "@react-three/drei";

const Loading = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="text-2xl text-center text-white">
        {progress.toFixed(2)}%
      </span>
    </Html>
  );
};

export default Loading;
