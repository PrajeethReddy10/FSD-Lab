// ===== main.jsx =====
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// (index.css import omitted - not in the PDF)

// ===== App.jsx =====
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./exp5.css";   // App.css

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h2>🎵 Harmony Music School</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <p>© 2026 Harmony Music School</p>
      </footer>
    </BrowserRouter>
  );
}
export default App;

// ===== pages/Home.jsx =====
function Home() {
  return (
    <div className="page">
      <h1>Harmony Music School</h1>
      <p>Learn music. Find your rhythm. Create your sound.</p>
      <h2>Instruments You Can Learn</h2>
      <div className="cards">
        <div className="card">
          <h3>🎸 Guitar</h3>
          <p>Learn acoustic and electric guitar from beginner to advanced level.</p>
        </div>
        <div className="card">
          <h3>🎹 Piano</h3>
          <p>Learn piano, music theory, chords and popular songs.</p>
        </div>
        <div className="card">
          <h3>🥁 Drums</h3>
          <p>Develop your rhythm and learn different drumming techniques.</p>
        </div>
        <div className="card">
          <h3>🎻 Violin</h3>
          <p>Learn classical and contemporary violin techniques.</p>
        </div>
        <div className="card">
          <h3>🎤 Vocals</h3>
          <p>Improve your voice, pitch, breathing and singing techniques.</p>
        </div>
        <div className="card">
          <h3>🎷 Saxophone</h3>
          <p>Learn saxophone fundamentals and perform your favorite songs.</p>
        </div>
      </div>
    </div>
  );
}
export default Home;

// ===== pages/About.jsx =====
function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>
        Harmony Music School is a place where students of all ages can learn
        music from experienced instructors.
      </p>
      <h2>Our Teachers</h2>
      <div className="cards">
        <div className="card">
          <h3>John Stalin</h3>
          <h4>Piano Instructor</h4>
          <p>12+ years of experience in piano performance and music theory.</p>
        </div>
        <div className="card">
          <h3>Sanjana Chinamuthevi</h3>
          <h4>Vocal Instructor</h4>
          <p>10+ years of experience in classical and contemporary vocals.</p>
        </div>
        <div className="card">
          <h3>Sam Blessy</h3>
          <h4>Guitar Instructor</h4>
          <p>5+ years of experience teaching acoustic and electric guitar.</p>
        </div>
        <div className="card">
          <h3>Sriram Aditya Sai</h3>
          <h4>Drums Instructor</h4>
          <p>12+ years of experience in drums, rhythm and live performance.</p>
        </div>
      </div>
    </div>
  );
}
export default About;

// ===== pages/Contact.jsx =====
function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>
        Interested in learning music? Get in touch with us and book your
        trial class.
      </p>
      <div className="contact-info">
        <p><strong>📍 Address:</strong> 25 Music Street, Hyderabad</p>
        <p><strong>📞 Phone:</strong> +91 98765 43210</p>
        <p><strong>✉️ Email:</strong> info@harmonymusic.com</p>
      </div>
      <h2>Enquire Now</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="tel" placeholder="Phone Number" />
        <select>
          <option>Select an Instrument</option>
          <option>Guitar</option>
          <option>Piano</option>
          <option>Drums</option>
          <option>Violin</option>
          <option>Vocals</option>
          <option>Saxophone</option>
        </select>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Enquiry</button>
      </form>
    </div>
  );
}
export default Contact;

// ===== main.jsx (render) =====
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
