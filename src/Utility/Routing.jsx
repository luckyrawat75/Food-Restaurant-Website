import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Service from "../Components/Service";
import Menu from "../Components/Menu";
import Teams from "../Components/Team";
import MyContact from "../Components/Mycontact";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Team" element={<Teams />} />
      <Route path="Service" element={<Service />} />
      <Route path="/book" element={<MyContact/>}/>
    </Routes>
  );
}

export default Routing;
