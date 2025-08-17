import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import ibric1000 from "../../assets/website/produse/accesorii/ibric_1000/ibr_1000.png";
import ibric1000_1 from "../../assets/website/produse/accesorii/ibric_1000/ibr_1000_1.png";
import ibric1000_2 from "../../assets/website/produse/accesorii/ibric_1000/ibr_1000_2.png";
import ibric1000_3 from "../../assets/website/produse/accesorii/ibric_1000/ibr_1000_3.png";

const productData = {
  title: "Ibric de cupru (1 L)",
  images: [ibric1000, ibric1000_1, ibric1000_3, ibric1000_2],
  specs: [{ label: "Întreținere", value: "In curand" }],
};

const Ibric1000 = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default Ibric1000;
