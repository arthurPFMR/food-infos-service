import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Filters = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("bn");

  useEffect(() => {
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}&search_simple=1&action=process&json=1`
      )
      .then((res) => setData(res.data.products));
    //   .then((res) => console.log(res.data.products))
  }, [searchValue]);
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="card">
        {data.map((product) => (
          <Card key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
