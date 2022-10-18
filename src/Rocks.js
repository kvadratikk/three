import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Rocks = () => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/models/rocks.glb')

  return <primitive object={gltf.scene} />
}

export default Rocks
