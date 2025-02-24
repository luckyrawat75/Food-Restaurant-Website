import React, { useState } from "react";
import "../Styles/Menu.css";


const menuData = {
  breakfast: [
    {
      id: 1,
      name: "Toast With Avocado",
      price: "$90",
      image: "/Images/avocado04.jpg",
      desc: "Healhy Breakfast Toast With Avocado, Boiled Egg On Wooden Cutting Board",
    },
    {
      id: 2,
      name: "Quinoa with Nuts Milk ",
      price: "$60",
      image: "/Images/brekfast05.jpg",
      desc: "Organic Breakfast Quinoa with Nuts Milk and Berries",
    },
    {
      id: 3,
      name: "Smoothie",
      price: "$56",
      image: "/Images/brak07.jpg",
      desc: "Smoothie bowl with banana slices, strawberry, blueberries, granola and pomegranate seeds. Top view. Healthy lifestyle, healthy eating, dieting, weight loss concept",
    },
    {
      id: 4,
      name: "coffee",
      price: "$85",
      image: "/Images/brak08.jpg",
      desc: "Hotel breakfast coffee. Food table.",
    },
  ],
  lunch: [
    {
      id: 5,
      name: "dinner",
      price: "$45",
      image: "/Images/lunch01.jpg",
      desc: " family, Lunch",
    },
    {
      id: 6,
      name: "Salad with grilled chicken",
      price: "$63",
      image: "/Images/lunch02.jpg",
      desc: "Salad with grilled chicken breast, avocado, pomegranate seeds and tomato on white background. healthy diet food",
    },
    {
      id: 7,
      name: "Hindu Veg Thali",
      price: "$46",
      image: "/Images/lunch03.jpg",
      desc: "Indian Hindu Veg Thali / food platter, selective focus",
    },
    {
      id: 8,
      name: "healthy food",
      price: "$70",
      image: "/Images/lunch04.jpg",
      desc: "Cropped shot of people having healthy food during lunch break at office. Hands of people eating balanced diet in lunch at the office",
    },
  ],
  dinner: [
    {
      id: 9,
      name: " Ceramic",
      price: "$50",
      image: "/Images/dinner01.webp",
      desc:"Cooked Dish on Ceramic Plates"
    },
    {
      id: 10,
      name: "Grilled Fish",
      price: "$130",
      image: "/Images/dinner02.jpeg",
      desc:"Cooked Meat on Plate"
    },
    {
      id: 11,
      name: "Salad",
      price: "$150",
      image: "/Images/dinner03.webp",
      desc:"Fish Salad Dish"
    },
    {
      id: 12,
      name: "Rice and Vegetables",
      price: "$100",
      image: "/Images/dinner04.webp",
      desc:"Meat, Rice and Vegetables on Plate"
    },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("breakfast");
  const [menuItems, setMenuItems] = useState(menuData["breakfast"]);

  const handleTabClick = (category) => {
    setActiveTab(category);
    setMenuItems(menuData[category]);
  };

  return (
    <>
    <div className="menu-container">
      <h2 className="menu-title">Most Popular Items</h2>
      <div className="menu-tabs">
        <span
          className={`tab ${activeTab === "breakfast" ? "active" : ""}`}
          onClick={() => handleTabClick("breakfast")}
        >
          ☕ Popular <b>Breakfast</b>
        </span>
        <span
          className={`tab ${activeTab === "lunch" ? "active" : ""}`}
          onClick={() => handleTabClick("lunch")}
        >
          🍔 Special <b>Lunch</b>
        </span>
        <span
          className={`tab ${activeTab === "dinner" ? "active" : ""}`}
          onClick={() => handleTabClick("dinner")}
        >
          🍽️ Lovely <b>Dinner</b>
        </span>
      </div>
      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-info">
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-desc">{item.desc}</p>
            </div>
            <span className="menu-price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
   
    </>
  );
};

export default Menu;
