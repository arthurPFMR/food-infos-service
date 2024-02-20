// Import des modules nécessaires
import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../assets/img/logofood.webp";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const HomeFilters = () => {
  // États locaux pour gérer les produits, la valeur de recherche, et les filtres de tri
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("riz");
  const [sortByNutri, setSortByNutri] = useState("unSorted");
  const [sortByNova, setSortByNova] = useState("unSorted");
  const [sortByEco, setSortByEco] = useState("unSorted");

  // Fonction de tri par nutriscore
  const sortNutriscore = () => {
    // Création d'une copie triée du tableau [products]avec le spread operator  en fonction du critère "nutriscore_grade"
    const sortProducts = [...products].sort((a, b) => {
      return a.nutriscore_grade.localeCompare(b.nutriscore_grade);
    });

    // Mise à jour de l'état des produits en fonction de la valeur de sortByNutri
    setProducts(
      sortByNutri === "plusMinus" ? sortProducts.reverse() : sortProducts
    );

    // Mise à jour de l'état de sortByNutri en fonction de sa valeur actuelle
    setSortByNutri(sortByNutri === "plusMinus" ? "minusPlus" : "plusMinus");
  };

  // Fonction de tri par nova-score
  const sortNovaScore = () => {
    const sortProducts = [...products].sort((a, b) => {
      return a.nova_groups.localeCompare(b.nova_groups);
    });
    setProducts(
      sortByNova === "plusMinus" ? sortProducts.reverse() : sortProducts
    );
    setSortByNova(sortByNova === "plusMinus" ? "minusPlus" : "plusMinus");
  };

  // Fonction de tri par éco-score
  const sortEcoScore = () => {
    const sortProducts = [...products].sort((a, b) => {
      return a.ecoscore_grade.localeCompare(b.ecoscore_grade);
    });
    setProducts(
      sortByEco === "plusMinus" ? sortProducts.reverse() : sortProducts
    );
    setSortByEco(sortByEco === "plusMinus" ? "minusPlus" : "plusMinus");
  };

  // Effet secondaire pour effectuer une requête API lorsqu'il y a un changement dans la valeur de recherche
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Appel à l'API pour récupérer les produits en fonction de la valeur de recherche
        const response = await axios.get(
          `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}&search_simple=1&action=process&json=1`
        );
        // Mise à jour de l'état des produits avec les données de l'API
        setProducts(response.data.products);
      } catch (error) {
        console.error("Erreur lors de la requête API", error);
      }
    };

    // Vérifie si la valeur de recherche est présente avant de déclencher la requête
    if (searchValue) {
      fetchData();
    }
  }, [searchValue]);

  return (
    <div>
      {/* Barre de navigation avec le logo, la barre de recherche, les filtres de tri et un lien vers les catégories */}
      <div className="nav duo">
        <div className="title">
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
        <div className="filters">
          {/* Champ de recherche avec gestionnaire d'événements onChange pour mettre à jour la valeur de recherche */}
          <input
            type="text"
            placeholder=" Chercher un produit..."
            id="search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {/* Boutons de tri en utilisant les fonctions de tri définies */}
        <div className="filter-btn">
          <button
            className={`btn ${
              sortByNutri === "minusPlus" ? "clicked-btn-plus" : ""
            } ${sortByNutri === "plusMinus" ? "clicked-btn-minus" : ""}`}
            onClick={sortNutriscore}
          >
            <i
              className={`${
                sortByNutri === "unSorted" ? "fa-solid fa-sort" : ""
              }  ${
                sortByNutri === "minusPlus" ? "fa-solid fa-sort-down" : ""
              } ${sortByNutri === "plusMinus" ? "fa-solid fa-sort-up" : ""}`}
            ></i>
            nutriscore
          </button>
          <button
            className={`btn  ${
              sortByNova === "minusPlus" ? "clicked-btn-plus" : ""
            } ${sortByNova === "plusMinus" ? "clicked-btn-minus" : ""}`}
            onClick={sortNovaScore}
          >
            <i
              className={`${
                sortByNova === "unSorted" ? "fa-solid fa-sort" : ""
              }  ${sortByNova === "minusPlus" ? "fa-solid fa-sort-down" : ""} ${
                sortByNova === "plusMinus" ? "fa-solid fa-sort-up" : ""
              }`}
            ></i>
            nova
          </button>
          <button
            className={`btn  ${
              sortByEco === "minusPlus" ? "clicked-btn-plus" : ""
            } ${sortByEco === "plusMinus" ? "clicked-btn-minus" : ""}`}
            onClick={sortEcoScore}
          >
            <i
              className={`${
                sortByEco === "unSorted" ? "fa-solid fa-sort" : ""
              }  ${sortByEco === "minusPlus" ? "fa-solid fa-sort-down" : ""} ${
                sortByEco === "plusMinus" ? "fa-solid fa-sort-up" : ""
              }`}
            ></i>
            éco
          </button>
          {/* Lien vers la page des catégories */}
            <button className="btn">
          <NavLink to="/categories">
              <i className="fa-solid fa-list"></i>
              categorie
          </NavLink>
            </button>
        </div>
      </div>
      <Header />
      {/* Liste de cartes représentant les produits (limitée aux 20 premiers) */}
      <div className="cards">
        {products.slice(0, 20).map((product) => (
          <Card key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeFilters;
