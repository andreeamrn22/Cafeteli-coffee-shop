import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import CAFEAUA_BUNICII_100_ARABICA from "../../assets/website/produse/cafea_blend/CAFEAUA_BUNICII_100_ARABICA.png";

const productData = {
  title: "CAFEAUA BUNICII 100 ARABICA",
  image: CAFEAUA_BUNICII_100_ARABICA,
  specs: [],
};

const CafeauaBunicii = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default CafeauaBunicii;
