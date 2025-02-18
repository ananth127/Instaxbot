import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import HeroSection from "./HeroSection";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FeaturesCarousel from './FeaturesCarousel';
import Page3 from './Page3';
import Navbar from './NavBar';

const Home = () => {
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-90 ">
      {/* Navigation */}
      
<Navbar />
      {/* Content Sections with Proper Padding for Fixed Header */}
      <div className="pt-16 md:pt-20">
        <HeroSection />
        <FeaturesCarousel />
        <Page3 />
      </div>
    </div>
  );
};

export default Home;