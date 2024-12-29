import React from 'react';
import './App.css';
import ModelUploader from './ModelUploader';

function App() {
  return (
    <div className="App">
      <h1 style={{margin:'0px'}}>3D Model Viewer</h1>
      <h2 style={{fontWeight:'normal'}}>by Sonu Hansda</h2>
      <ModelUploader />
    </div>
  );
}

export default App;
