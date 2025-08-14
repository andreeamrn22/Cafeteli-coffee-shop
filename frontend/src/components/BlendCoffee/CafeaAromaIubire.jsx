import React from "react";
import CoffeeProductsDetails from "../CoffeeProducts/CoffeeProductsDetails";
import CAFEA_CU_AROMA_DE_IUBIRE from "../../assets/website/produse/cafea_blend/CAFEA_CU_AROMA_DE_IUBIRE.png";

const productData = {
  title: "CAFEA CU AROMA DE IUBIRE",
  image: CAFEA_CU_AROMA_DE_IUBIRE,
  specs: [
    {
      label: "Descriere",
      value: "Cafea cu ușoară aromă de ciocolată.",
    },
  ],
};

const CafeaAromaIubire = () => {
  return (
    <div>
      <CoffeeProductsDetails productData={productData} />
    </div>
  );
};

export default CafeaAromaIubire;
