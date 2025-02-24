import React from "react";
import "../styles/Home.css";
import Service from "./Service";
import About from "./About";
import Menu from "./Menu";
import Request from "./Request";
import MasterChefs from "./Chef";


import Chefs from "./Client";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>
            Enjoy Our <br />
            Delicious Meal
          </h1>
          <h2></h2>
          <p>
          Welcome to TastyRestoran  where flavors come alive!<br/>

           Enjoy our freshly prepared meals, crafted with love and the 
           finest<br/>  ingredients.
           From sizzling appetizers to mouthwatering mains and indulgent desserts, <br/> every bite is a taste of perfection. Dine with us and savor an unforgettable culinary experience!
          </p>
          <button className="book-table">BOOK A TABLE</button>
        </div>
        <div className="home-image">
          <img
            src="/Images/food02.png"
            alt="Delicious Meal"
          />
        </div>
      </div>
      <Service />
      <About />
      <Menu />
      <Request />
      <MasterChefs />
      <Chefs />
    
    </>
  );
}

export default Home;
