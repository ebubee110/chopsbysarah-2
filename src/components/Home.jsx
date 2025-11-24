import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
