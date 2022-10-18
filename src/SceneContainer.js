import { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei'
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from 'three'

import FloatingIsland from './FloatingIsland'
import Rocks from './Rocks'
import FloatingRocks from './FloatingRocks'
import Portal from './Portal'
import Trees from './Trees'
import Words from './Words'
import Grass from './Grass'
import SceneParticles from './SceneParticles'

let lightColor = new Color(1, 0.2, 0.1)
let mesh = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.2, 20),
  new MeshBasicMaterial({
    color: lightColor,
    transparent: true,
    opacity: 1,
  })
)
mesh.rotation.x = Math.PI * 0.5
mesh.position.set(1.17, 10.7, -4.1)
mesh.scale.set(1.5, 1, 1)

const SceneContainer = () => {
  return (
    <Suspense fallback={null}>
      <Environment background={'only'} files={process.env.PUBLIC_URL + '/textures/bg.hdr'} />
      <Environment background={false} files={process.env.PUBLIC_URL + '/textures/envmap.hdr'} />

      <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.35]} />
      <OrbitControls target={[1, 4, 0]} maxPolarAngle={Math.PI * 0.5} />

      <Float speed={0.5} rotationIntensity={0.6} floatIntensity={0.6}>
        <FloatingIsland />
        <Portal />
        <Rocks />
        <Trees />
        <Words />
        <Grass />
        <SceneParticles />
      </Float>

      <FloatingRocks />
    </Suspense>
  )
}

export default SceneContainer
