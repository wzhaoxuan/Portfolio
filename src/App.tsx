import React, { useRef } from 'react';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Nav from './components/Navigation/Nav';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <Home onContactClick={() => scrollToSection()}/>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default App;
