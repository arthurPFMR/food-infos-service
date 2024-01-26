import React from "react";
import Loader from "./Loader";

const Card = ({ data }) => {
  if (!data) {
    return <div>{<Loader />}</div>;
  }
  return (
    <div className="cards-container">
      <div className="card">
        <img
          className="product-img"
          src={data.image_front_url}
          alt={data.product_name}
        />
        <h4>
          {data.product_name} <br /> {data.brands}
        </h4>
        <p>
          Lieu de fabrication :{" "}
          {data.manufacturing_places ? data.manufacturing_places : "inconnu"}
        </p>
        <ul className="infos">
          <li>nutriscore : {data.nutriscore_grade}</li>
          <li>Nova score : {data.nova_group}</li>
          <li>Eco-score : {data.ecoscore_grade}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
