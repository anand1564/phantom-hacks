import React, { useRef, useMemo,Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center, Html, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import {Bats,Stars} from './BatsandStars'
function Model({ url }) {
  const { scene } = useGLTF(url)
  const modelRef = useRef()

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005
    }
  })

  return (
    <Center scale={[0.12, 0.12, 0.12]}>
      <primitive ref={modelRef} object={scene} />
    </Center>
  )
}

export default function HeroWith3D() {
  return (
    <div className="relative h-screen bg-gray-900">
      <Canvas shadows className="absolute inset-0">
        <PerspectiveCamera makeDefault position={[1, 2, 4]} fov={45} />
        <fog attach="fog" args={['#120101', 5, 20]} />
        <ambientLight intensity={0.1} />
        <spotLight position={[5, 5, 5]} angle={0.25} penumbra={1} intensity={1} color="#ff4500" />
        <pointLight position={[-5, -5, -5]} intensity={0.2} color="#4b0082" />
        <Suspense fallback={null}>
          <Model url="./happy_halloween_framer_challenge.gltf" />
        </Suspense>
        <Bats count={50} />
        <Stars count={200} />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-200">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">Welcome to the Graveyard</h1>
        <p className="text-xl mb-8">Explore the eerie Halloween scene below</p>
        <button className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors">
          Enter If You Dare
        </button>
      </div>
    </div>
  )
}