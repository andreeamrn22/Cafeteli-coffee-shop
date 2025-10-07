import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Bahamian_Soursop from "../../../assets/website/produse/ceaiuri/ceai_piramida/Bahamian_Soursop.png";

const BahamianSoursopPiramida = () => {
  const productData = {
    title: "Bahamian Soursop",
    image: Bahamian_Soursop,
    description:
      "Amestec de ceai verde, mango și petale de flori, cu aromă de graviola.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai verde chinezesc, mango (1,5%), petale de flori de portocal (1,5%), aromă naturală ”Soursop”.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default BahamianSoursopPiramida;
