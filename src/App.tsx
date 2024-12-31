import { Center, Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Vector3 } from "three"

function Shirt() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshNormalMaterial />
    </mesh>
  )
}

function App({ position = new Vector3(-1, 0, 2.5), fov = 25 }) {
  return (
    <Canvas
      shadows
      camera={{ position, fov }}
      eventSource={document.getElementById('root')!}
      eventPrefix="client">
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <Center>
        <Shirt />
      </Center>
      <OrbitControls />

    </Canvas>
  )
}

export default App
