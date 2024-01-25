import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ data }) => {

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://world.openfoodfacts.net/api/v2/product/3017624010701")
  //       .then((res) => setData(res.data.product));
  //   }, []);
  return (
    <div className="card">
      <img src={data.image_front_small_url} alt={data.image_front_small_url} />
      <h3>
        {data.product_name} - {data.brands}
      </h3>
      <ul className="product-infos">
        {/* condition img selon score ? */}
        <li>nutriscore : {data.nutriscore_grade}</li>
        <li>Nova score : {data.nova_group}</li>
        <li>Eco-score : {data.ecoscore_grade}</li>
      </ul>
    </div>
  );
};

export default Card;
