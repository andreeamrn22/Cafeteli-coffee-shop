import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import INDIA_MALABAR from "../../assets/website/produse/cafea_origini/INDIA_MALABAR.png";

const productData = {
  title: "INDIA MALABAR",
  image: INDIA_MALABAR,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "Asia" },
    { label: "Altitudine", value: "1100 - 1200 M" },
    {
      label: "Varietate",
      value: "Kent, S.795, Catimor",
    },
    { label: "Procesare", value: "Natural Musonic" },
    {
      label: "Note aromatice",
      value: "Condimente (tarhon), cacao, tutun de pipă",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const IndiaMalabar = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default IndiaMalabar;
