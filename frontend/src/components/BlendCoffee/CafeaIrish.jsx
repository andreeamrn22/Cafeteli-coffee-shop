import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import CAFEA_CU_AROMA_DE_IRISH_COFFEE from "../../assets/website/produse/cafea_blend/CAFEA_CU_AROMA_DE_IRISH_COFFEE.png";

const productData = {
  title: "CAFEA CU AROMA DE IRISH COFFEE",
  image: CAFEA_CU_AROMA_DE_IRISH_COFFEE,
  specs: [
    {
      label: "Ingrediente",
      value: "70% Arabica, 30% Robusta, 0.8 % Irish",
    },
  ],
};

const CafeaIrish = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default CafeaIrish;
