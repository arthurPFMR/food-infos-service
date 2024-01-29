import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../assets/img/logofood.webp";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const Filters = () => {
  const [data, setData] = useState([]);
  // ! gerer les majuscules et minuscules
  const [searchValue, setSearchValue] = useState("riz");
  const [sortProducts, setSortProducts] = useState("minusPlus");

  const sortNutriscore = () => {
    const sortData = [...data].sort((a, b) => {
      return a.nutriscore_grade.localeCompare(b.nutriscore_grade);
    });
    setData(sortProducts === "plusMinus" ? sortData.reverse() : sortData);
    setSortProducts(sortProducts === "plusMinus" ? "minusPlus" : "plusMinus");
  };

  // const sortNovaScore = () => {
  //   const sortData = [...data].sort((a, b) => {
  //     return a.nova_group.localeCompare(b.nova_group);
  //   })
  // setData(sortProducts === "plusMinus" ? sortData.reverse() : sortData );
  // setSortProducts(sortProducts === "plusMinus" ? "minusPlus" : "plusMinus")
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}&search_simple=1&action=process&json=1`
        );
        setData(response.data.products);
      } catch (error) {
        console.error("Erreur lors de la requête API", error);
      }
    };
    if (searchValue) {
      fetchData();
    }
  }, [searchValue]);
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img
            className="logo-img"
            src={Logo}
            alt="logo du site représentant une pomme et une loupe"
          />
          <h1>FOOD INFOS SERVICE</h1>
        </div>
        <div className="filters">
          <input
            type="text"
            placeholder=" Chercher un produit par marque, mot clé..."
            id="search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="filter-btn">
          <button className="btn" onClick={sortNutriscore}>
            <i
              className={
                sortProducts === "minusPlus"
                  ? "fa-solid fa-arrow-up-wide-short"
                  : "fa-solid fa-arrow-down-wide-short"
              }
            ></i>
            nutriscore
          </button>
          <button className="btn">
            <i className="fa-solid fa-sort"></i>
            nova-score
          </button>
          <NavLink to="/categories">
            <button className="btn">
              <i className="fa-solid fa-list"></i>
              categorie
            </button>
          </NavLink>
        </div>
      </div>
      <div className="cards">
        {data.slice(0, 20).map((product) => (
          <Card key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
