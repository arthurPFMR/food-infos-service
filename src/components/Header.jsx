import React from "react";
// import { NavLink } from 'react-router-dom';
import Logo from "../assets/img/burger.webp";

const Header = () => {
  return (
    <div className="header">
      <img className="logo-img" src={Logo} alt="logo burger" />
      <h1>FOOD INFOS SERVICE</h1>
    </div>
  );
};

export default Header;
