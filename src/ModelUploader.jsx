import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelViewer from './ModelViewer';

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
    <div style={{ marginTop: '20px'}}>
    <input type="file" accept=".glb" onChange={handleFileChange} />
    {modelUrl ? (
        <Canvas style={{ height: '325px' }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, 5, 5]} intensity={1} />
          <directionalLight position={[5, -5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, 5]} intensity={1} />
          <directionalLight position={[5, 5, -5]} intensity={1} />
          <directionalLight position={[-5, 5, -5]} intensity={1} />
          <directionalLight position={[5, -5, -5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={1} />
          <ModelViewer modelUrl={modelUrl} />
          <OrbitControls minDistance={0.58} maxDistance={1} target={[0, 0, 0]} />
        </Canvas>
      ) : (
        <div style={{ height: '325px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#bbb', border: '2px dashed #bbb', borderRadius: '10px' }}>
          <p>Select a .glb file to view the model</p>
        </div>
      )}
  </div>
  );
};

export default ModelUploader;
