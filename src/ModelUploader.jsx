import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

function ModelViewer({ modelUrl }) {
  const gltf = useLoader(GLTFLoader, modelUrl);
  return <primitive object={gltf.scene} />;
}

const ModelUploader = () => {
  const [modelUrl, setModelUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setModelUrl(url);
    }
  };

  return (
    <div style={{marginTop: '20px'}}>
      <input type="file" accept=".glb" onChange={handleFileChange} />
      {modelUrl && (
        <Canvas style={{ height: '600px' }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <ModelViewer modelUrl={modelUrl} />
          <OrbitControls />
        </Canvas>
      )}
    </div>
  );
};

export default ModelUploader;
