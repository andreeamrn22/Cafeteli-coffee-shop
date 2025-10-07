import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import PomegranateShake from "../../../assets/website/produse/ceaiuri/ceai_piramida/PomegranateShake.png";

const PomegranateShakePiramida = () => {
  const productData = {
    title: "Pomegranate Shake",
    image: PomegranateShake,
    description:
      "Amestec de ceai negru, zmeură și petale de șofrănel, cu aromă de rodie.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru, zmeură deshidratată, mărunțită (2%), petale de șofrănel (1%), aromă “Rodie”.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default PomegranateShakePiramida;
