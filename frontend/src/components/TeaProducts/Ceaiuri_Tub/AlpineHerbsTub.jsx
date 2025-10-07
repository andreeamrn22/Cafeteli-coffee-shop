import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Alpine_herbs from "../../../assets/website/produse/ceaiuri/ceai_tub/Alpine_herbs.png";

const AlpineHerbsTub = () => {
  const productData = {
    title: "Alpine Herbs",
    image: Alpine_herbs,
    description: "Amestec de plante, fructe și petale de flori.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Măceșe mărunțite (24%), lemongrass (24%), coajă de portocale (18,5%), flori de mușețel (10%), frunze de mentă (10%), mere deshidratate, mărunțite (5%), plante de echinaceea (5%), petale de flori (portocal, șofrănel, albăstrele) (3,5%).",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default AlpineHerbsTub;
