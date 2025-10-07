import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import CherryConfiture from "../../../assets/website/produse/ceaiuri/ceai_piramida/CherryConfiture.png";

const CherryConfiturePiramida = () => {
  const productData = {
    title: "Cherry Confiture",
    image: CherryConfiture,
    description:
      "Amestec de ceai negru, ceai verde și petale de trandafir, cu aromă de vișine și dude.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru de Ceylon, frunze de ceai verde chinezesc (8%), petale de trandafir (1,5%), arome naturale: “Vișine”, “Dude”. ",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default CherryConfiturePiramida;
