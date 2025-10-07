import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Berry_Jam from "../../../assets/website/produse/ceaiuri/ceai_plic/Berry_Jam.png";

const BerryJamPlic = () => {
  const productData = {
    title: "Berry Jam",
    image: Berry_Jam,
    description:
      "Amestec de hibiscus, fructe de pădure, fructe și petale de flori, cu aromă de zmeură, coacăze și vișine.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Petale de hibiscus, frăguțe mărunțite (20%), măceșe mărunțite (20%), petale de albăstrele (0,5%), arome naturale: “Zmeură”, ”Coacăze”, “Vișine”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default BerryJamPlic;
