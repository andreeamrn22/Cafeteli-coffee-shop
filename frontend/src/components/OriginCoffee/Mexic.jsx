import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import MEXIC_FINCA_MONTE_AZUL from "../../assets/website/produse/cafea_origini/MEXIC_FINCA_MONTE_AZUL.png";

const productData = {
  title: "MEXIC FINCA MONTE AZUL",
  image: MEXIC_FINCA_MONTE_AZUL,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America Centrală" },
    { label: "Altitudine", value: "1200 - 1400 M" },
    {
      label: "Varietate",
      value: "Caturra, Catui, Bourbon / Typica",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value: "Note picante de chilli, ciocolată cu mentă, caramel",
    },
    { label: "Aciditate", value: 3, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const Mexic = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default Mexic;
