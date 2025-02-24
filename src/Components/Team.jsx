import React from "react";
import "../styles/Team.css";
import Footer from "./Footer";
const chefs = [
  {
    id: 1,
    name: "John Doe",
    designation: "Head Chef",
    image: "/Images/chef01.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    designation: "Executive Chef",
    image: "/Images/chef02.jpg",
  },
  {
    id: 3,
    name: "David Brown",
    designation: "Sous Chef",
    image: "/Images/chef03.jpg",
  },
  {
    id: 4,
    name: "Robert Wilson",
    designation: "Pastry Chef",
    image: "/Images/chef04.jpg",
  },
];

const Teams = () => {
  return (
    <>
      <section className="chefs-section">
        <h3 className="chefs-subtitle">--- Team Members ---</h3>
        <h2 className="chefs-title">Our Master Chefs</h2>
        <div className="chefs-container">
          {chefs.map((chef) => (
            <div key={chef.id} className="chef-card">
              <div className="chef-image">
                <img src={chef.image} alt={chef.name} />
              </div>
              <h3 className="chef-name">{chef.name}</h3>
              <p className="chef-designation">{chef.designation}</p>
            </div>
          ))}
        </div>
      </section>
 
    </>
  );
};

export default Teams;
