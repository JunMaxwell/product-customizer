/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 shirt_baked.glb --transform --types 
Files: shirt_baked.glb [596.47KB] > D:\Work\r3f-demo\product-customizer\public\shirt_baked-transformed.glb [413.76KB] (31%)
*/
import * as THREE from 'three'
import { useGLTF } from "@react-three/drei";
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        T_Shirt_male: THREE.Mesh
    }
    materials: {
        lambert1: THREE.MeshStandardMaterial
    }
}
export function Shirt(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('../public/shirt_baked-transformed.glb') as GLTFResult
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} position={[0.419, 0, 0]} rotation={[Math.PI / 2, 0, 0]}
                castShadow
                material-roughness={1}
                dispose={null}
            />
        </group>
    )
}
useGLTF.preload('/shirt_baked-transformed.glb')