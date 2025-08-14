import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import BRAZILIA_ALTA_MOGIANA_FRANCA from "../../assets/website/produse/cafea_origini/BRAZILIA_ALTA_MOGIANA_FRANCA.png";

const productData = {
  title: "BRAZILIA ALTA MOGIANA FRANCA",
  image: BRAZILIA_ALTA_MOGIANA_FRANCA,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America de Sud" },
    { label: "Altitudine", value: "950 - 1100 M" },
    {
      label: "Varietate",
      value: "Mundo novo, Catucai, Bourbon",
    },
    { label: "Procesare", value: "Naturală" },
    {
      label: "Note aromatice",
      value: "Arahide prăjite, ciocolată neagră, condimente (cimbru), unt",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 5, isRating: true },
  ],
};

const BraziliaAltaMogianaFranca = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default BraziliaAltaMogianaFranca;
