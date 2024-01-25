import React from "react";
import Loader from "./Loader";

const Card = ({ data }) => {
  if (!data) {
    return <div>{<Loader />}</div>;
  }
  return (
    <div className="cards-container">
    <div className="card">
      <img src={data.image_front_small_url} alt="" />
      <h3>{data.product_name}</h3>
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
