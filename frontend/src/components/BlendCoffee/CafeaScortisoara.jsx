import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import CAFEA_CU_SCORTISOARA from "../../assets/website/produse/cafea_blend/CAFEA_CU_SCORTISOARA.png";

const productData = {
  title: "CAFEA CU SCORȚIȘOARĂ",
  image: CAFEA_CU_SCORTISOARA,
  specs: [],
};

const CafeaScortisoara = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default CafeaScortisoara;
