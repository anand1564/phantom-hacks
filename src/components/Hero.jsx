import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Html, PerspectiveCamera } from '@react-three/drei';
import { ErrorBoundary } from 'react-error-boundary';
import * as THREE from 'three';
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';

function Model({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set('#000000');
        child.material.roughness = 0.7;
        child.material.metalness = 0.2;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Slow rotation
    }
  });

  return (
    <Center scale={[0.12, 0.12, 0.12]}>
      <primitive ref={modelRef} object={scene} />
    </Center>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight position={[5, 5, 5]} angle={0.35} penumbra={1} intensity={1} color="#ff4500" />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#4b0082" />
    </>
  );
}

function Fallback() {
  return (
    <Html center>
      <div className="text-white text-center">
        <h2 className="text-xl font-bold mb-2">Oops! Something went wrong.</h2>
        <p>We're having trouble loading the 3D model.</p>
      </div>
    </Html>
  );
}

export default function HeroWith3D() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    setScrolled(scrollTop > 10);
  };

  return (
    <div className="h-screen overflow-y-auto" onScroll={handleScroll}>
      <div className="relative h-screen bg-gray-900">
        <ErrorBoundary fallback={<div className="h-full bg-gray-900" />} onError={(error, info) => console.error(error, info)}>
          <Canvas shadows className="absolute inset-0 z-0">
            <PerspectiveCamera makeDefault position={[1, 2, 5]} fov={45} />
            <fog attach="fog" args={['#120101', 5, 20]} />
            <Lights />
            <Suspense fallback={<Fallback />}>
              <Model url="/happy_halloween_framer_challenge.gltf" />
            </Suspense>
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
          </Canvas>
        </ErrorBoundary>
        <div className="absolute inset-0 flex flex-col items-center justify-start mt-10 text-gray-200 z-10">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Welcome to Spooky Graveyard</h1>
          <p className="text-xl mb-8">Explore the eerie Halloween scene below</p>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors">
            Enter If You Dare
          </button>
        </div>
      </div>
    </div>
  );
}
