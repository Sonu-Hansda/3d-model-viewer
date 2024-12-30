import React from 'react';
import './App.css';
import ModelUploader from './ModelUploader';

function App() {
  return (
    <div className="App">
      <h1 style={{margin:'0px'}}>3D Model Viewer</h1>
      <h2 style={{fontWeight:'normal'}}>by Sonu Hansda</h2>
      <ModelUploader />
      <footer>
        Made with <span className="heart">❤️</span> by <a href="https://github.com/Sonu-Hansda" target="_blank" rel="noopener noreferrer">Sonu Hansda</a>
      </footer>
    </div>
  );
}

export default App;
