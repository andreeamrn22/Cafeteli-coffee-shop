import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import KILIMANJARO_MOSHI from "../../assets/website/produse/cafea_origini/KILIMANJARO_MOSHI.png";

const productData = {
  title: "KILIMANJARO MOSHI",
  image: KILIMANJARO_MOSHI,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "Africa" },
    { label: "Altitudine", value: "1200 - 2000 M" },
    {
      label: "Varietate",
      value: "Typica",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value:
        "Condimente (oregano), cacao, curmale, semințe dovleac, note lemnoase",
    },
    { label: "Aciditate", value: 3, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const Kilimanjaro = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default Kilimanjaro;
