import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import KENYA_AA_TQ from "../../assets/website/produse/cafea_origini/KENYA_AA_TQ.png";

const productData = {
  title: "KENYA AA TQ",
  image: KENYA_AA_TQ,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "Africa" },
    { label: "Altitudine", value: "1500 - 1800 M" },
    {
      label: "Varietate",
      value: "SL28, SL34, K7",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value: "Piersică, nuga, vanilie",
    },
    { label: "Aciditate", value: 4, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const Kenya = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default Kenya;
