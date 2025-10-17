// Steps to Set Up

// Create React app:

// npx create-react-app student-system
// cd student-system


// Install React Router:

// npm install react-router-dom

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
const Home = () => <h2>Welcome to Student Management System</h2>;
const Registration = () => (
  <div>
    <h2>Registration</h2>
    <input type="text" placeholder="Name" /><br/><br/>
    <input type="email" placeholder="Email" /><br/><br/>
    <button>Register</button>
  </div>
);
const Login = () => (
  <div>
    <h2>Login</h2>
    <input type="email" placeholder="Email" /><br/><br/>
    <input type="password" placeholder="Password" /><br/><br/>
    <button>Login</button>
  </div>
);
const Contact = () => (
  <div>
    <h2>Contact Us</h2>
    <p>Email: contact@example.com</p>
    <p>Phone: +1234567890</p>
  </div>
);
const About = () => <h2>About Us: We manage student data efficiently.</h2>;

function App() {
  return (
    <Router>
      <div style={{ padding: "10px", fontFamily: "Arial" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/register" style={{ margin: "0 10px" }}>Register</Link>
          <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// Run Instructions

// Start the app:

// npm start


// Open browser: http://localhost:3000