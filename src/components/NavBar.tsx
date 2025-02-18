import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
    return (
        <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200  shadow-xl rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Zap size={24} className="text-purple-600" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                Instaxbot
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Home
              </Link>
              <Link to="/aboutus" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                About Us
              </Link>

              <a href="#pricing" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Pricing Plans
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Contact Us
              </a>
              <button 
                onClick={() => navigate('/login')} 
                className="px-4 py-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/signup')} 
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bg-white border-b border-gray-200 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
            <Link
                to="/"
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-4 py-2 hover:bg-purple-50 rounded-lg"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-4 py-2 hover:bg-purple-50 rounded-lg"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-4 py-2 hover:bg-purple-50 rounded-lg"
                onClick={closeMenu}
              >
                Pricing Plans
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-4 py-2 hover:bg-purple-50 rounded-lg"
                onClick={closeMenu}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-4 py-2 hover:bg-purple-50 rounded-lg"
                onClick={closeMenu}
              >
                Contact Us
              </a>
              <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
                <button 
                  onClick={() => {
                    navigate('/login');
                    closeMenu();
                  }} 
                  className="w-full px-4 py-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors bg-purple-50 rounded-lg"
                >
                  Login
                </button>
                <button 
                  onClick={() => {
                    navigate('/signup');
                    closeMenu();
                  }} 
                  className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    );  
};

export default Navbar;