import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Passion_Fruit from "../../../assets/website/produse/ceaiuri/ceai_piramida/Passion_Fruit.png";

const PassionFruitPiramida = () => {
  const productData = {
    title: "Passion Fruit",
    image: Passion_Fruit,
    description:
      "Amestec de ceai negru, coajă de portocale și petale de flori, cu aromă de piersici și maracuia.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru de Ceylon, coajă de portocale (4%), petale de flori (trandafir, șofrănel și gălbenele) (1,7%), arome naturale: ”Piersici”, ”Fructul pasiunii”.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default PassionFruitPiramida;
