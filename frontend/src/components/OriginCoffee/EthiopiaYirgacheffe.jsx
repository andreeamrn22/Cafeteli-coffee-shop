import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import ETHIOPIA_YIRGACHEFFE from "../../assets/website/produse/cafea_origini/ETHIOPIA_YIRGACHEFFE.png";

const productData = {
  title: "ETHIOPIA YIRGACHEFFE",
  image: ETHIOPIA_YIRGACHEFFE,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "Africa" },
    { label: "Altitudine", value: "1500 - 1700 M" },
    {
      label: "Varietate",
      value: "Heirloom, Typica",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value: "Miere, condimente (busuioc), prune, coacăze, mandarine",
    },
    { label: "Aciditate", value: 4, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const EthiopiaYirgacheffe = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default EthiopiaYirgacheffe;
