import React from 'react';
import Navbar from './components/NavbarComponent';
import Carousel from './components/Carousel';
import About from './components/About';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Counter from './components/Counter';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './components/index.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Programs />
      <Testimonials />
      <Counter />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
