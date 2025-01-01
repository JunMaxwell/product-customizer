import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { easing } from 'maath';
import * as THREE from 'three'
interface CameraRigProps {
  children: React.ReactNode
}

export const CameraRig: React.FC<CameraRigProps> = ({ children }) => {
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (group.current) {
      easing.damp3(state.camera.position, [0, 0, 2], 0.25, delta)
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
      )
    }
  })

  return <group ref={group}>{children}</group>
}
