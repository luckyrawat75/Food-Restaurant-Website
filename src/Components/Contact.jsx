import React from 'react';
import "../Styles/Contact.css";


const Contact = () => {
  return (
    <>
    <div className="contact-container">
      <h2 className="contact-title">Contact For Any Query</h2>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Booking</h3>
          <p>📧 book@example.com</p>
        </div>
        <div className="contact-item">
          <h3>General</h3>
          <p>📧 info@example.com</p>
        </div>
        <div className="contact-item">
          <h3>Technical</h3>
          <p>📧 tech@example.com</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43836585226!2d-74.118086397375!3d40.70583167770214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b60f67aacf%3A0x675cf2130c4b6c22!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1646887493522!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit" onClick={()=>{
            alert("thanks for visiting our website!")
          }}>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  
    </>
  );
};

export default Contact;