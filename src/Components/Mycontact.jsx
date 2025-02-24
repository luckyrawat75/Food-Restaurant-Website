import React from "react";
import "../styles/Mycontact.css";

 function MyContact() {
    return (
      <div className="contact-container">
        <div className="contact-header">
          <h3>Contact Us</h3>
          <h1>Contact For Any Query</h1>
        </div>
  
        <div className="contact-content">
          <div className="contact-info">
            <div className="email-section">
              <h2>Booking</h2>
              <a href="mailto:book@example.com">
                <span className="email-icon">✉</span>
                book@example.com
              </a>
            </div>
  
            <div className="email-section">
              <h2>General</h2>
              <a href="mailto:info@example.com">
                <span className="email-icon">✉</span>
                info@example.com
              </a>
            </div>
  
            <div className="email-section">
              <h2>Technical</h2>
              <a href="mailto:tech@example.com">
                <span className="email-icon">✉</span>
                tech@example.com
              </a>
            </div>
          </div>
  
          <div className="contact-main">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645645832297!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
  
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" required rows={6} />
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  export default MyContact;