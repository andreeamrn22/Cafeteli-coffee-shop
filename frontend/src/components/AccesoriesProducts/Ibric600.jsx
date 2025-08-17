import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import ibric600 from "../../assets/website/produse/accesorii/ibric_600/ibr_600.png";
import ibric600_1 from "../../assets/website/produse/accesorii/ibric_600/ibr_600_1.png";
import ibric600_2 from "../../assets/website/produse/accesorii/ibric_600/ibr_600_2.png";
import ibric600_3 from "../../assets/website/produse/accesorii/ibric_600/ibr_600_3.png";

const productData = {
  title: "Ibric de cupru (600ml)",
  images: [ibric600, ibric600_1, ibric600_3, ibric600_2],
  specs: [{ label: "Întreținere", value: "In curand" }],
};

const Ibric600 = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default Ibric600;
