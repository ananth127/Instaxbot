import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaChartLine, FaHeadset, FaShieldAlt, FaMobileAlt } from "react-icons/fa";
import { ArrowRight, Users, Zap, Heart, Award, MessageCircle } from 'lucide-react';
import './Style.css';
import { Rocket, Search, Target } from 'lucide-react';
const MainContent = () => {
    const steps = [
        {
          step: "1",
          title: "Connect Your Instagram",
          description: "Link your business Instagram account securely to our platform",
          Icon: Search,
        },
        {
          step: "2",
          title: "Set Up Auto-Replies",
          description: "Create custom response templates for common inquiries",
          Icon: Target,
        },
        {
          step: "3",
          title: "Manage Conversations",
          description: "Track all your customer interactions in one unified inbox",
          Icon: Rocket,
        },
        {
          step: "4",
          title: "Analyze Performance",
          description: "Get insights on response times, customer satisfaction, and more",
          Icon: Search,
        },
      ];
  return (
    <>
      {/* Key Benefits Section */}
      
      <hr></hr>

      <section className="py-12 px-4  from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative  w-full">
             
            
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <item.Icon 
                      size={32}
                      className="text-indigo-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<hr></hr>
      {/* Pricing Plans Section */}
      <section className="py-16 px-6 " data-aos="fade-left">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              name: "Starter", 
              price: "₹999", 
              features: ["Automated Replies", "Basic CRM Inbox", "Instagram Direct Messaging", "5 Response Templates", "Email Support"],
              popular: false
            },
            { 
              name: "Professional", 
              price: "₹1999", 
              features: ["Automated Replies", "Advanced CRM Inbox", "Instagram Direct Messaging", "Order & Inquiry Management", "Workflow Automation", "Real-Time Notifications", "Priority Support"],
              popular: true
            },
            { 
              name: "Enterprise", 
              price: "₹3999", 
              features: ["All Professional Features", "Unlimited Response Templates", "Multiple Account Management", "Advanced Analytics", "Custom Integrations", "Dedicated Account Manager", "24/7 Support"],
              popular: false
            }
          ].map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              {plan.popular && (
                <div className="bg-purple-600 text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-purple-700 mb-4">
                  {plan.price}<span className="text-base font-normal text-gray-600">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
<hr></hr>
      

      {/* Contact Us Section */}
      <section className="py-16 px-6  rounded-lg shadow-sm" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-8">Have questions? We're here to help!</p>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-9">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="text-purple-600">📧</span>
                  <span>support@instaxbot.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-purple-600">📱</span>
                  <span>+91 9876543210</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-purple-600">🏢</span>
                  <span>#9 Vijaya Nagar Srinivasapuram Post
                  Thanjavur, TN 613009</span>
                </p>
              </div>
              <div className="mt-6 space-x-4">
                <button className="text-purple-600 hover:text-purple-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-purple-600 hover:text-purple-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-purple-600 hover:text-purple-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <form className="space-y-4" data-aos="fade-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                ></textarea>
              </div>
              <motion.button 
                className="px-6 py-3  text-gray-800  bg-purple-200 rounded-lg shadow hover:bg-gradient-to-br from-pink-400 via-purple-300 to-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 shadow-xl text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your Instagram sales?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using Instaxbot to automate their Instagram messaging and boost their sales.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="flex items-center gap-2 group">
                Get Started Free
                <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MainContent;