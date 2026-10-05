import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingBox({ position, rotation, scale, speed = 1, color = '#6366f1' }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * speed
      meshRef.current.rotation.y += 0.003 * speed
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.001
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        wireframe
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

function FloatingTorus({ position, scale, speed = 1, color = '#818cf8' }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2
    }
  })

  return (
    <Float speed={speed * 2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.12}
          wireframe
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

function FloatingSphere({ position, scale, color = '#c084fc' }) {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.08}
          wireframe
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  )
}

function Monitor() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Monitor screen */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2.4, 1.6, 0.08]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        {/* Screen glow */}
        <mesh position={[0, 0.5, 0.05]}>
          <planeGeometry args={[2.2, 1.4]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
        {/* Stand */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.08, 0.15, 0.4, 16]} />
          <meshStandardMaterial color="#2a2a3e" />
        </mesh>
        {/* Base */}
        <mesh position={[0, -0.75, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
          <meshStandardMaterial color="#2a2a3e" />
        </mesh>
      </group>
    </Float>
  )
}

function CodeLines({ position }) {
  const groupRef = useRef()
  const linesRef = useRef([])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  const lineCount = 8
  const lines = useMemo(() => {
    return Array.from({ length: lineCount }, (_, i) => ({
      y: i * 0.12 - (lineCount * 0.12) / 2,
      width: 0.3 + Math.random() * 0.8,
      opacity: 0.3 + Math.random() * 0.4,
    }))
  }, [])

  return (
    <group ref={groupRef} position={position}>
      {lines.map((line, i) => (
        <mesh key={i} position={[0, line.y, 0]}>
          <boxGeometry args={[line.width, 0.04, 0.01]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#818cf8' : i % 3 === 1 ? '#22c55e' : '#f59e0b'}
            emissive={i % 3 === 0 ? '#818cf8' : i % 3 === 1 ? '#22c55e' : '#f59e0b'}
            emissiveIntensity={0.8}
            transparent
            opacity={line.opacity}
          />
        </mesh>
      ))}
    </group>
  )
}

function DataParticles() {
  const particlesRef = useRef()
  const count = 200

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#6366f1"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#e0e7ff" />
      <pointLight position={[-3, 2, 2]} intensity={0.8} color="#6366f1" />
      <pointLight position={[3, -2, -2]} intensity={0.4} color="#c084fc" />

      <DataParticles />

      <Monitor />

      <FloatingBox position={[3, 1.5, -2]} rotation={[0.5, 0.3, 0]} scale={0.6} speed={0.8} />
      <FloatingBox position={[-3.5, -1, -1]} rotation={[0.2, 0.8, 0.5]} scale={0.4} speed={1.2} color="#c084fc" />
      <FloatingBox position={[2, -2, -3]} rotation={[0.8, 0.2, 0.3]} scale={0.35} speed={0.6} color="#22c55e" />

      <FloatingTorus position={[-2.5, 2, -1.5]} scale={0.5} speed={0.7} color="#6366f1" />
      <FloatingTorus position={[3.5, -0.5, -2]} scale={0.3} speed={1} color="#818cf8" />

      <FloatingSphere position={[4, 2.5, -3]} scale={0.3} color="#6366f1" />
      <FloatingSphere position={[-4, -2, -2.5]} scale={0.25} color="#c084fc" />
      <FloatingSphere position={[1.5, 3, -4]} scale={0.15} color="#22c55e" />

      <CodeLines position={[-2, 0, -1]} />
      <CodeLines position={[2.5, -1.5, -2.5]} />
    </>
  )
}

export default function HeroScene({ mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  )
}
