import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import GUATEMALA from "../../assets/website/produse/cafea_origini/GUATEMALA.png";

const productData = {
  title: "GUATEMALA SHB",
  image: GUATEMALA,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America Centrală" },
    { label: "Altitudine", value: "1600 - 1700 M" },
    {
      label: "Varietate",
      value: "Caturra, Catuai, Typica",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value: "Cacao, nuci, fructe uscate, note picante de piper, note lemnoase",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const Guatemala = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default Guatemala;
