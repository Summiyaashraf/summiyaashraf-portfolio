"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

const TITANIUM = "#e0e8ff";
const CYBER_VIOLET = "#7c3aed";
const CYAN_GLOW = "#06b6d4";

type OrbitConfig = {
  radius: number;
  tube: number;
  speed: number;
  tilt: [number, number, number];
  color: string;
  emissive: string;
  intensity: number;
  node: boolean;
};

const ORBITS: OrbitConfig[] = [
  {
    radius: 1.72,
    tube: 0.013,
    speed: 0.45,
    tilt: [Math.PI / 2.3, 0, 0.28],
    color: CYAN_GLOW,
    emissive: CYAN_GLOW,
    intensity: 1.5,
    node: true,
  },
  {
    radius: 2.12,
    tube: 0.01,
    speed: -0.3,
    tilt: [Math.PI / 1.85, 0.65, -0.42],
    color: CYBER_VIOLET,
    emissive: CYBER_VIOLET,
    intensity: 1.3,
    node: true,
  },
  {
    radius: 2.55,
    tube: 0.007,
    speed: 0.19,
    tilt: [Math.PI / 1.6, -0.5, 0.85],
    color: TITANIUM,
    emissive: CYAN_GLOW,
    intensity: 0.85,
    node: false,
  },
];

function OrbitalRing({ config }: { config: OrbitConfig }) {
  const group = useRef<THREE.Group>(null);
  const node = useRef<THREE.Mesh>(null);
  const angle = useRef(0);
  const { radius, tube, speed, tilt, color, emissive, intensity, node: hasNode } = config;

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.z += speed * delta;
    }

    if (node.current) {
      angle.current -= speed * 3.2 * delta;
      node.current.position.set(
        Math.cos(angle.current) * radius,
        Math.sin(angle.current) * radius,
        0
      );
    }
  });

  return (
    <group ref={group} rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, tube, 8, 180]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={intensity}
          metalness={0.9}
          roughness={0.25}
          toneMapped={false}
        />
      </mesh>

      {hasNode && (
        <mesh ref={node}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color={TITANIUM} toneMapped={false} />
        </mesh>
      )}
    </group>
  );
}

function CyberCore() {
  const root = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.LineSegments>(null);

  useFrame((state, delta) => {
    const { pointer, clock } = state;
    const t = clock.elapsedTime;

    if (root.current) {
      root.current.rotation.x = THREE.MathUtils.damp(
        root.current.rotation.x,
        pointer.y * 0.32,
        3,
        delta
      );
      root.current.rotation.y = THREE.MathUtils.damp(
        root.current.rotation.y,
        pointer.x * 0.46,
        3,
        delta
      );
      root.current.position.y = Math.sin(t * 1.15) * 0.11;
    }

    if (inner.current) {
      inner.current.rotation.y += delta * 0.32;
      inner.current.rotation.x += delta * 0.14;
    }

    if (shell.current) {
      shell.current.rotation.y -= delta * 0.22;
      shell.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group ref={root}>
      {/* Solid titanium-cyan core */}
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.92, 4]} />
        <MeshDistortMaterial
          color={CYBER_VIOLET}
          emissive={CYAN_GLOW}
          emissiveIntensity={0.42}
          distort={0.32}
          speed={1.6}
          metalness={0.85}
          roughness={0.16}
        />
      </mesh>

      {/* Violet inner glow shell */}
      <mesh scale={1.12}>
        <icosahedronGeometry args={[0.92, 1]} />
        <meshBasicMaterial
          color={CYBER_VIOLET}
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Geodesic wireframe cage */}
      <lineSegments ref={shell}>
        <icosahedronGeometry args={[1.3, 1]} />
        <lineBasicMaterial color={CYAN_GLOW} transparent opacity={0.55} toneMapped={false} />
      </lineSegments>

      {/* Titanium specular shell */}
      <mesh scale={1.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={TITANIUM}
          wireframe
          transparent
          opacity={0.22}
          metalness={1}
          roughness={0.1}
          toneMapped={false}
        />
      </mesh>

      {ORBITS.map((orbit) => (
        <OrbitalRing key={orbit.radius} config={orbit} />
      ))}
    </group>
  );
}

export function Scene3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 3, 5]} intensity={1.5} color={TITANIUM} />
      <pointLight position={[-3.2, -2.2, -2.4]} intensity={2.6} color={CYAN_GLOW} />
      <pointLight position={[3, 2.4, 2.6]} intensity={2.4} color={CYBER_VIOLET} />
      <pointLight position={[0, 0, 3]} intensity={0.8} color={TITANIUM} />

      <CyberCore />

      <Sparkles count={90} scale={6} size={2.4} speed={0.32} color={CYAN_GLOW} opacity={0.7} />
      <Stars radius={70} depth={45} count={1600} factor={3.4} saturation={0} fade speed={0.35} />
    </Canvas>
  );
}
