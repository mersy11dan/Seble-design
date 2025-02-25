import React from 'react';
import Navbar from './Navbar'; 
import Home from './Home';
import Catalog from './Catalog';
import OurShope from './OurShope';
import Contact from './Contact';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <section id="home">
          <Home />
        </section>
        <section id="catalog">
          <Catalog />
        </section>
        <section id="ourshop">
          <OurShope />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
