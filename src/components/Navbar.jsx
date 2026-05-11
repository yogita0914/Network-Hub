import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import logo from '../assets/logo.jpeg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo" />
        <h1>Network Hub</h1>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a className="home"href="#home">Home</a>
        <a className="home" href="#services">Services</a>
        {/* <a href="#contact">Contact</a> */}

        <a href="https://wa.me/917454949416">
          <button>Contact Now</button>
        </a>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </motion.nav>
  )
}

export default Navbar;