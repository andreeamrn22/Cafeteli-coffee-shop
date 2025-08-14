import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import EL_SALVADOR_HIMALAYA from "../../assets/website/produse/cafea_origini/EL_SALVADOR_HIMALAYA.png";

const productData = {
  title: "EL SALVADOR HIMALAYA",
  image: EL_SALVADOR_HIMALAYA,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America Centrală" },
    { label: "Altitudine", value: "1500 M" },
    {
      label: "Varietate",
      value: "Bourbon, Pacas, Pacamara, Typica ",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value:
        "Ciocolată neagră, tutun de pipă, note picante de chilli, note lemnoase",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const ElSalvador = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default ElSalvador;
