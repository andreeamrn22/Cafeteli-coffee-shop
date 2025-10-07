import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Berry_jam from "../../../assets/website/produse/ceaiuri/ceai_tub/Berry_jam.png";

const BerryJamTub = () => {
  const productData = {
    title: "Berry Jam",
    image: Berry_jam,
    description:
      "Amestec de hibiscus, fructe de pădure, fructe și petale de flori, cu aromă de fructe de pădure și vișine.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Petale de hibiscus, coacăze negre (10%), coajă de măceșe (10%), fructe de ienupăr (3%), fructe de soc (3%), căpșune mărunțite (1%), petale de albăstrele (0,7%), zmeură (0,5%), arome naturale: “Vișine”, “Zmeură”, “Coacăze”.",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default BerryJamTub;
