import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import CAFEA_AVEDIS from "../../assets/website/produse/cafea_blend/CAFEA_AVEDIS.png";

const productData = {
  title: "CAFEA AVEDIS",
  image: CAFEA_AVEDIS,
  specs: [
    // { label: "Specie", value: "Arabica" },
    // { label: "Continent", value: "America Centrală" },
    // { label: "Altitudine", value: "1200 - 2000 M" },
    // {
    //   label: "Varietate",
    //   value: "Caturra, Catuai, Typica ",
    // },
    // { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value: "Zahăr brun, arahide prăjite, cacao, condimente (oregano)",
    },
    { label: "Aciditate", value: 3, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const Avedis = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default Avedis;
