import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Wild_berry from "../../../assets/website/produse/ceaiuri/ceai_tub/Wild_berry.png";

const WildBerryTub = () => {
  const productData = {
    title: "Wild Berry",
    image: Wild_berry,
    description:
      "Amestec de ceai negru, fructe de pădure și petale de trandafir chinezesc, cu aromă de fructe de pădure.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru de Ceylon, fructe de pădure (vișine, scorușe de munte, măceșe, fructe de păducel, fructe de soc, coacăze negre) (14%), petale de trandafir chinezesc (0,5%), căpșune mărunțite (0,4%), aromă naturală ”Fructe de pădure”.",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default WildBerryTub;
