import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Filters = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [dataValue, setDataValue] = useState("nutella");

  useEffect(() => {
    axios
      .get("https://world.openfoodfacts.net/api/v2/search/" + dataValue )
      .then((res) => setDataProduct(res.data.product));
  }, [dataValue]);
  return (
    <div>
      <input
        type="text"
        placeholder="Saisir un produit à rechercher"
        onChange={(e) => setDataValue(e.target.value)}
      />
      <div className="card">
        {dataProduct.map((product) => (
          <Card key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
