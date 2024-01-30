import React from "react";

import NoImg from "../assets/img/noImg.webp";

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
      <div className="description">
        <p>Marque : {data.brands}</p>
        <p>Allergène(s) : {data.allergens.split("en:").join(" ")}</p>
        <p></p>
      </div>
    </div>
  );
};

export default PopProduct;
