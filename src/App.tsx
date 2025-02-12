import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  return (<>
    <Navbar />
    <div className="relative w-full overflow-y-auto overflow-x-hidden">
      
    
    <div id="second" className="relative w-full h-full ">
      <Home />
    </div>
    
    {/* <div id="third" className="relative w-full h-[100vh]">
      <Portfolio />
    </div> */}
    
    <div id="fourth" className="relative w-full h-full">
      <About />
    </div>

    <div id="fifth" className="relative w-full h-full">
      <Contact />
    </div>
  </div>
  <Footer />
  </>

  );
}

export default App;