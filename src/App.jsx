import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
