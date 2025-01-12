import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { ReactThreeFiber, useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react'
import * as THREE from 'three'
import { state } from '../store';
type SoftShadowMaterialProps = {
    map: THREE.Texture;
    color?: THREE.Color;
    alphaTest?: number;
    blend?: number;
};
interface AccumulativeContext {
    lights: Map<unknown, unknown>;
    temporal: boolean;
    frames: number;
    blend: number;
    count: number;
    getMesh: () => THREE.Mesh<THREE.PlaneGeometry, SoftShadowMaterialProps & THREE.ShaderMaterial>;
    reset: () => void;
    update: (frames?: number) => void;
}

export const Backdrop = () => {
    const shadows = useRef<AccumulativeContext>(null)

    useFrame((_, delta) =>
        easing.dampC(
            shadows.current?.getMesh()?.material?.color ?? new THREE.Color('#ffffff'),
            new THREE.Color(state.selectedColor),
            0.25,
            delta
        ));

    return (
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={0.85}
            scale={10}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.14]}>
            <RandomizedLight
                amount={4}
                radius={9}
                intensity={0.55}
                ambient={0.25}
                position={[5, 5, -10]}
            />
            <RandomizedLight
                amount={4}
                radius={5}
                intensity={0.25}
                ambient={0.55}
                position={[-5, 5, -9]}
            />
        </AccumulativeShadows>
    )
}