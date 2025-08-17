import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import ibric400 from "../../assets/website/produse/accesorii/ibric_400/ibr_400.png";
import ibric400_1 from "../../assets/website/produse/accesorii/ibric_400/ibr_400_1.png";
import ibric400_2 from "../../assets/website/produse/accesorii/ibric_400/ibr_400_2.png";
import ibric400_3 from "../../assets/website/produse/accesorii/ibric_400/ibr_400_3.png";

const productData = {
  title: "Ibric de cupru (400ml)",
  images: [ibric400, ibric400_1, ibric400_2, ibric400_3],
  specs: [{ label: "Întreținere", value: "In curand" }],
};

const Ibric400 = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default Ibric400;
