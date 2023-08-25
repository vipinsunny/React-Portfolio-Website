import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT."
        text="Im a friendly MEARN STACK Developer and has knowledge in REACT JS, ANGULAR, NODEJS and MONGODB." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
