import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import NICARAGUA_MARAGOGYPE from "../../assets/website/produse/cafea_origini/NICARAGUA_MARAGOGYPE.png";

const productData = {
  title: "NICARAGUA MARAGOGYPE",
  image: NICARAGUA_MARAGOGYPE,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America Centrală" },
    { label: "Altitudine", value: "1500 - 2000 M" },
    {
      label: "Varietate",
      value: "Maragogype",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value: "Cacao, Condimente (rozmarin), fructe uscate",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 5, isRating: true },
  ],
};

const NicaraguaMaragogype = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default NicaraguaMaragogype;
