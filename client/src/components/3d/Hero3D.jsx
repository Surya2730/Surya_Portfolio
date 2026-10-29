/**
 * Hero3D.jsx — Interactive 3D Canvas Scene
 *
 * Concepts applied:
 *   - React Three Fiber (R3F): React renderer for Three.js
 *   - Canvas: sets up WebGL context, default camera, and animation render loop
 *   - useFrame: hook that runs every frame (60fps) for continuous rotation and lerping
 *   - Float: Drei helper providing organic sinusoidal floating motion
 *   - MeshDistortMaterial: custom shader material that creates organic liquid-metal wave distortions
 *   - WebGL Support Detection & React Error Boundary: graceful CSS fallback if WebGL is disabled
 */

import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import './Hero3D.css'

// Safe WebGL feature check
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

/**
 * Animated 3D Core:
 * An Icosahedron with an outer distorted aura and an inner wireframe structure
 */
function FuturisticCore() {
  const outerMesh = useRef(null)
  const innerMesh = useRef(null)
  const ringRef = useRef(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Smooth subtle mouse tracking (lerp to cursor)
    const targetX = (state.pointer.x * Math.PI) / 8
    const targetY = (state.pointer.y * Math.PI) / 8

    if (outerMesh.current) {
      outerMesh.current.rotation.x = THREE.MathUtils.lerp(
        outerMesh.current.rotation.x,
        targetY + t * 0.25,
        0.05
      )
      outerMesh.current.rotation.y = THREE.MathUtils.lerp(
        outerMesh.current.rotation.y,
        targetX + t * 0.35,
        0.05
      )
    }

    if (innerMesh.current) {
      innerMesh.current.rotation.x = -t * 0.3
      innerMesh.current.rotation.y = -t * 0.4
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15
      ringRef.current.rotation.x = 1.2 + Math.sin(t * 0.5) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      {/* Outer Distorted Organic Energy Mesh */}
      <mesh ref={outerMesh} scale={1.35}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>

      {/* Inner Geometric Wireframe Core */}
      <mesh ref={innerMesh} scale={0.95}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#34d399"
          wireframe={true}
          emissive="#34d399"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Orbital High-Tech Ring */}
      <mesh ref={ringRef} scale={1.9}>
        <torusGeometry args={[1, 0.018, 16, 64]} />
        <meshStandardMaterial
          color="#059669"
          emissive="#059669"
          emissiveIntensity={0.8}
        />
      </mesh>
    </Float>
  )
}

/**
 * Ambient Particles in 3D Space
 */
function SubtleParticles({ count = 35 }) {
  const points = useRef(null)

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return pos
  })

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#6ee7b7"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

/**
 * CSS Fallback in case WebGL is unavailable
 */
function Hero3DFallback() {
  return (
    <div className="hero-3d-fallback" aria-hidden="true">
      <div className="fallback-orb-glow" />
      <div className="fallback-polyhedron">
        <div className="fallback-ring fallback-ring-outer" />
        <div className="fallback-core" />
        <div className="fallback-ring fallback-ring-inner" />
      </div>
    </div>
  )
}

/**
 * Error boundary component for Three.js Canvas
 */
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.warn('Hero3D WebGL Canvas failed to initialize:', error)
  }

  render() {
    if (this.state.hasError) {
      return <Hero3DFallback />
    }
    return this.props.children
  }
}

/**
 * Main Hero3D Component
 */
export default function Hero3D() {
  const [hasWebGL] = useState(() => (typeof window !== 'undefined' ? checkWebGLSupport() : true))

  if (!hasWebGL) {
    return <Hero3DFallback />
  }

  return (
    <div className="hero-3d-wrapper" aria-hidden="true">
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          dpr={[1, 1.5]} // capped for high performance
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <Suspense fallback={null}>
            {/* Studio Lighting Setup */}
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 6, 4]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-4, -3, -2]} color="#34d399" intensity={2} />
            <pointLight position={[4, -2, 2]} color="#059669" intensity={2.5} />

            {/* Futuristic 3D Mesh Core */}
            <FuturisticCore />

            {/* Subtle Space Particles */}
            <SubtleParticles />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  )
}
