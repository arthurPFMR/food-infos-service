import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../assets/img/logofood.webp";
import Card from "./Card";
import SearchInput from "./SearchInput";
import SortButtons from "./SortButtons";
import { NavLink } from "react-router-dom";

const CategoryFilter = () => {
  // Utilisation des états pour gérer les différentes données et actions
  const [category, setCategory] = useState("plats-prepares");
  const [selectedCategory, setSelectedCategory] = useState("plats-prepares");
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortByNutri, setSortByNutri] = useState("unSorted");
  const [sortByNova, setSortByNova] = useState("unSorted");
  const [sortByEco, setSortByEco] = useState("unSorted");

  // Effet de chargement initial pour récupérer les produits de la catégorie sélectionnée
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

  // Effet pour rechercher les produits en fonction de la valeur de recherche
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}&search_simple=1&action=process&json=1`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Erreur lors de la requête API", error);
      }
    };
    if (searchValue) {
      fetchData();
    }
  }, [searchValue]);

  // Fonction pour gérer le changement de catégorie
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setSelectedCategory(selectedCategory);
  };

  // Fonctions de tri pour les scores nutritionnels, Nova et Eco
  const sortNutriscore = () => {
    const sortData = [...products].sort((a, b) => {
      return a.nutriscore_grade.localeCompare(b.nutriscore_grade);
    });
    setProducts(sortByNutri === "plusMinus" ? sortData.reverse() : sortData);
    setSortByNutri(sortByNutri === "plusMinus" ? "minusPlus" : "plusMinus");
  };

  const sortNovaScore = () => {
    const sortData = [...products].sort((a, b) => {
      return (a.nova_groups ?? "").localeCompare(b.nova_groups ?? "");
    });
    setProducts(sortByNova === "plusMinus" ? sortData.reverse() : sortData);
    setSortByNova(sortByNova === "plusMinus" ? "minusPlus" : "plusMinus");
  };

  const sortEcoScore = () => {
    const sortData = [...products].sort((a, b) => {
      return a.ecoscore_grade.localeCompare(b.ecoscore_grade);
    });
    setProducts(sortByEco === "plusMinus" ? sortData.reverse() : sortData);
    setSortByEco(sortByEco === "plusMinus" ? "minusPlus" : "plusMinus");
  };

  // Fonction pour gérer le changement de valeur de recherche
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <div className="nav duo">
        {/* Logo avec lien vers la page d'accueil */}
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
        {/* Composant de recherche */}
        <SearchInput value={searchValue} onChange={handleSearchChange} />
        {/* Composant de boutons de tri */}
        <SortButtons
          onClickNutri={sortNutriscore}
          onClickNova={sortNovaScore}
          onClickEco={sortEcoScore}
          sortByNutri={sortByNutri}
          sortByNova={sortByNova}
          sortByEco={sortByEco}
        />
      </div>
      {/* Choix de catégories */}
      <div className="category-choices">
        <h4>Choisissez une catégorie (liste non exhaustive)</h4>
        {/* Liste de boutons de catégorie avec gestion des événements de clic */}
        <ul className="category-btns">
          <li
            className={`category-btn ${
              selectedCategory === "plats-prepares" && "clicked-btn"
            }`}
            onClick={() => handleCategoryChange("plats-prepares")}
          >
            Plats préparés
          </li>
          <li
            className={`category-btn ${
              selectedCategory === "fromages" && "clicked-btn"
            }`}
            onClick={() => handleCategoryChange("fromages")}
          >
            Fromages
          </li>
          <li
            className={`category-btn ${
              selectedCategory === "poissons" && "clicked-btn"
            }`}
            onClick={() => handleCategoryChange("poissons")}
          >
            Poissons
          </li>
          <li
            className={`category-btn ${
              selectedCategory === "confiseries" && "clicked-btn"
            }`}
            onClick={() => handleCategoryChange("confiseries")}
          >
            Confiseries
          </li>
          <li
            className={`category-btn ${
              selectedCategory === "boissons" && "clicked-btn"
            }`}
            onClick={() => handleCategoryChange("boissons")}
          >
            Boissons
          </li>
          <li
            className={`category-btn ${
              selectedCategory === "boissons-alcoolisees" && "clicked-btn"
            }`}
            onClick={() => handleCategoryChange("boissons-alcoolisees")}
          >
            Boissons alcoolisées
          </li>
          <li
            className={`category-btn ${
              selectedCategory === "frais" && "clicked-btn"
            }`}
            onClick={() => handleCategoryChange("frais")}
          >
            Produits frais
          </li>
        </ul>
      </div>
      {/* Affichage des cartes de produits */}
      <div className="cards">
        {products.map((product, index) => (
          <Card key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
