import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Champagne_splashes from "../../../assets/website/produse/ceaiuri/ceai_plic/Champagne_splashes.png";

const ChampagneSplashesPlic = () => {
  const productData = {
    title: "Champagne Splashes",
    image: Champagne_splashes,
    description:
      "Amestec de ceai negru, ceai verde, căpșuni și petale de albăstrele cu aromă de fragi.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Ceai negru de Ceylon, mărunțit; ceai verde chinezesc, mărunțit (10%); căpșuni mărunțite (1,5%), petale de albăstrele (0,5%), aromă naturală “Fragi”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default ChampagneSplashesPlic;
