import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import Navbar from './NavBar';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Login submitted:', formData);
      // Redirect after successful login or show error
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
        <Navbar />
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome Back to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Instaxbot</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please enter your credentials to access your account.
            </p>
          </motion.div>

          {/* Login Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Log In</h2>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {/* Security Assurance Message */}
              <div className="text-sm text-gray-600">
                <span className="text-gray-500">Your data is secure. We use encryption to protect your information.</span>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2 group">
                    Log In
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </button>
            </form>

            {/* Forgot Password Link */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                <a href="#" className="text-purple-600 hover:text-purple-500 font-medium">
                  Forgot Password?
                </a>
              </p>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a onClick={() => navigate("/signup")} className="text-purple-600 hover:text-purple-500 font-medium">
                  Sign up here
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
