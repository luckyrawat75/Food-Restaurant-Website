import React from "react";
import "../styles/About.css";
import MasterChefs from "./Chef";



const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-images">
          <img
            src="/Images/rest03.jpg"
            alt="Restaurant"
          />
        </div>
        <div className="about-content">
          <h4 className="about-subtitle">About Us</h4>
          <h2 className="about-title">
            Welcome to <span className="highlight">🍴Restoran</span>
          </h2>
          <p className="para">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
          <br/> diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
          </p>
          <p className="para">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet <br/>
          diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
          <br/> justo magna dolore erat amet
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>15</h3>
              <p>
                <strong>Years</strong> of EXPERIENCE
              </p>
            </div>
            <div className="stat">
              <h3>50</h3>
              <p>
                <strong>Popular</strong> MASTER CHEFS
              </p>
            </div>
          </div>
          <button className="about-button">READ MORE</button>
        </div>
      </div>
     <MasterChefs/>
    
    </>
  );
};

export default About;

