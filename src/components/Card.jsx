import React, { useState } from "react";
import Loader from "./Loader";

import NoImg from "../assets/img/noImg.webp";
import NutriA from "../assets/img/nutriA.ico";
import NutriB from "../assets/img/nutriB.ico";
import NutriC from "../assets/img/nutriC.ico";
import NutriD from "../assets/img/nutriD.ico";
import NutriE from "../assets/img/nutriE.ico";
import NutriNo from "../assets/img/nutriNo.ico";
import Nova1 from "../assets/img/nova1.ico";
import Nova2 from "../assets/img/nova2.ico";
import Nova3 from "../assets/img/nova3.ico";
import Nova4 from "../assets/img/nova4.ico";
import NovaNo from "../assets/img/novaNo.ico";
import EcoA from "../assets/img/ecoA.ico";
import EcoB from "../assets/img/ecoB.ico";
import EcoC from "../assets/img/ecoC.ico";
import EcoD from "../assets/img/ecoD.ico";
import EcoE from "../assets/img/ecoE.ico";
import EcoNo from "../assets/img/ecoNo.ico";
import PopProduct from "./PopProduct";

const Card = ({ data }) => {
  const [popup, setPopup] = useState(false);

  // Si les données ne sont pas disponibles, afficher le composant Loader
  if (!data) {
    return <div>{<Loader />}</div>;
  }

  // Fonction utilitaire pour afficher l'image correspondant au Nutriscore du produit
  const Nutriscore = () => {
    let scoreImgNutri;
    // switch pour gérer les différentes valeurs du Nutriscore
    switch (data.nutriscore_grade) {
      case "a":
        scoreImgNutri = (
          <img className="score-img" src={NutriA} alt="nutriscore A" />
        );
        break;
      case "b":
        scoreImgNutri = (
          <img className="score-img" src={NutriB} alt="nutriscore B" />
        );
        break;
      case "c":
        scoreImgNutri = (
          <img className="score-img" src={NutriC} alt="nutriscore C" />
        );
        break;
      case "d":
        scoreImgNutri = (
          <img className="score-img" src={NutriD} alt="nutriscore D" />
        );
        break;
      case "e":
        scoreImgNutri = (
          <img className="score-img" src={NutriE} alt="nutriscore E" />
        );
        break;
      default:
        scoreImgNutri = (
          <img className="score-img" src={NutriNo} alt="nutriscore manquant" />
        );
    }
    return scoreImgNutri;
  };
  // Fonction utilitaire pour afficher l'image correspondant au Novascore du produit
  const Novascore = () => {
    let scoreImgNova;
    // switch pour gérer les différentes valeurs du Novascore
    switch (data.nova_group) {
      case 1:
        scoreImgNova = (
          <img className="score-img" src={Nova1} alt="novascore 1" />
        );
        break;
      case 2:
        scoreImgNova = (
          <img className="score-img" src={Nova2} alt="novascore 2" />
        );
        break;
      case 3:
        scoreImgNova = (
          <img className="score-img" src={Nova3} alt="novascore 3" />
        );
        break;
      case 4:
        scoreImgNova = (
          <img className="score-img" src={Nova4} alt="novascore 4" />
        );
        break;
      default:
        scoreImgNova = (
          <img className="score-img" src={NovaNo} alt="novascore manquant" />
        );
    }
    return scoreImgNova;
  };
  // Fonction utilitaire pour afficher l'image correspondant au Écoscore du produit
  const Ecoscore = () => {
    let scoreImgEco;
    // switch pour gérer les différentes valeurs du Écoscore
    switch (data.ecoscore_grade) {
      case "a":
        scoreImgEco = (
          <img className="score-img" src={EcoA} alt="eco-score A" />
        );
        break;
      case "b":
        scoreImgEco = (
          <img className="score-img" src={EcoB} alt="eco-score B" />
        );
        break;
      case "c":
        scoreImgEco = (
          <img className="score-img" src={EcoC} alt="eco-score C" />
        );
        break;
      case "d":
        scoreImgEco = (
          <img className="score-img" src={EcoD} alt="eco-score D" />
        );
        break;
      case "e":
        scoreImgEco = (
          <img className="score-img" src={EcoE} alt="eco-score E" />
        );
        break;
      default:
        scoreImgEco = (
          <img className="score-img" src={EcoNo} alt="eco-score manquant" />
        );
    }
    return scoreImgEco;
  };
  // Traitement de la propriété manufacturing_places du produit
  const manufactureArray =
    data.manufacturing_places && typeof data.manufacturing_places === "string"
      ? data.manufacturing_places.split(",")
      : [data.manufacturing_places];

  const lastElement =
    manufactureArray.length > 1
      ? manufactureArray.pop().trim()
      : manufactureArray[0];
  // Gestion de la popup
  const handlePopup = () => {
    setPopup(true);
  };
  const closePopup = () => {
    setPopup(false);
  };
  return (
    <div className="card-container">
      <div className="card">
        <button className="view-product" onClick={handlePopup}>
          <i className="fa-solid fa-right-long"></i>
          <span className="bubble">Voir plus</span>
        </button>
        {/* Affichage de la popup si la variable popup est true */}
        {popup && (
          <div className="popup-container">
            {<PopProduct data={data} onClose={closePopup} />}
          </div>
        )}
        {/* Affichage de l'image du produit */}
        {data.image_front_url ? (
          <img
            className="product-img"
            src={data.image_front_url}
            alt={data.product_name}
          />
        ) : (
          <img className="product-img" src={NoImg} alt={data.product_name} />
        )}
        {/* Affichage du nom du produit et de la marque */}
        <h4 className="brand">
          {data.product_name} <br /> {data.brands99}
        </h4>
        {/* Affichage du lieu de fabrication */}
        <p className="place-info">
          Lieu de fabrication :
          <br />
          <span className="place-info bold">
            {" "}
            {data.manufacturing_places ? lastElement : "Inconnu"}
          </span>
        </p>
        {/* Affichage des scores Nutri, Nova, et Eco à l'aide des fonctions utilitaires */}
        <ul className="infos">
          <li>{<Nutriscore />}</li>
          <li>{<Novascore />}</li>
          <li>{<Ecoscore />}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
