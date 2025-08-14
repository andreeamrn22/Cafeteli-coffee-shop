import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import MISCELA_CARAIBICA from "../../assets/website/produse/cafea_blend/MISCELA_CARAIBICA.png";

const productData = {
  title: "MISCELA CARAIBICA",
  image: MISCELA_CARAIBICA,
  specs: [
    {
      label: "Note aromatice",
      value: "Caramel, ciocolata neagră, fructe uscate, ienibahar",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 4, isRating: true },
  ],
};

const MiscelaCaraibica = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default MiscelaCaraibica;
