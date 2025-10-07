import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Creme_brulle from "../../../assets/website/produse/ceaiuri/ceai_piramida/Creme-brulle.png";

const CremeBrullePiramida = () => {
  const productData = {
    title: "Crème Brulle",
    image: Creme_brulle,
    description:
      "Amestec de ceai negru, lapacho și petale de portocal, cu aromă de creme-brulle.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru de Ceylon, lapacho (2%), petale de flori de portocal (1%), aromă naturală creme-brulle.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default CremeBrullePiramida;
