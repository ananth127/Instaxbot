import React, { useEffect } from "react";
import { ArrowRight, MessageCircle, ShoppingBag, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  useEffect(() => {
    // Background Animation Effect
    gsap.to(".animate-blob", {
      x: "random(-20, 20)",
      y: "random(-20, 20)",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="min-h-screen overflow-hidden relative flex items-center justify-center">
    <div className="container mx-auto px-6 sm:px-6 md:px-11 lg:px-20 py-4 md:py-14">
     {/* Background Elements with Floating Effect */}
       
        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center relative z-10">
  {/* Left Column - Text & CTA */}
  <motion.div
    className="w-full md:w-1/2 mt-12 md:mt-0 z-10 text-center md:text-left"
    initial="hidden"
    animate="visible"
    variants={fadeIn}
  >
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.20, duration: 1 }}
    >
      Boost Your{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 inline-block">
        Instagram
      </span>{" "}
      Sales with a Smart Automation
    </motion.h1>

    <motion.p
      className="text-lg sm:text-xl text-gray-600 mt-6 max-w-lg mx-auto md:mx-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      Instaxbot helps you convert followers into customers with smart automation, personalized responses, and seamless order tracking.
    </motion.p>

    {/* Features Pills */}
    <motion.div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
      <motion.div
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
        whileHover={{ scale: 1.1 }}
      >
        <MessageCircle className="w-4 h-4 text-pink-500" />
        <span className="text-sm font-medium">Auto Responses</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
        whileHover={{ scale: 1.1 }}
      >
        <ShoppingBag className="w-4 h-4 text-purple-500" />
        <span className="text-sm font-medium">Order Tracking</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
        whileHover={{ scale: 1.1 }}
      >
        <Instagram className="w-4 h-4 text-pink-500" />
        <span className="text-sm font-medium">DM Management</span>
      </motion.div>
    </motion.div>

    {/* CTA Buttons */}
    <motion.div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
      <Link
        to="/signup"
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-2"
      >
        Start for Free
        <ArrowRight className="w-4 h-4" />
      </Link>
      <motion.button
        className="px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
      >
        Watch Demo
      </motion.button>
    </motion.div>
  </motion.div>

  {/* Right Column - SVG (will be below on mobile) */}
  <motion.div
    className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-10"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1200px"
      viewBox="20 20 800 500"
      className="w-full max-w-lg"
    > {/* Background gradient */}
              <defs>
                <linearGradient width="700px" height={500} >
                  <stop offset="0%" style={{stopColor: "#f8f9fa", stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: "#e9ecef", stopOpacity: 1}} />
                </linearGradient>
                
                {/* Purple gradient for accents */}
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: "#8a2be2", stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: "#4b0082", stopOpacity: 1}} />
                </linearGradient>
                
                {/* Shadow filter */}
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.15"/>
                </filter>
              </defs>
              
              {/* Background */}
              <rect width="800" height="500" fill="url(#bgGradient)" rx="10" ry="10" />
              
              {/* Phone with Instagram */}
              <g transform="translate(150, 100)" filter="url(#shadow)">
                <rect x="0" y="0" width="160" height="300" rx="15" ry="15" fill="#fff" />
                <rect x="0" y="0" width="160" height="300" rx="15" ry="15" fill="none" stroke="#e1e1e1" strokeWidth="2" />
                
                {/* Instagram UI elements */}
                <rect x="10" y="30" width="140" height="240" fill="#fafafa" rx="5" ry="5" />
                
                {/* Instagram header */}
                <rect x="10" y="30" width="140" height="30" fill="#f8f8f8" rx="5" ry="5" />
                <circle cx="35" cy="45" r="8" fill="#e1306c" />
                <text x="50" y="49" fontFamily="Arial" fontSize="10" fill="#262626">Instagram</text>
                
                {/* DM conversation bubbles */}
                <rect x="15" y="70" width="90" height="25" rx="10" ry="10" fill="#efefef" />
                <rect x="65" y="105" width="80" height="25" rx="10" ry="10" fill="url(#purpleGradient)" />
                <rect x="15" y="140" width="90" height="25" rx="10" ry="10" fill="#efefef" />
                <rect x="65" y="175" width="80" height="25" rx="10" ry="10" fill="url(#purpleGradient)" />
              </g>
              
              {/* Automation arrows and gears */}
              <g transform="translate(400, 250)">
                {/* Connecting arrow */}
                <path d="M-60,0 L60,0" stroke="url(#purpleGradient)" strokeWidth="4" strokeDasharray="10,5" />
                <polygon points="62,0 52,-5 52,5" fill="url(#purpleGradient)" />
                
                {/* Gear animation */}
                <g transform="translate(0, 0)">
                  <circle cx="0" cy="0" r="30" fill="#f8f8f8" filter="url(#shadow)" />
                  <path d="M0,-25 L5,-12 L17,-17 L12,-5 L25,0 L12,5 L17,17 L5,12 L0,25 L-5,12 L-17,17 L-12,5 L-25,0 L-12,-5 L-17,-17 L-5,-12 Z" 
                    fill="url(#purpleGradient)">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
                  </path>
                  <circle cx="0" cy="0" r="10" fill="#f8f8f8" />
                </g>
              </g>
              
              {/* Dashboard/Analytics screen */}
              <g transform="translate(550, 100)" filter="url(#shadow)">
                <rect x="0" y="0" width="200" height="300" rx="5" ry="5" fill="#fff" />
                
                {/* Dashboard header */}
                <rect x="0" y="0" width="200" height="40" rx="5" ry="5" fill="url(#purpleGradient)" />
                <text x="10" y="25" fontFamily="Arial" fontSize="14" fill="#fff" fontWeight="bold">Instaxbot Dashboard</text>
                
                {/* Analytics charts */}
                <rect x="10" y="50" width="180" height="60" rx="3" ry="3" fill="#f8f8f8" />
                <path d="M15,100 L35,80 L55,90 L75,70 L95,85 L115,65 L135,75 L155,60 L175,70 L185,65" 
                      stroke="url(#purpleGradient)" strokeWidth="2" fill="none" />
                
                {/* Order list */}
                <rect x="10" y="120" width="180" height="25" rx="3" ry="3" fill="#f8f8f8" />
                <rect x="15" y="128" width="10" height="10" rx="2" ry="2" fill="url(#purpleGradient)" />
                
                <rect x="10" y="155" width="180" height="25" rx="3" ry="3" fill="#f8f8f8" />
                <rect x="15" y="163" width="10" height="10" rx="2" ry="2" fill="url(#purpleGradient)" />
                
                <rect x="10" y="190" width="180" height="25" rx="3" ry="3" fill="#f8f8f8" />
                <rect x="15" y="198" width="10" height="10" rx="2" ry="2" fill="url(#purpleGradient)" />
                
                <rect x="10" y="225" width="180" height="25" rx="3" ry="3" fill="#f8f8f8" />
                <rect x="15" y="233" width="10" height="10" rx="2" ry="2" fill="url(#purpleGradient)" />
                
                <rect x="10" y="260" width="180" height="25" rx="3" ry="3" fill="#f8f8f8" />
                <rect x="15" y="268" width="10" height="10" rx="2" ry="2" fill="url(#purpleGradient)" />
              </g>
              
              {/* Notification elements */}
              <g transform="translate(480, 160)">
                <circle cx="0" cy="0" r="15" fill="#fff" filter="url(#shadow)" />
                <text x="0" y="5" fontFamily="Arial" fontSize="16" fill="url(#purpleGradient)" textAnchor="middle" fontWeight="bold">✓</text>
              </g>
              
              <g transform="translate(420, 170)">
                <circle cx="0" cy="0" r="12" fill="#fff" filter="url(#shadow)" />
                <text x="0" y="4" fontFamily="Arial" fontSize="12" fill="url(#purpleGradient)" textAnchor="middle" fontWeight="bold">$</text>
              </g>
              
              <g transform="translate(370, 150)">
                <circle cx="0" cy="0" r="18" fill="#fff" filter="url(#shadow)" />
                <text x="0" y="6" fontFamily="Arial" fontSize="18" fill="url(#purpleGradient)" textAnchor="middle" fontWeight="bold">!</text>
              </g>
              
              {/* Bottom text */}
              <text x="400" y="430" fontFamily="Arial" fontSize="22" fill="#333" textAnchor="middle" fontWeight="bold">Automate Your Instagram Business</text>
              <text x="400" y="460" fontFamily="Arial" fontSize="16" fill="#666" textAnchor="middle">From DMs to Dashboard in seconds</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;