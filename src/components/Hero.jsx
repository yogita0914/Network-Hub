import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>WELCOME TO</h3>

        <h1>
          <TypeAnimation
            sequence={["Network Hub", 2000, "", 500]}
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p>
          Laptop, Desktop, Printer & CCTV Sales and Services with Trusted
          Support and Professional Solutions.
        </p>

        <div className="hero-buttons">
          <a href="#services">
            <button className="service-btn">Our Services</button>
          </a>

          <a href="https://wa.me/917454949416">
            <button className="contact-btn">WhatsApp Now</button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
