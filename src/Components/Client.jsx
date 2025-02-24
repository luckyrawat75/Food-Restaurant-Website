import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Client.css";

const testimonials = [
  {
    id: 1,
    text: "Amazing experience! The service was top-notch food was delicious.",
    name: "John Doe",
    profession: "Food Blogger",
    image: "/Images/client01.jpg",
  },
  {
    id: 2,
    text: "A wonderful place with great ambiance and even better cuisine.",
    name: "Sarah Smith",
    profession: "Chef",
    image: "/Images/client02.jpg",
  },
  {
    id: 3,
    text: "I loved the atmosphere and the staff was incredibly friendly!",
    name: "Michael Brown",
    profession: "Restaurant Critic",
    image: "/Images/client03.jpg",
  },
];

const chefs = () => {
  return (
    <section className="testimonial-section">
      <h3 className="testimonial-subtitle">--- Testimonial ---</h3>
      <h2 className="testimonial-title">What Our Clients Say</h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <span className="quote-icon">❝</span>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-client">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-profession">{testimonial.profession}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default chefs;
