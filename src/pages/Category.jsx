import React from 'react';
import CategoryFilter from '../components/CategoryFilter';
import Filters from '../components/Filters';
import Logo from "../assets/img/logofood.webp";
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <div>
             <div className="nav">
          <NavLink to="/">
        <div className="logo">
          <img
            className="logo-img"
            src={Logo}
            alt="logo du site représentant une pomme et une loupe"
          />
          <h1>FOOD INFOS SERVICE</h1>
        </div>
          </NavLink>
          </div>
            <CategoryFilter />
        </div>
    );
};

export default Category;