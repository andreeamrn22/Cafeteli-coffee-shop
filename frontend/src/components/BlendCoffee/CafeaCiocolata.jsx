import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import CAFEA_CU_AROMA_DE_CIOCOLATA from "../../assets/website/produse/cafea_blend/CAFEA_CU_AROMA_DE_CIOCOLATA.png";

const productData = {
  title: "CAFEA CU AROMA DE CIOCOLATA",
  image: CAFEA_CU_AROMA_DE_CIOCOLATA,
  specs: [
    {
      label: "Ingrediente",
      value: "70% Arabica, 30% Robusta, 0.8 % ciocolată",
    },
  ],
};

const CafeaCiocolata = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default CafeaCiocolata;
