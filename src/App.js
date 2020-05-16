import React from 'react'
import Home from './pages/Home.js'
import MultiColorBackground from './components/MultiColorBackground.js';

function App() {
  return (
    <div>
      <MultiColorBackground />
      <Home />
      <h1>Naveen's React Boilerplate</h1>
      <a href="https://www.youtube.com/watch?v=deyxI-6C2u4" target='blank'>React & Webpack Scratch - No CLI</a>
    </div>
  );
}

export default App;