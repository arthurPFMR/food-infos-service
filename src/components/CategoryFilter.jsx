import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Category = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/category/${category}.json`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Erreur lors de la requête API", error);
      }
    };

    if (category) {
      fetchData();
    }
  }, [category]);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div>
      <div className="popup-content">
        <h4>Choisissez une catégorie (liste non exhaustive)</h4>
        <ul>
          <li onClick={() => handleCategoryChange("plats-prepares")}>
            Plats préparés
          </li>
          <li onClick={() => handleCategoryChange("viandes-derives")}>
            Viandes et dérivés
          </li>
          <li onClick={() => handleCategoryChange("poissons-derives")}>
            Poissons et dérivés
          </li>
          <li onClick={() => handleCategoryChange("confiseries")}>
            Confiseries
          </li>
          <li onClick={() => handleCategoryChange("boissons")}>Boissons</li>
          <li onClick={() => handleCategoryChange("boissons-alcoolisees")}>
            Boissons alcoolisées
          </li>
          <li onClick={() => handleCategoryChange("cosmetiques")}>
            Cosmétiques
          </li>
        </ul>
        <h4>Produits dans la catégorie {category} :</h4>
        <div className="cards">
          {products.map((product, index) => (
            <Card key={index} data={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
