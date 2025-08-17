import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import ibric300 from "../../assets/website/produse/accesorii/ibric_300/ibr_300.png";
import ibric300_1 from "../../assets/website/produse/accesorii/ibric_300/ibr_300_1.png";
import ibric300_2 from "../../assets/website/produse/accesorii/ibric_300/ibr_300_2.png";
import ibric300_3 from "../../assets/website/produse/accesorii/ibric_300/ibr_300_3.png";
import ibric300_4 from "../../assets/website/produse/accesorii/ibric_300/ibr_300_4.png";
import ibric300_5 from "../../assets/website/produse/accesorii/ibric_300/ibr_300_5.png";

const productData = {
  title: "Ibric de cupru (300ml)",
  images: [
    ibric300,
    ibric300_1,
    ibric300_2,
    ibric300_3,
    ibric300_4,
    ibric300_5,
  ],
  specs: [{ label: "Întreținere", value: "In curand" }],
};

const Ibric300 = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default Ibric300;
