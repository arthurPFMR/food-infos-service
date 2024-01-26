import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="custom-loader-container">
      {loading ? (
        <div className="custom-loader"></div>
      ) : (
        <h3>Aucun produit ne correspond à votre recherche</h3>
      )}
    </div>
  );
};

export default Loader;
