import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Champagne_splashes from "../../../assets/website/produse/ceaiuri/ceai_tub/Champagne_Splashes.png";

const ChampagneSplashesTub = () => {
  const productData = {
    title: "Champagne Splashes",
    image: Champagne_splashes,
    description:
      "Amestec de ceai negru, ceai verde, căpșuni și petale de albăstrele cu aromă de fragi.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru de Ceylon; Frunze de ceai verde chinezesc „Sencha” (12%); căpșune mărunțite (4%), fructe goji (2%), petale de albăstrele și șofrănel (1%), aromă naturală „Fragi”.",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default ChampagneSplashesTub;
