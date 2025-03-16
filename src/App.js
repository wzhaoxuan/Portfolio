import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Nav />
        {/* <Routes></Routes> */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </div>
    </Router>
    
  );
}

export default App;
