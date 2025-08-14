import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import INDIA_AA_PLANTATION from "../../assets/website/produse/cafea_origini/INDIA_AA_PLANTATION.png";

const productData = {
  title: "INDIA AA PLANTATION",
  image: INDIA_AA_PLANTATION,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "Asia" },
    { label: "Altitudine", value: "1000 - 1400 M" },
    {
      label: "Varietate",
      value: "S795,Cauvery / Catimor, SLN.9, Chandragiri",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value: "Cacao, note lemnoase, nucșoară, note picante de chilli",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const IndiaPlantation = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default IndiaPlantation;
