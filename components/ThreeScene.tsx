import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Add type definitions for React Three Fiber intrinsic elements to resolve TypeScript errors
// Augment React's JSX namespace which is used in newer React versions
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshPhysicalMaterial: any;
      torusGeometry: any;
      meshStandardMaterial: any;
      sphereGeometry: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

// Also augment global JSX namespace for broader compatibility
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshPhysicalMaterial: any;
      torusGeometry: any;
      meshStandardMaterial: any;
      sphereGeometry: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

const Geometries = () => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!groupRef.current || !meshRef.current || !torusRef.current) return;
    
    // Slow rotation for the whole group
    groupRef.current.rotation.y += 0.002;
    
    // Mouse interactivity
    const { x, y } = state.mouse;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, y * 0.2, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.2, 0.05);

    // Individual mesh animations
    meshRef.current.rotation.x -= 0.005;
    meshRef.current.rotation.z += 0.005;
    
    torusRef.current.rotation.x += 0.005;
    torusRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={groupRef}>
      {/* Central Glass Icosahedron */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial 
            roughness={0.1} 
            transmission={0.9} 
            thickness={2} 
            color="#2dd4bf" // Teal
            ior={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Outer Wireframe Torus */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1}>
        <mesh ref={torusRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.5} />
        </mesh>
      </Float>

      {/* Floating Particles/Nodes */}
      <Sparkles count={50} scale={8} size={2} speed={0.4} opacity={0.5} color="#cbd5e1" />
      
      {/* Small orbiting satellites */}
      <group rotation={[0, 0, Math.PI / 4]}>
         <Float speed={4} rotationIntensity={2} floatIntensity={2}>
            <mesh position={[3, 0, 0]}>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshStandardMaterial color="#a78bfa" />
            </mesh>
         </Float>
      </group>
    </group>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#2dd4bf" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#60a5fa" />
        
        <Geometries />
        
        {/* Environment reflection for the glass */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

// A simpler node network for the AI section
const NodeNetwork = () => {
    const groupRef = useRef<THREE.Group>(null);
    useFrame(() => {
        if(groupRef.current) groupRef.current.rotation.y += 0.001;
    });

    return (
        <group ref={groupRef}>
             <Sparkles count={80} scale={10} size={3} speed={0.2} opacity={0.6} color="#2dd4bf" />
             <Stars radius={50} depth={50} count={500} factor={4} saturation={0} fade speed={1} />
        </group>
    )
}

export const AiNetwork3D = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-60">
             <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
                <NodeNetwork />
             </Canvas>
        </div>
    )
}