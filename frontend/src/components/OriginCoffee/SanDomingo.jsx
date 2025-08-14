import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import SAN_DOMINGO_BARAHONA from "../../assets/website/produse/cafea_origini/SAN_DOMINGO_BARAHONA.png";

const productData = {
  title: "SAN DOMINGO BARAHONA",
  image: SAN_DOMINGO_BARAHONA,
  specs: [
    { label: "Specie", value: "Arabica" },
    { label: "Continent", value: "America Centrală" },
    { label: "Altitudine", value: "800 M" },
    {
      label: "Varietate",
      value: "Catuai, Bourbon, Mundo Novo",
    },
    { label: "Procesare", value: "Spălată / Washed" },
    {
      label: "Note aromatice",
      value:
        "Zahăr caramelizat, condimente (rozmarin), nucșoară, fructe uscate",
    },
    { label: "Aciditate", value: 3, isRating: true },
    { label: "Corp", value: 4, isRating: true },
  ],
};

const SanDomingo = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default SanDomingo;
