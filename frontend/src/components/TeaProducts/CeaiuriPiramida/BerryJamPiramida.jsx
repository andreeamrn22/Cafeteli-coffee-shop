import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import berry_jam from "../../../assets/website/produse/ceaiuri/ceai_piramida/berry-jam.png";

const BerryJamPiramida = () => {
  const productData = {
    title: "Berry Jam",
    image: berry_jam,
    description:
      "Amestec de hibiscus, fructe de pădure, fructe și petale de flori, cu aromă de fructe de pădure și vișine.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Petale de hibiscus (45%), coacăze și coajă de măceșe (45%), fructe de soc și de ienupăr (6%), zmeură deshidratată, mărunțită (2%), petale de gălbenele (0,5%), arome naturale: “Fructe de pădure”, “Vișine”.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default BerryJamPiramida;
