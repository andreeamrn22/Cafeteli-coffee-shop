import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import MISCELA_ITALIANA from "../../assets/website/produse/cafea_blend/MISCELA_ITALIANA.png";

const productData = {
  title: "MISCELA ITALIANA",
  image: MISCELA_ITALIANA,
  specs: [
    {
      label: "Note aromatice",
      value: "Cacao, zahar caramelizat, tarhon, cuisoare",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 4, isRating: true },
  ],
};

const MiscelaItaliana = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default MiscelaItaliana;
