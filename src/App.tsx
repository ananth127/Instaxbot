import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SignupForm from "./components/SignupForm";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage";

function App() {
  return (

    <Router >
      {/* <nav className="flex justify-center space-x-4 p-4 bg-gray-800 text-white">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/aboutus">AboutUs</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
    </Router>
  );
}

export default App;
