import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [error, setError] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !isValidEmail(email)) {
      setAlert({ message: "Please enter a valid email!", type: "error" });
      setError(true);
    } else {
      setAlert({ message: "Subscription successful!", type: "success" });
      setError(false);
      setEmail(""); // Clear input after success
    }
    setTimeout(() => setAlert(null), 3000); // Hide alert after 3s
  };

  return (
    
    <footer className="text-gray-300 pt-16 pb-8 px-6 bg-gradient-to-r from-pink-100 to-pink-100">
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-purple-500 text-lg font-semibold mb-4">Instaxbot</h3>
            <p className="mb-4 text-gray-800">Revolutionizing Instagram messaging for businesses worldwide.</p>
            <div className="flex space-x-4">
              {[
                { icon: <FaInstagram size={20} />, color: "hover:text-pink-500" },
                { icon: <FaTwitter size={20} />, color: "hover:text-blue-400" },
                { icon: <FaFacebookF size={20} />, color: "hover:text-blue-600" },
                { icon: <FaYoutube size={20} />, color: "hover:text-red-600" },
                { icon: <FaLinkedinIn size={20} />, color: "hover:text-blue-500" },
              ].map((item, index) => (
                <motion.a key={index} href="#" className={`text-gray-900 ${item.color} transition`} whileHover={{ scale: 1.2 }}>
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-purple-500 text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Features", "Pricing", "Testimonials", "FAQ", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-900 hover:text-purple-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-purple-500 text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR Compliance", "Data Security"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-900 hover:text-purple-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-purple-500 text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-800 mb-4">Subscribe to our newsletter for tips, news, and product updates.</p>

            {/* Alert Box */}
            {alert && (
              <motion.div
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                className={`fixed top-0 left-0 right-0 p-3 text-center text-white ${
                  alert.type === "error" ? "bg-red-600" : "bg-green-600"
                }`}
              >
                {alert.message}
              </motion.div>
            )}

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="space-y-2 mt-4">
              <input
                type="text"
                placeholder="Your email address"
                className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 ${
                  error ? "border-red-600 focus:ring-red-500" : "border-gray-700 text-purple-500 focus:ring-purple-500"
                }`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false); // Reset error when typing
                }}
              />
              <motion.button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r text-white rounded hover:bg-gradient-to-br from-pink-400 via-purple-700 to-pink-400 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-900 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Instaxbot. All rights reserved.</div>
          <div className="flex space-x-6">
            {["Terms", "Privacy", "Cookies"].map((item, index) => (
              <a key={index} href="#" className="hover:text-purple-400 transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
