import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import NICARAGUA_MATAGALPA from "../../assets/website/produse/cafea_origini/NICARAGUA_MATAGALPA.png";

const productData = {
  title: "NICARAGUA MATAGALPA",
  image: NICARAGUA_MATAGALPA,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America Centrală" },
    { label: "Altitudine", value: "1500 - 2000 M" },
    {
      label: "Varietate",
      value: "Caturra, Catuai, Catimor, Pacamara",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value:
        "Alune prăjite, condimente (oregano), ciocolată neagră, fructe uscate",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 5, isRating: true },
  ],
};

const NicaraguaMatagalpa = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default NicaraguaMatagalpa;
