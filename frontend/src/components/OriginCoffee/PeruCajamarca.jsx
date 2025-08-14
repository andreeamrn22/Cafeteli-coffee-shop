import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import PERU_CAJAMARCA from "../../assets/website/produse/cafea_origini/PERU_CAJAMARCA.png";

const productData = {
  title: "PERU CAJAMARCA",
  image: PERU_CAJAMARCA,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America de Sud" },
    { label: "Altitudine", value: "1600 - 1900 M" },
    {
      label: "Varietate",
      value: "Typica, Pache, Caturra",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value: "Caramel, fructe uscate, condimente (tarhon), ciocolată cu lapte",
    },
    { label: "Aciditate", value: 3, isRating: true },
    { label: "Corp", value: 4, isRating: true },
  ],
};

const PeruCajamarca = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default PeruCajamarca;
