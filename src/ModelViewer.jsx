import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

export default function ModelViewer({ modelUrl }) {
    const gltf = useLoader(GLTFLoader, modelUrl);
    return <primitive object={gltf.scene} position={[0, -0.3, 0]} />;
  }