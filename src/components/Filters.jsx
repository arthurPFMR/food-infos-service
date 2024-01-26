import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../assets/img/logofood.webp";
import Card from "./Card";

const Filters = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("riz");
  const [popupOpen, setPopupOpen] = useState(false);


  const handlePopup = () => {
    setPopupOpen(!popupOpen);
  };

  useEffect(() => {
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}&search_simple=1&action=process&json=1`
      )
      .then((res) => setData(res.data.products));
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
          <button className="btn" onClick={() => handlePopup()}>
            <i className="fa-solid fa-list"></i>
            categorie
            {popupOpen && (
              <div className="popup">
                <div className="popup-content">
                  <h4>Choisisser une catégorie</h4>
                  <ul>
                    <li>Alimentation</li>
                    <li>Boisson soft</li>
                    <li>Boisson avec alcool</li>
                    <li>Cosmétique</li>
                  </ul>
                </div>
              </div>
            )}
          </button>
          <button className="btn">
            <i className="fa-solid fa-sort"></i>
            nutriscore
          </button>
          <button className="btn">
            <i className="fa-solid fa-sort"></i>
            nova-score
          </button>
        </div>
      </div>
      <div className="cards">
        {data.map((product) => (
          <Card key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
