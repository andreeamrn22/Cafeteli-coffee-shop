import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import BargamotVanilla from "../../../assets/website/produse/ceaiuri/ceai_piramida/BargamotVanilla.png";

const BergamotVanillaPiramida = () => {
  const productData = {
    title: "Bargamot Vanilla",
    image: BargamotVanilla,
    description:
      "Amestec de ceai negru și petale de portocal, cu aromă de bergamotă și vanilie.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru de Ceylon, petale de flori de portocal (1%), arome naturale: ”Vanilie”, “Bergamotă”.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default BergamotVanillaPiramida;
