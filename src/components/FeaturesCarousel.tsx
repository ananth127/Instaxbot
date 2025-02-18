import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";
import { FaRobot, FaInbox, FaBolt, FaSync, FaEnvelope } from "react-icons/fa";

// SVG Components for each feature
const QuickResponseSVG = () => (
  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes typing {
          0% { width: 0; }
          100% { width: 80px; }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .message { animation: slideIn 1s ease-out forwards; }
        .typing-dots { animation: blink 1s infinite; }
        .bot-response { animation: slideIn 1s ease-out 1.5s forwards; }
      `}
    </style>
    <rect width="300" height="200" fill="#f5f5f5"/>
    <rect x="40" y="20" width="220" height="160" rx="10" fill="white" stroke="#e0e0e0"/>
    <g className="message">
      <rect x="120" y="40" width="120" height="40" rx="20" fill="#e3f2fd"/>
      <text x="140" y="65" fontFamily="Arial" fontSize="14" fill="#333">Hello!</text>
    </g>
    <g className="typing-dots">
      <circle cx="70" cy="100" r="4" fill="#999"/>
      <circle cx="85" cy="100" r="4" fill="#999"/>
      <circle cx="100" cy="100" r="4" fill="#999"/>
    </g>
    <g className="bot-response" opacity="0">
      <rect x="60" y="120" width="140" height="40" rx="20" fill="#f0f0f0"/>
      <text x="80" y="145" fontFamily="Arial" fontSize="14" fill="#333">Hi! How can I help?</text>
    </g>
  </svg>
);

const MultilingualSupportSVG = () => (
  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .globe { animation: rotate 10s linear infinite; }
        .message { animation: fadeIn 1s ease-out forwards; }
      `}
    </style>
    <rect width="300" height="200" fill="#f5f5f5"/>
    <rect x="40" y="20" width="220" height="160" rx="10" fill="white" stroke="#e0e0e0"/>
    <g className="globe" transform-origin="150 100">
      <circle cx="150" cy="100" r="30" fill="#81d4fa"/>
      <path d="M120 100 Q150 70 180 100 Q150 130 120 100" fill="none" stroke="#29b6f6" strokeWidth="2"/>
      <path d="M150 70 Q180 100 150 130 Q120 100 150 70" fill="none" stroke="#29b6f6" strokeWidth="2"/>
    </g>
    <g className="message">
      <rect x="60" y="40" width="100" height="30" rx="15" fill="#f0f0f0"/>
      <text x="75" y="60" fontFamily="Arial" fontSize="12" fill="#333">Hello!</text>
    </g>
    <g className="message">
      <rect x="140" y="80" width="100" height="30" rx="15" fill="#f0f0f0"/>
      <text x="155" y="100" fontFamily="Arial" fontSize="12" fill="#333">¡Hola!</text>
    </g>
    <g className="message">
      <rect x="60" y="120" width="100" height="30" rx="15" fill="#f0f0f0"/>
      <text x="75" y="140" fontFamily="Arial" fontSize="12" fill="#333">Bonjour!</text>
    </g>
  </svg>
);

const SmartSuggestionsSVG = () => (
  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes fadeSlideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .lightbulb { animation: pulse 2s infinite; }
        .suggestion { animation: fadeSlideUp 0.5s ease-out forwards; }
      `}
    </style>
    <rect width="300" height="200" fill="#f5f5f5"/>
    <rect x="40" y="20" width="220" height="160" rx="10" fill="white" stroke="#e0e0e0"/>
    <g className="lightbulb" transform-origin="150 70">
      <path d="M150 40 L150 50 M135 45 L140 55 M165 45 L160 55" stroke="#ffd700" strokeWidth="2"/>
      <circle cx="150" cy="70" r="20" fill="#ffd700"/>
      <path d="M140 85 L160 85 L155 95 L145 95 Z" fill="#ffd700"/>
    </g>
    <g className="suggestion" style={{ animationDelay: "0.2s" }}>
      <rect x="60" y="100" width="180" height="25" rx="12.5" fill="#e3f2fd"/>
      <text x="75" y="117" fontFamily="Arial" fontSize="12" fill="#333">Check order status</text>
    </g>
    <g className="suggestion" style={{ animationDelay: "0.4s" }}>
      <rect x="60" y="135" width="180" height="25" rx="12.5" fill="#e3f2fd"/>
      <text x="75" y="152" fontFamily="Arial" fontSize="12" fill="#333">Track my shipment</text>
    </g>
  </svg>
);

const Support247SVG = () => (
  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        @keyframes clockRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInOut {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        .clock-hand { 
          transform-origin: 150 100;
          animation: clockRotate 10s linear infinite; 
        }
        .message { animation: fadeInOut 3s infinite; }
      `}
    </style>
    <rect width="300" height="200" fill="#f5f5f5"/>
    <rect x="40" y="20" width="220" height="160" rx="10" fill="white" stroke="#e0e0e0"/>
    <circle cx="150" cy="100" r="40" fill="none" stroke="#333" strokeWidth="2"/>
    <circle cx="150" cy="100" r="3" fill="#333"/>
    <line className="clock-hand" x1="150" y1="100" x2="150" y2="70" stroke="#333" strokeWidth="2"/>
    <line className="clock-hand" x1="150" y1="100" x2="175" y2="100" stroke="#333" strokeWidth="2"/>
    <text x="130" y="40" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#333">24/7</text>
    <g className="message">
      <rect x="60" y="150" width="180" height="20" rx="10" fill="#e3f2fd"/>
      <text x="90" y="165" fontFamily="Arial" fontSize="12" fill="#333">Always here to help!</text>
    </g>
  </svg>
);

// Feature Data
const features = [
  {
    id: 1,
    svg: <QuickResponseSVG />,
    title: "Automated Message Replies",
    description: "Instantly respond to customer inquiries with AI-powered auto-replies.",
    icon: <FaRobot className="text-4xl text-purple-600" />,
  },
  {
    id: 2,
    svg: <MultilingualSupportSVG />,
    title: "Seamless Message Management",
    description: "Organize, track, and manage all conversations from a single dashboard.",
    icon: <FaInbox className="text-4xl text-purple-600" />,
  },
  {
    id: 3,
    svg: <SmartSuggestionsSVG />,
    title: "Smart Workflow Automation",
    description: "Automate repetitive tasks to improve response time and efficiency.",
    icon: <FaSync className="text-4xl text-purple-600" />,
  },
  {
    id: 4,
    svg: <Support247SVG />,
    title: "Real-Time Message Retrieval",
    description: "Fetch and display messages instantly within the app for quick responses.",
    icon: <FaBolt className="text-4xl text-purple-600" />,
  },
  {
    id: 5,
    svg: <Support247SVG />,
    title: "Centralized CRM Inbox",
    description: "Handle Instagram messages efficiently within an integrated system.",
    icon: <FaEnvelope className="text-4xl text-purple-600" />,
  },
];

const FeaturesCarousel = () => {
  return (
    <div>
      <hr />
      <section className="px-4 md:px-0 py-16 bg-pink-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Features
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Discover how our platform can transform your messaging experience with these powerful features
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full pb-16"
          >
            {features.map((feature) => (
              <SwiperSlide
                key={feature.id}
                className="pr-4 w-80 sm:w-96 h-auto"
              >
                <motion.div
                  className="bg-white text-gray-900 h-full rounded-2xl p-6 overflow-hidden shadow-lg flex flex-col items-center text-center mx-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6">
                    {feature.svg}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                  <div className="mt-6">
                    <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default FeaturesCarousel;