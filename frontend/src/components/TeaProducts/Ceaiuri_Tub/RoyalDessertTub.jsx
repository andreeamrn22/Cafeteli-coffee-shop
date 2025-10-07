import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Royal_dessert from "../../../assets/website/produse/ceaiuri/ceai_tub/Royal_dessert.png";

const RoyalDessertTub = () => {
  const productData = {
    title: "Royal Dessert",
    image: Royal_dessert,
    description:
      "Amestec de hibiscus, fructe, petale de flori, fructe de pădure și condimente, cu aromă de vișine.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Petale de hibiscus sudanez “Carcade”, vișine deshidratate (12%), coajă de măceșe (10%), coaja de portocale (8%), ananas mărunțit (6%), scorţişoară mărunțită (5%), petale de trandafir chinezesc și gălbenele (3%), cuișoare (0,5%), aromă naturală “Vișine”.",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default RoyalDessertTub;
