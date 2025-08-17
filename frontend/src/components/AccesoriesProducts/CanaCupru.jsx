import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import cana_cupru from "../../assets/website/produse/accesorii/cana_cupru/cana.png";
import cana_cupru_1 from "../../assets/website/produse/accesorii/cana_cupru/cana1.png";
import cana_cupru_2 from "../../assets/website/produse/accesorii/cana_cupru/cana2.png";
import cana_cupru_3 from "../../assets/website/produse/accesorii/cana_cupru/cana3.png";

const productData = {
  title: "Cana din cupru",
  images: [cana_cupru, cana_cupru_1, cana_cupru_2, cana_cupru_3],
  specs: [{ label: "Întreținere", value: "In curand" }],
};

const CanaCupru = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default CanaCupru;
