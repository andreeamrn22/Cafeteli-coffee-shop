import React, { useEffect, useState } from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import COLUMBIA_SUPREMO from "../../assets/website/produse/cafea_origini/COLUMBIA_SUPREMO_600x600.png";

const productData = {
  title: "COLUMBIA SUPREMO",
  image: COLUMBIA_SUPREMO,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America de Sud" },
    { label: "Altitudine", value: "1300 - 1700 M" },
    {
      label: "Varietate",
      value: "Typica, Catuai, Caturra, Catimor, Colombia, Sarchimor, Castillo",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value:
        "Kiwi/Guava, ciocolată cu fructe uscate, condimente (salvie), cocos, tamarind",
    },
    { label: "Aciditate", value: 3, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const ColumbiaSupremo = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default ColumbiaSupremo;
