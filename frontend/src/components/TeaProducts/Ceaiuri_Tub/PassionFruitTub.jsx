import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Passion_fruit from "../../../assets/website/produse/ceaiuri/ceai_tub/Passion_fruit.png";

const PassionFruitTub = () => {
  const productData = {
    title: "Passion Fruit",
    image: Passion_fruit,
    description:
      "Amestec de ceai negru, plante și fructe, cu aromă de piersici și maracuia.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru de Ceylon, fructe mărunțite de ananas și piersici (10%), coajă mărunțită de portocale (5%), boboci de trandafir chinezesc, petale de gălbenele și șofrănel (3,5%), arome naturale: ”Piersici”, ”Fructul pasiunii”.",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default PassionFruitTub;
