import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Passion_Fruit from "../../../assets/website/produse/ceaiuri/ceai_plic/Passion_Fruit.png";

const PassionFruitPlic = () => {
  const productData = {
    title: "Passion Fruit",
    image: Passion_Fruit,
    description:
      "Amestec de ceai negru, plante și petale de șofrănel cu aromă de piersici și maracuia.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Ceai negru de Ceylon mărunțit, fructe mărunțite de ananas și piersici (5%), coajă de portocale (3%), petale de șofrănel (1%), arome naturale: ”Piersici”, ”Maracuia”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default PassionFruitPlic;
