import React, { useRef, useMemo,Suspense, forwardRef } from 'react'
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

function Moon() {
  return (
    <mesh position={[0, 7, 10]} rotation={[0, 0, 0]}>
  <sphereGeometry args={[1.5, 16, 16]} />
  <meshStandardMaterial 
    color="lightgray" 
    roughness={0.5} 
    metalness={0.5} 
    emissive="lightgray"
    emissiveIntensity={0.5}
  />
</mesh>

  )
}

const HeroWith3D=forwardRef(({handleScroll,storiesRef})=>{
  return (
    <div className="relative h-screen bg-gray-900">
      <Canvas shadows className="absolute inset-0">
        <PerspectiveCamera makeDefault position={[1, 2, 10]} fov={50} />
        <fog attach="fog" args={['#120101', 5, 20]} />
        <ambientLight intensity={0.1} />
        <spotLight position={[5, 5, 5]} angle={0.35} penumbra={1} intensity={1} color="#ff4500" />
        <pointLight position={[-5, -5, -5]} intensity={0.2} color="#4b0082" />
        <Suspense fallback={null}>
          <Model url="./happy_halloween_framer_challenge.gltf" />
        </Suspense>
        <Moon />
        <Bats count={50} />
        <Stars count={200} />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center mt-20 text-gray-200">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">Welcome to the Graveyard</h1>
        <p className="text-xl mb-8">Explore the eerie Halloween scene below</p>
        <button className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors"
        onClick={()=>handleScroll(storiesRef)}>
          Enter If You Dare
        </button>
      </div>
    </div>
  )
});
export default HeroWith3D