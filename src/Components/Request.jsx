import React, { useState } from "react";
import "../styles/Request.css";

const Request = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="request-container">
      {/* Video Section */}
      <div className={`video-container ${isPlaying ? "playing" : ""}`} onClick={handleVideoPlay}>
        {!isPlaying && <img src="/Images/about img.jpg" alt="Thumbnail" />}
        
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/laI5PWA_KC4?autoplay=10"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="play-button">▶</div>
        )}
      </div>

      {/* Form Section */}
      <div className="form-container">
        <h2>Book A Table Online</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="input-group">
            <input type="datetime-local" />
            <select>
              <option>People 1</option>
              <option>People 2</option>
              <option>People 3</option>
            </select>
          </div>
          <textarea placeholder="Special Request"></textarea>
          <button type="submit">BOOK NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Request;
