import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import MISCELA_CEA_MAI_BUNA_CAFEA from "../../assets/website/produse/cafea_blend/MISCELA_CEA_MAI_BUNA_CAFEA.png";

const productData = {
  title: "MISCELA CEA MAI BUNĂ CAFEA",
  image: MISCELA_CEA_MAI_BUNA_CAFEA,
  specs: [
    {
      label: "Note aromatice",
      value:
        "Alune prăjite, tarhon, note picante de chilli, note lemnoase, cacao",
    },
    { label: "Aciditate", value: 2, isRating: true },
    { label: "Corp", value: 4, isRating: true },
  ],
};

const MiscelaCeaMaiBunaCafea = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default MiscelaCeaMaiBunaCafea;
