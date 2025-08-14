import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import CAFEA_CU_AROMA_DE_VANILIE from "../../assets/website/produse/cafea_blend/CAFEA_CU_AROMA_DE_VANILIE.png";

const productData = {
  title: "CAFEA CU AROMA DE VANILIE",
  image: CAFEA_CU_AROMA_DE_VANILIE,
  specs: [],
};

const CafeaAromavanilie = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default CafeaAromavanilie;
