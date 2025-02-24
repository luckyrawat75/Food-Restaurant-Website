// Footer.js (React Component)
import React from "react";
import "../styles/footer.css";
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Reservation</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 123 Street, New York, USA</p>
          <p>📞 +012 345 67890</p>
          <p>✉ info@example.com</p>
          <div className="social-icons">
            <FaTwitter />
            <FaFacebookF />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-section">
          <h3>Opening</h3>
          <p>Monday - Saturday:
          <br/>
          <br/>
           09AM - 09PM</p>
          <p>Sunday: 10AM - 08PM</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Your email" />
            <button>SIGNUP</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>We appreciate your support! Thanks for visiting our website.<a href="#">Aryan Rawat</a></p>
        <p>Thank you for dining at our restaurant! Visit again soon!</p>
      </div>
    </footer>
  );
};

export default Footer;

