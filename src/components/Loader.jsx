import React, { useEffect, useState } from "react";

const Loader = () => {
  // Utilisation de l'état pour gérer l'affichage du loader
  const [loading, setLoading] = useState(true);

  // Effet de chargement avec un délai de 7 secondes
  useEffect(() => {
    // Utilisation de setTimeout pour définir un délai
    const timeout = setTimeout(() => {
      // Met à jour l'état pour arrêter l'affichage du loader après le délai
      setLoading(false);
    }, 7000);

    // Utilisation de la fonction de nettoyage pour annuler le setTimeout
    return () => clearTimeout(timeout);
  }, []); // pas de callback, donc l'effet s'exécutera une seule fois après le montage du composant

  return (
    <div className="custom-loader-container">
      {loading ? <div className="custom-loader"></div> : ""}
    </div>
  );
};

export default Loader;
