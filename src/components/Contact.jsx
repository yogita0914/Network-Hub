import React, { useState } from "react";

import { motion } from "framer-motion";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    inquiry: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          access_key: "17e629c6-5ff5-4601-9e90-a5a658241952",

          ...formData,
        }),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");

        setFormData({
          name: "",
          email: "",
          contactNo: "",
          inquiry: "",
          message: "",
        });
      } else {
        alert("There was an issue submitting the form.");
      }
    } catch (error) {
      console.error(error);

      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      {/* BACKGROUND OVERLAY */}

      <div className="contact-overlay"></div>

      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* LEFT SIDE */}

        <div className="contact-info">
          <h2>Contact Us</h2>

          <p>
            We provide trusted Laptop, Desktop, Printer and CCTV sales &
            services with professional support.
          </p>

          <div className="info-box">
            <FaPhoneAlt className="info-icon" />

            <div>
              <h4>Call Us</h4>
              <span>+91 7454949416</span>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="info-icon" />

            <div>
              <h4>Email</h4>
              <span>networkhub405@gmail.com</span>
            </div>
          </div>

          <div className="info-box">
            <FaWhatsapp className="info-icon" />

            <div>
              <h4>WhatsApp</h4>

              <a
                href="https://wa.me/917454949416"
                target="_blank"
                rel="noreferrer"
              >
                Chat Now
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />

            <div>
              <h4>Location</h4>
              <span>DD Plaza, Mathura</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}

        <motion.div
          className="contact-form-box"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Get in Touch</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="contactNo"
              placeholder="Phone Number"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="inquiry"
              placeholder="Service Required"
              value={formData.inquiry}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
