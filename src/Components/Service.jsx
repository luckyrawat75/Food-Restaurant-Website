import React from "react";
import "../Styles/Service.css";

const services = [
  {
    icon: "👨‍🍳",
    title: "Master Chefs",
    description:
      "Mastering flavors, perfecting techniques, and creating unforgettable dishes that redefine culinary excellence with passion.",
  },
  {
    icon: "🍽️",
    title: "Quality Food",
    description:
      "Delicious, fast, and satisfying meals made with fresh ingredients for busy lifestyles on the go.",
  },
  {
    icon: "🛒",
    title: "Online Order",
    description:
      "Seamless online ordering for fresh, delicious meals delivered fast—convenience and quality at your fingertips",
  },
  {
    icon: "🎧",
    title: "24/7 Service",
    description:
      "Enjoy fresh, delicious meals anytime with our 24/7 service—convenience and quality, day or night",
  },
  
];

const Service = () => {
  return (
    <>
    <div className="service-section">
      <h3 className="sub-title">Our Services</h3>
      <h2 className="title">Explore Our Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h4 className="service-title">{service.title}</h4>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  
    </>
  );
};

export default Service;
