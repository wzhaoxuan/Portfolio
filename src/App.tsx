import React, { useRef } from 'react';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';

function App() {
  return (
    <>
      <Home />
      <div><Project/></div>
      <div><Contact /></div>
    </>
  );
}

export default App;
