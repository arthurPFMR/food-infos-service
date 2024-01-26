import React from "react";
import Avocado from "../assets/img/avocado.webp";

const Header = () => {
  return (
    <div className="header">
      <img src={Avocado} alt="illustration d'un avocat kawaii" />
      <div className="intro">
        <h4>Bienvenue ;)</h4>
        <p className="app-description">
          Food infos service est une application React qui permet aux
          utilisateurs d'explorer et de découvrir des informations détaillées
          sur différents produits alimentaires à partir de la base de données
          collaborative Open Food Facts. L'application offre une interface
          conviviale pour visualiser et filtrer les données de l'API Open Food
          Facts de manière intuitive. <br />
          Soutenir{" "}
          <a
            href="https://fr.openfoodfacts.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Food Facts <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
        <h4>Informations :</h4>
        <p className="utils-infos">
          Le Nutri-Score est un système d'étiquetage nutritionnel créé pour
          aider les consommateurs à faire des choix alimentaires plus informés.
          Il attribue une note (A à E) à un produit alimentaire en fonction de
          sa composition nutritionnelle. <br />
          La classification NOVA des aliments est un système qui catégorise les
          aliments en fonction de leur degré de transformation. Développée par
          des chercheurs brésiliens, cette classification comprend quatre
          groupes (1 à 4). Souvent utilisée dans la recherche en nutrition pour
          évaluer le lien entre la consommation alimentaire et la santé, en
          mettant l'accent sur les effets des aliments ultra-transformés sur la
          santé.
        </p>
      </div>
    </div>
  );
};

export default Header;
