import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import AlpineHerbs from "../../../assets/website/produse/ceaiuri/ceai_piramida/AlpineHerbs.png";

const AlpineHerbsPiramida = () => {
  const productData = {
    title: "Alpine Herbs",
    image: AlpineHerbs,
    description: "Amestec de plante, fructe și petale de flori",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Lemongrass (22%), măceșe mărunțite (18%), flori de mușețel (18%), mere deshidratate mărunțite (15%), coajă de portocale (12.5%), frunze de mentă (8%),  echinaceea (3%), petale de flori de portocal (2%), petale de șofrănel și albăstrele (1.5%).",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default AlpineHerbsPiramida;
