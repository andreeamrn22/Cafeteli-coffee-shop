import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import pahar_cupru from "../../assets/website/produse/accesorii/pahar_cupru/pahar.png";
import pahar_cupru_1 from "../../assets/website/produse/accesorii/pahar_cupru/pahar1.png";

const productData = {
  title: "Pahar din cupru",
  images: [pahar_cupru, pahar_cupru_1],
  specs: [{ label: "Întreținere", value: "In curand" }],
};

const PaharCupru = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default PaharCupru;
