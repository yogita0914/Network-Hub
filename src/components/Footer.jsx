import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Network Hub</h2>

          <p>Trusted Laptop, Desktop, Printer and CCTV Solutions Provider.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>

          <p>📞 7454949416</p>
          <p>📍 DD Plaza, Mathura</p>
          <p>✉️ networkhub405@gmail.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="https://wa.me/917454949416">
              <FaWhatsapp />
            </a>

            <a href="mailto:networkhub405@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Network Hub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
