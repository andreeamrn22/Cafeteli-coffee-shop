import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import ibric500 from "../../assets/website/produse/accesorii/ibric_500/ibr_500.png";
import ibric500_1 from "../../assets/website/produse/accesorii/ibric_500/ibr_500_1.png";
import ibric500_2 from "../../assets/website/produse/accesorii/ibric_500/ibr_500_2.png";
import ibric500_3 from "../../assets/website/produse/accesorii/ibric_500/ibr_500_3.png";
import ibric500_4 from "../../assets/website/produse/accesorii/ibric_500/ibr_500_4.png";

const productData = {
  title: "Ibric de cupru (500ml)",
  images: [ibric500, ibric500_1, ibric500_4, ibric500_2, ibric500_3],
  specs: [{ label: "Întreținere", value: "In curand" }],
};

const Ibric500 = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default Ibric500;
