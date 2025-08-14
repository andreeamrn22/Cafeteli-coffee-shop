import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import DEGUSTO_SUPREMA from "../../assets/website/produse/cafea_blend/DEGUSTO_SUPREMA.png";

const productData = {
  title: "DEGUSTO SUPREMA",
  image: DEGUSTO_SUPREMA,
  specs: [
    {
      label: "Note aromatice",
      value:
        "Alune prăjite, condimente (rozmarin), note picante de chilli, ciocolată",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 5, isRating: true },
  ],
};

const DegustoSupremo = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default DegustoSupremo;
