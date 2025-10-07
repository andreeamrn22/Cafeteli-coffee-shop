import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import ChampagneSplashes from "../../../assets/website/produse/ceaiuri/ceai_piramida/ChampagneSplashes.png";

const ChampagneSplashesPiramida = () => {
  const productData = {
    title: "Champagne Splashes",
    image: ChampagneSplashes,
    description:
      "Amestec de ceai negru, ceai verde, căpșuni, goji și petale de flori, cu aromă de fragi.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru de Ceylon; Frunze de ceai verde chinezesc „Sencha” (12%); căpșuni deshidratate mărunțite (0.8%), petale de albăstrele (0.3%), aromă naturală „Fragi”.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default ChampagneSplashesPiramida;
