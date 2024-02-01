import React from "react";

import NoImg from "../assets/img/noImg.webp";
import { NavLink } from "react-router-dom";

const PopProduct = ({ data, onClose }) => {
  const handleClosePopup = () => {
    onClose();
  };

  return (
    <div className="popup-content">
      <button className="close-popup" onClick={handleClosePopup}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <h4>{data.product_name}</h4>
      {data.image_front_url ? (
        <img
          className="popup-img"
          src={data.image_front_url}
          alt={data.product_name}
        />
      ) : (
        // eslint-disable-next-line
        <img
          className="product-img"
          src={NoImg}
          alt="pas d'image pour ce produit"
        />
      )}
      {data.image_ingredients_url ? (
        <img
          className="popup-img"
          src={data.image_ingredients_url}
          alt={data.product_name}
        />
      ) : (
        ""
      )}
      {data.image_nutrition_thumb_url ? (
        <img
          className="popup-img"
          src={data.image_nutrition_thumb_url}
          alt={data.product_name}
        />
      ) : (
        ""
      )}
      <div className="description">
        <p>
          <span className="bold">Marque : </span>
          {data.brands.split(",").join(" - ")}
        </p>
        <p>
          <span className="bold">Quantité : </span>
          {data.quantity}
        </p>
        <p>
          <span className="bold">Allergène(s) : </span>
          {data.allergens
            ? data.allergens.split("en:").join(" ")
            : "pas d'allergène indiqué"}
        </p>
        <p>
          <span className="bold">Ingredients : </span>
          {data.ingredients_text.split(["_"])}
        </p>
        <p>
          <span className="bold">Conditionnement : </span>
          <p>{data.packaging}</p>
        </p>
        <p>
          <span className="bold">Catégories : </span>
          {data.categories}
        </p>
        <p>
          <span className="bold">Labels : </span>
          {data.labels ? data.labels : "pas de label indiqué"}
        </p>
        {data.link ? (
          <NavLink to={data.link} className="link">
            <span className="bold">
              Voir le produit sur le site du fabricant{" "}
              <i class="fa-solid fa-up-right-from-square"></i>
            </span>
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PopProduct;
