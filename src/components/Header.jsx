import React from "react";
// import { NavLink } from 'react-router-dom';
import Logo from "../assets/img/logofood.webp";

const Header = () => {
  return (
    <div className="header">
      <img className="logo-img" src={Logo} alt="logo du site représentant une pomme et une loupe" />
      <h1>FOOD INFOS SERVICE</h1>
    </div>
  );
};

export default Header;
