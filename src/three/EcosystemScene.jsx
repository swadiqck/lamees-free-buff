import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'

function TechNode({ position, label, color = '#6366f1', index }) {
  const meshRef = useRef()
  const initialAngle = (index / 6) * Math.PI * 2
  const radius = 3

  useFrame((state) => {
    if (meshRef.current) {
      const angle = initialAngle + state.clock.elapsedTime * 0.15
      meshRef.current.position.x = Math.cos(angle) * radius
      meshRef.current.position.z = Math.sin(angle) * radius
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.3
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Node sphere */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
        />
      </mesh>
      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 0.5, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

function ConnectionLine({ start, end, color = '#6366f1' }) {
  const lineRef = useRef()

  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2 + 0.5,
        (start[2] + end[2]) / 2
      ),
      new THREE.Vector3(...end)
    )
    return curve.getPoints(20)
  }, [start, end])

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.material.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.2} />
    </line>
  )
}

function CenterCore() {
  const coreRef = useRef()

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.3
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={coreRef}>
        {/* Central sphere */}
        <mesh>
          <dodecahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.6}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.8}
            transparent
            opacity={0.15}
          />
        </mesh>
        {/* Orbit rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.2, 1.25, 64]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.15} side={THREE.DoubleSide} />
        </mesh>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <ringGeometry args={[1.5, 1.55, 64]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.1} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  )
}

function EcosystemParticles() {
  const particlesRef = useRef()
  const count = 100

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 1 + Math.random() * 5
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4
      pos[i * 3 + 2] = Math.sin(angle) * radius
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03
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
      <pointsMaterial color="#818cf8" size={0.015} transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function Scene() {
  const nodes = [
    { label: 'Frontend', color: '#6366f1' },
    { label: 'Backend', color: '#22c55e' },
    { label: 'Database', color: '#f59e0b' },
    { label: 'API', color: '#06b6d4' },
    { label: 'Cloud', color: '#8b5cf6' },
    { label: 'Deploy', color: '#ec4899' },
  ]

  const nodePositions = nodes.map((_, i) => {
    const angle = (i / nodes.length) * Math.PI * 2
    return [Math.cos(angle) * 3, 0, Math.sin(angle) * 3]
  })

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 3, 0]} intensity={0.8} color="#6366f1" />
      <pointLight position={[0, -3, 0]} intensity={0.3} color="#818cf8" />

      <CenterCore />
      <EcosystemParticles />

      {nodes.map((node, i) => (
        <TechNode
          key={i}
          position={[0, 0, 0]}
          label={node.label}
          color={node.color}
          index={i}
        />
      ))}

      {nodePositions.map((pos, i) => (
        <ConnectionLine
          key={i}
          start={[0, 0, 0]}
          end={pos}
          color={nodes[i].color}
        />
      ))}
    </>
  )
}

export default function EcosystemScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 7], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  )
}
