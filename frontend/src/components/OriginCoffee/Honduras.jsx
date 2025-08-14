import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import HONDURAS from "../../assets/website/produse/cafea_origini/HONDURAS.png";

const productData = {
  title: "HONDURAS SHG LA FLOR",
  image: HONDURAS,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America Centrală" },
    { label: "Altitudine", value: "1600 - 1700 M" },
    {
      label: "Varietate",
      value: "Ihcafe90, Lempira, Caturra, Catimor, Catuai",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value:
        "Condimente (cimbru), dovleac copt, note lemnoase, tutun de pipă, cacao",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const Honduras = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default Honduras;
