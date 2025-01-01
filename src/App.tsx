import { Center, Environment, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Vector3 } from "three"
import { CameraRig } from "./components/CameraRig"
import { Backdrop } from "./components/Backdrop"
import { Shirt } from "./components/Shirt"
import { useControls } from "leva"
import { Perf } from "r3f-perf"

useGLTF.preload('/shirt_baked-transformed.glb')
function App({ position = new Vector3(0, 0, 2.5), fov = 25 }) {
  const { performance } = useControls('Monitoring', {
    performance: false,
  })

  return (
    <div className="canvas-container">
      <Canvas
        shadows
        camera={{ position, fov }}
        eventSource={document.getElementById('root')!}
        eventPrefix="client"
      >
        {performance && <Perf position='top-left' />}
        <ambientLight intensity={0.5} />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  )
}

export default App
