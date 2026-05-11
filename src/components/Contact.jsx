import { motion } from "framer-motion";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact Us</h2>

        <p className="contact-text">
          Get in touch with us for Laptop, Desktop, Printer and CCTV services.
        </p>

        <div className="contact-container">
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />

            <h3>Call Us</h3>
            <p>To: KRISHNA</p>
            <p>7454949416</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />

            <h3>Email</h3>

            <p>networkhub405@gmail.com</p>
          </div>

          <div className="contact-card">
            <FaWhatsapp className="contact-icon" />

            <h3>WhatsApp</h3>

            <a href="https://wa.me/917454949416" target="_blank">
              Chat Now
            </a>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />

            <h3>Location</h3>

            <p>DD Plaza, Mathura</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
