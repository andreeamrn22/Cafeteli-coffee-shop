import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Golden_Mango from "../../../assets/website/produse/ceaiuri/ceai_piramida/Golden_Mango.png";

const GoldenMangoPiramida = () => {
  const productData = {
    title: "Golden Mango",
    image: Golden_Mango,
    description:
      "Amestec de ceai verde și petale de portocal, cu aromă de mango.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai verde chinezesc, petale de flori de portocal (2%), petale de șofrănel (2%), aromă naturală “Mango”.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default GoldenMangoPiramida;
