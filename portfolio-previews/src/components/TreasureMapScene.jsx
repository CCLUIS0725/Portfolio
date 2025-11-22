import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll, useTransform } from 'framer-motion';

// The Golden Sphere (Closed State)
const GoldenSphere = ({ scrollYProgress }) => {
    const meshRef = useRef();
    const materialRef = useRef();

    useFrame((state) => {
        if (!meshRef.current) return;

        // Get current scroll value (0 to 1)
        const scroll = scrollYProgress ? scrollYProgress.get() : 0;

        // Rotate constantly
        meshRef.current.rotation.y += 0.002;
        meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;

        // Open/Expand based on scroll
        // Scale up and fade out as scroll increases
        const scale = 1.5 + scroll * 3; // Increased scale for background impact
        meshRef.current.scale.set(scale, scale, scale);

        // Fade out material
        if (materialRef.current) {
            materialRef.current.opacity = Math.max(0, 1 - scroll * 2);
            materialRef.current.transparent = true;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 32, 32]}> {/* Reduced segments for performance */}
            <MeshDistortMaterial
                ref={materialRef}
                color="#FFD700"
                envMapIntensity={1.5}
                clearcoat={1}
                clearcoatRoughness={0.1}
                metalness={1}
                roughness={0.2}
                distort={0.3}
                speed={1.5}
            />
        </Sphere>
    );
};

// The Holographic Map (Open State)
const HolographicMap = ({ scrollYProgress }) => {
    const pointsRef = useRef();

    // Generate random points for the hologram
    const particlesPosition = useMemo(() => {
        const count = 3000; // Reduced count for performance
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);
            const r = 1.5 + Math.random() * 3; // Larger radius for background

            positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
            positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
            positions[i * 3 + 2] = r * Math.cos(theta);
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const scroll = scrollYProgress ? scrollYProgress.get() : 0;

        pointsRef.current.rotation.y -= 0.002; // Slower rotation

        // Reveal based on scroll
        const targetScale = 0.1 + scroll * 1.5;
        const currentScale = THREE.MathUtils.lerp(pointsRef.current.scale.x, targetScale, 0.1);
        pointsRef.current.scale.set(currentScale, currentScale, currentScale);
    });

    return (
        <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#00F0FF"
                size={0.04} // Slightly larger points
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.6}
            />
        </Points>
    );
};

// Main Scene Component
const TreasureMapScene = ({ scrollYProgress }) => {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true, antialias: true }} dpr={[1, 2]}> {/* Limit pixel ratio for performance */}
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={2} color="#FFD700" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#00F0FF" />

                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                    <group position={[2, 0, 0]}> {/* Offset to the right to balance with text */}
                        <GoldenSphere scrollYProgress={scrollYProgress} />
                        <HolographicMap scrollYProgress={scrollYProgress} />
                    </group>
                </Float>

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default TreasureMapScene;
