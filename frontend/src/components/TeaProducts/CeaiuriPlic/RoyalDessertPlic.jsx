import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Royal_Dessert from "../../../assets/website/produse/ceaiuri/ceai_plic/Royal_Dessert.png";

const RoyalDessertPlic = () => {
  const productData = {
    title: "Royal Dessert",
    image: Royal_Dessert,
    description:
      "Amestec de hibiscus, fructe și petale de flori, cu aromă de vișine și coacăze.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Petale de hibiscus, măceșe, vișine și frăguțe mărunțite (25%), ananas și coajă de portocale (1,5%), petale de trandafir și gălbenele (0,5%), arome naturale: ”Vișine” și ”Coacăze”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default RoyalDessertPlic;
