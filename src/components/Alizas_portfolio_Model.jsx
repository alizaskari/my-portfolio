import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

function Model() {
  const { scene } = useGLTF('/models/Alizas_portfolio.glb')
  const ref = useRef()

  useFrame((state) => {
    const { mouse } = state
    if (!ref.current) return
    ref.current.rotation.y = mouse.x * 0.4
    ref.current.rotation.x = mouse.y * 0.2
  })

  return <primitive ref={ref} object={scene} scale={2} />
}

export default function AlizasPortfolioModel() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} />
      <Model />
    </Canvas>
  )
}
