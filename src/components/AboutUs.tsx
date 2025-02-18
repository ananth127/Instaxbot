import React from 'react';
import { ArrowRight, Users, Zap, Heart, Award, MessageCircle } from 'lucide-react';
import { motion } from "framer-motion";
import Navbar from './NavBar';
function AboutUsPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Team data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/300/300",
      bio: "Former Instagram marketing expert with 10+ years of experience in social media automation."
    },
    {
      name: "David Chen",
      role: "CTO",
      image: "/api/placeholder/300/300",
      bio: "AI specialist with a background in building scalable social media tools and platforms."
    },
    {
      name: "Maya Patel",
      role: "Head of Customer Success",
      image: "/api/placeholder/300/300",
      bio: "Passionate about helping businesses grow their social media presence and engagement."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen">
      {/* Hero Section */}
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Instaxbot</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We're on a mission to help businesses maximize their Instagram sales through intelligent automation and seamless customer interactions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="px-6 py-3 text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 w-full h-full rounded-3xl blur-xl bg-pink-500 opacity-20 animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Our team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Instaxbot was founded in 2022 by a team of social media experts and AI engineers who saw a gap in the market for truly effective Instagram automation tools.
                </p>
                <p>
                  After years of managing Instagram accounts for various businesses, we noticed that most brands were struggling with the same issues: managing customer inquiries, processing orders through DMs, and maintaining consistent engagement.
                </p>
                <p>
                  We built Instaxbot to solve these challenges, combining cutting-edge AI with deep Instagram marketing expertise to create a platform that genuinely helps businesses grow their sales through social media.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Instaxbot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                We build every feature with our customers' needs in mind, ensuring that our platform truly helps businesses succeed.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Innovation</h3>
              <p className="text-gray-600">
                We're constantly improving our AI and adding new features to stay ahead of changes in social media algorithms and user behavior.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Engagement</h3>
              <p className="text-gray-600">
                We believe in real connections. Our tools help brands engage authentically with their followers, not just broadcast to them.
              </p>
            </motion.div>
            
            {/* Value 4 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence in All We Do</h3>
              <p className="text-gray-600">
                From customer support to product development, we strive for excellence in every aspect of our business.
              </p>
            </motion.div>
            
            {/* Value 5 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Open Communication</h3>
              <p className="text-gray-600">
                We believe in transparency with our customers and within our team, fostering an environment of trust and collaboration.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Meet Our Team Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Instaxbot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to join our growing team? Check out our open positions!
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-semibold hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 group"
            >
              View Careers
              <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>

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
    </div>
  );
}

export default AboutUsPage;