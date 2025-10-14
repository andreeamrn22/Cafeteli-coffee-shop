import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import favorit from "../../../assets/website/produse/dulciuri_bucuria/bomboane/favorit.jpg";

const Favorit = () => {
  const productData = {
    title: "Favorit",
    image: favorit,
    description:
      "Campionii gustului, gata să-ți satisfacă capriciile! Aceste bomboane se remarcă prin crema fină de arahide, care înconjoară o alună proaspăt prăjită în centrul ei. Totul este învelit într-un strat generos de ciocolată neagră. O combinație bogată și absolut irezistibilă.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default Favorit;
