import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import ibric700 from "../../assets/website/produse/accesorii/ibric_700/ibr_700.png";
import ibric700_1 from "../../assets/website/produse/accesorii/ibric_700/ibr_700_1.png";
import ibric700_2 from "../../assets/website/produse/accesorii/ibric_700/ibr_700_2.png";
import ibric700_3 from "../../assets/website/produse/accesorii/ibric_700/ibr_700_3.png";

const productData = {
  title: "Ibric de cupru (700ml)",
  images: [ibric700, ibric700_2, ibric700_1, ibric700_3],
  specs: [{ label: "Întreținere", value: "In curand" }],
};

const Ibric700 = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default Ibric700;
