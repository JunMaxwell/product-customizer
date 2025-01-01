import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { ReactThreeFiber } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from 'three'
type SoftShadowMaterialProps = {
    map: THREE.Texture;
    color?: ReactThreeFiber.Color;
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

export const Backdrop: React.FC = () => {
    const shadows = useRef<AccumulativeContext>(null)

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
