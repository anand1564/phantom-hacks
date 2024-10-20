import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Moon = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="gray" transparent />
      </mesh>

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />
    </Canvas>
  );
};

export default Moon;
