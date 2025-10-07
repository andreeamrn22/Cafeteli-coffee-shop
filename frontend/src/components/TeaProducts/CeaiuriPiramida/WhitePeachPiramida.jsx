import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import WhitePeach from "../../../assets/website/produse/ceaiuri/ceai_piramida/WhitePeach.png";

const WhitePeachPiramida = () => {
  const productData = {
    title: "White Peach",
    image: WhitePeach,
    description:
      "Amestec de ceai verde și petale de piersic, cu aromă de piersici.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai alb, petale de flori de piersic (2%), aromă naturală “Piersici”.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default WhitePeachPiramida;
