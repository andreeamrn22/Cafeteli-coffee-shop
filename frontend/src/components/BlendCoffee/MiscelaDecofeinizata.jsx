import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import MISCELA_DECOFEINIZATA from "../../assets/website/produse/cafea_blend/MISCELA_DECOFEINIZATA.png";

const productData = {
  title: "MISCELA DECOFEINIZATA",
  image: MISCELA_DECOFEINIZATA,
  specs: [
    {
      label: "Note aromatice",
      value:
        "Baton de ciocolată, anason, cereale cu lapte, condimente (marjoram)",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 3, isRating: true },
  ],
};
const MiscelaDecofeinizata = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default MiscelaDecofeinizata;
