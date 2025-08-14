import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import MISCELA_ARABICA from "../../assets/website/produse/cafea_blend/MISCELA_ARABICA.png";

const productData = {
  title: "MISCELA ARABICA",
  image: MISCELA_ARABICA,
  specs: [
    {
      label: "Note aromatice",
      value:
        "Fructe uscate, cacao, condimente (cimbru), note picante de chilli",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 4, isRating: true },
  ],
};

const MiscelaArabica = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default MiscelaArabica;
