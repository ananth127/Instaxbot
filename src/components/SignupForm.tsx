import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Lock, 
  User, 
  Smartphone, 
  Building, 
  Instagram, 
  Globe, 
  ShoppingCart,
  HelpCircle
} from 'lucide-react';
import { motion } from "framer-motion";
import Navbar from './NavBar';

import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal information
    fullName: '',
    email: '',
    password: '',
    phone: '',
    
    // Business details
    businessName: '',
    instagramHandle: '',
    website: '',
    
    // Business specifics
    businessType: '',
    monthlyOrders: '',
    productCategory: '',
    currentChallenges: ''
  });

  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const nextStep = () => {
    setFormStep(formStep + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      // You would typically redirect here after successful submission
      setIsSubmitting(false);
    }, 1500);
  };

  // Business type options
  const businessTypes = [
    'Retail/E-commerce',
    'Services',
    'Content Creator/Influencer',
    'Non-profit',
    'Other'
  ];
  
  // Product category options
  const productCategories = [
    'Fashion & Apparel',
    'Beauty & Cosmetics',
    'Home & Decor',
    'Food & Beverage',
    'Digital Products',
    'Services',
    'Other'
  ];
  
  // Monthly orders options
  const orderVolumes = [
    '0-10 orders/month',
    '11-50 orders/month',
    '51-200 orders/month',
    '201-500 orders/month',
    '500+ orders/month'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 py-20 md:py-24">
        

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Instaxbot</span> Today
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's get to know you and your business to help you automate your Instagram sales process.
            </p>
          </motion.div>
          
          {/* Progress Indicator */}
          <div className="mb-8 max-w-lg mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${formStep >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
                <p className="text-sm text-gray-600">Account</p>
              </div>
              <div className={`flex-1 h-1 mx-2 ${formStep >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
              <div className="text-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${formStep >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
                <p className="text-sm text-gray-600">Business</p>
              </div>
              <div className={`flex-1 h-1 mx-2 ${formStep >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
              <div className="text-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${formStep >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
                <p className="text-sm text-gray-600">Details</p>
              </div>
            </div>
          </div>
          
          {/* Signup Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Personal Information */}
              {formStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Create Your Account</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number (optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Smartphone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
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
                  </div>
                  
                  {/* Terms Agreement */}
                  <div className="flex items-start">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 mt-1 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                      I agree to the <a href="#" className="text-purple-600 hover:text-purple-500 font-medium">Terms of Service</a> and <a href="#" className="text-purple-600 hover:text-purple-500 font-medium">Privacy Policy</a>
                    </label>
                  </div>
                  
                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  >
                    <span className="flex items-center justify-center gap-2 group">
                      Continue
                      <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              )}
              
              {/* Step 2: Business Information */}
              {formStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tell Us About Your Business</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Business Name */}
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                        Business Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                          placeholder="Your Business Name"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Instagram Handle */}
                    <div className="space-y-2">
                      <label htmlFor="instagramHandle" className="block text-sm font-medium text-gray-700">
                        Instagram Handle
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Instagram className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="instagramHandle"
                          name="instagramHandle"
                          value={formData.instagramHandle}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                          placeholder="@yourbusiness"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Website */}
                    <div className="space-y-2">
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                        Website (optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Globe className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                          placeholder="https://your-website.com"
                        />
                      </div>
                    </div>
                    
                    {/* Business Type */}
                    <div className="space-y-2">
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="block w-full pl-3 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        required
                      >
                        <option value="" disabled>Select business type</option>
                        {businessTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Navigation Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-3 text-gray-700 border-2 border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                      <span className="flex items-center justify-center gap-2 group">
                        Continue
                        <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Business Details */}
              {formStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Details</h2>
                  
                  <div className="space-y-6">
                    {/* Product Category */}
                    <div className="space-y-2">
                      <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">
                        What products/services do you sell?
                      </label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="block w-full pl-3 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        required
                      >
                        <option value="" disabled>Select category</option>
                        {productCategories.map((category, index) => (
                          <option key={index} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Monthly Orders */}
                    <div className="space-y-2">
                      <label htmlFor="monthlyOrders" className="block text-sm font-medium text-gray-700">
                        How many orders do you process monthly via Instagram?
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <ShoppingCart className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          id="monthlyOrders"
                          name="monthlyOrders"
                          value={formData.monthlyOrders}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                          required
                        >
                          <option value="" disabled>Select volume</option>
                          {orderVolumes.map((volume, index) => (
                            <option key={index} value={volume}>{volume}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {/* Current Challenges */}
                    <div className="space-y-2">
                      <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700">
                        What are your biggest challenges with Instagram sales?
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                          <HelpCircle className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="currentChallenges"
                          name="currentChallenges"
                          value={formData.currentChallenges}
                          onChange={handleChange}
                          rows={4}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                          placeholder="Tell us about your challenges..."
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-3 text-gray-700 border-2 border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Creating Account...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2 group">
                          Create Account
                          <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
            
            {/* Sign In Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a onClick={() => navigate('/login')} className="text-purple-600 hover:text-purple-500 font-medium">
                  Sign in here
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;