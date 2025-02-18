import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import MainContent from "./MainContent";
import Footer from "./Footer";

import { MessageSquare, Send, Bot } from 'lucide-react';
import { FaRocket, FaUsers, FaChartLine, FaHeadset, FaShieldAlt, FaMobileAlt } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Page3 = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  const demos = [
    {
      title: "Customer Support",
      conversation: [
        { user: true, text: "Hi, I need help with my order #12345" },
        { user: false, text: "Hello! I'd be happy to help you with your order. Could you please confirm what specific information you need?" },
        { user: true, text: "I want to know the delivery status" },
        { user: false, text: "Your order #12345 is currently in transit and will be delivered by tomorrow afternoon." }
      ]
    },
    {
      title: "Product Inquiry",
      conversation: [
        { user: true, text: "Do you have this shirt in blue?" },
        { user: false, text: "Let me check our inventory for you." },
        { user: false, text: "Yes, we have the shirt in blue in sizes S, M, and L. Would you like me to show you the available options?" },
        { user: true, text: "Yes please, show me size M" }
      ]
    },
    {
      title: "Booking Assistant",
      conversation: [
        { user: true, text: "I'd like to book a table for tonight" },
        { user: false, text: "I can help you with that. How many people will be dining?" },
        { user: true, text: "4 people" },
        { user: false, text: "Great! We have availability at 7:00 PM or 8:30 PM. Which time would you prefer?" }
      ]
    },
    {
      title: "Technical Support",
      conversation: [
        { user: true, text: "My app keeps crashing" },
        { user: false, text: "I'm sorry to hear that. Let's troubleshoot this together. When did you first notice the issue?" },
        { user: true, text: "Since this morning's update" },
        { user: false, text: "I understand. First, let's try clearing your app cache. Would you like me to guide you through the steps?" }
      ]
    }
  ];

  useEffect(() => {
    setMessages([]);
    let timeoutId;

    const playDemo = async (index = 0) => {
      if (index >= demos[currentDemo].conversation.length) {
        timeoutId = setTimeout(() => {
          setCurrentDemo((prev) => (prev + 1) % demos.length);
          setMessages([]);
        }, 3000);
        return;
      }

      const message = demos[currentDemo].conversation[index];

      if (!message.user) {
        setTyping(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTyping(false);
      }

      setMessages(prev => [...prev, message]);
      timeoutId = setTimeout(() => playDemo(index + 1), 1000);
    };

    playDemo();

    return () => clearTimeout(timeoutId);
  }, [currentDemo]);

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div>
      {/* Hero Section (New) */}
      <section className="py-6 px-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text" data-aos="zoom-in">
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 py-6 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaRocket className="text-4xl" />, title: "Faster Response Times", description: "Reduce wait times by up to 80% with instant automated replies" },
            { icon: <FaUsers className="text-4xl" />, title: "Improved Customer Satisfaction", description: "Keep your customers happy with prompt and personalized service" },
            { icon: <FaChartLine className="text-4xl" />, title: "Increased Conversion Rates", description: "Convert more inquiries into sales with efficient follow-ups" },
            { icon: <FaHeadset className="text-4xl" />, title: "Reduced Support Workload", description: "Free up your team's time by automating routine inquiries" },
            { icon: <FaShieldAlt className="text-4xl" />, title: "Secure Messaging", description: "Keep all your customer conversations safe and compliant" },
            { icon: <FaMobileAlt className="text-4xl" />, title: "Mobile-Friendly Interface", description: "Manage your Instagram messages from anywhere, anytime" }
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 50}
            >
              <div className="text-purple-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Chat Demo - Left Side */}
            <div className="w-full lg:w-5/12 order-2 lg:order-1">
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white flex items-center gap-2">
                    <Bot className="w-6 h-6" />
                    <h2 className="font-semibold">{demos[currentDemo].title}</h2>
                  </div>

                  <div className="h-[400px] md:h-[500px] overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.user ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${message.user ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                          {message.text}
                        </div>
                      </div>
                    ))}
                    {typing && (
                      <div className="flex justify-start">
                        <div className="bg-gray-200 text-gray-800 p-3 rounded-lg rounded-bl-none">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-purple-500"
                        disabled
                      />
                      <button className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Content - Right Side */}
            <motion.section
              className="w-full lg:w-7/12 order-1 lg:order-2 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Revolutionize Your Instagram Messaging
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-gray-700">
                Automate responses, organize conversations, and boost your customer engagement with Instaxbot.
              </p>
              <motion.button
                className="px-8 py-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl border-2 border-purple-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
              </motion.button>
            </motion.section>
          </div>
        </div>
      </div>

      <hr />

      {/* Main Content Component */}
      <MainContent />

      {/* Footer Component */}
      <hr />
      <Footer />
    </div>
  );
};

export default Page3;
