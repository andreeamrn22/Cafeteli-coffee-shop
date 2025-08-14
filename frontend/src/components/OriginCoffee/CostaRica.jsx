import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import COSTA_RICA_SAN_RAFAEL_TARRAZU from "../../assets/website/produse/cafea_origini/COSTA_RICA_SAN_RAFAEL_TARRAZU.png";

const productData = {
  title: "COSTA RICA SAN RAFAEL TARRAZU",
  image: COSTA_RICA_SAN_RAFAEL_TARRAZU,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America Centrală" },
    { label: "Altitudine", value: "1200 - 2000 M" },
    {
      label: "Varietate",
      value: "Caturra, Catuai, Typica ",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value:
        "Zahăr caramelizat, note picante de chilli, ciocolată cu lapte, arahide prăjite",
    },
    { label: "Aciditate", value: 3, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};

const CostaRica = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default CostaRica;
