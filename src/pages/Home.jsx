import React from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Services from '../components/Services.jsx';
import IndianDestination from '../components/IndianDestination.jsx';
import InternationalDestination from '../components/InternationalDestination.jsx';
import IndiaTour from '../components/IndiaTour.jsx';
import Gallery from '../components/Gallery.jsx';
import Hotels from '../components/Hotels.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
    <header >
        <Navbar />
      </header>
    <main className="pt-16">
  <HeroSection />
  <Services />
  <IndianDestination />
  <InternationalDestination />
  <IndiaTour />
  <Gallery />
  <Hotels />
</main>
<footer>
  <Footer />
</footer>
    </>
  );
};

export default Home;
