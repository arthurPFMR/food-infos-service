import React from "react";

// Composant fonctionnel SortButtons prenant des propriétés (props)
const SortButtons = ({
  onClickNutri,
  onClickNova,
  onClickEco,
  sortByNutri,
  sortByNova,
  sortByEco,
}) => {
  return (
    // Conteneur des boutons avec la classe CSS "filter-btn"
    <div className="filter-btn">
      {/* Bouton pour le tri par nutriscore */}
      <button
        // Classe conditionnelle basée sur la valeur de sortByNutri
        className={`btn ${
          sortByNutri === "minusPlus" ? "clicked-btn-plus" : ""
        } ${sortByNutri === "plusMinus" ? "clicked-btn-minus" : ""}`}
        onClick={onClickNutri}
      >
        {/* Icône conditionnelle basée sur la valeur de sortByNutri */}
        <i
          className={`${
            sortByNutri === "unSorted" ? "fa-solid fa-sort" : ""
          }  ${sortByNutri === "minusPlus" ? "fa-solid fa-sort-down" : ""} ${
            sortByNutri === "plusMinus" ? "fa-solid fa-sort-up" : ""
          }`}
        ></i>
        nutriscore
      </button>

      {/* Bouton pour le tri par nova-score */}
      <button
        // Classe conditionnelle basée sur la valeur de sortByNova
        className={`btn ${
          sortByNova === "minusPlus" ? "clicked-btn-plus" : ""
        } ${sortByNova === "plusMinus" ? "clicked-btn-minus" : ""}`}
        onClick={onClickNova}
      >
        {/* Icône conditionnelle basée sur la valeur de sortByNova */}
        <i
          className={`${sortByNova === "unSorted" ? "fa-solid fa-sort" : ""}  ${
            sortByNova === "minusPlus" ? "fa-solid fa-sort-down" : ""
          } ${sortByNova === "plusMinus" ? "fa-solid fa-sort-up" : ""}`}
        ></i>
        nova-score
      </button>

      {/* Bouton pour le tri par éco-score */}
      <button
        // Classe conditionnelle basée sur la valeur de sortByEco
        className={`btn ${
          sortByEco === "minusPlus" ? "clicked-btn-plus" : ""
        } ${sortByEco === "plusMinus" ? "clicked-btn-minus" : ""}`}
        onClick={onClickEco}
      >
        {/* Icône conditionnelle basée sur la valeur de sortByEco */}
        <i
          className={`${sortByEco === "unSorted" ? "fa-solid fa-sort" : ""}  ${
            sortByEco === "minusPlus" ? "fa-solid fa-sort-down" : ""
          } ${sortByEco === "plusMinus" ? "fa-solid fa-sort-up" : ""}`}
        ></i>
        éco-score
      </button>
    </div>
  );
};

export default SortButtons;
