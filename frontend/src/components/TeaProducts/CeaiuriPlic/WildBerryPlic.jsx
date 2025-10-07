import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Wild_Berry from "../../../assets/website/produse/ceaiuri/ceai_plic/Wild_Berry.png";

const WildBerryPlic = () => {
  const productData = {
    title: "Wild Berry",
    image: Wild_Berry,
    description:
      "Amestec de ceai negru, fructe de pădure, cu aromă de fructe de pădure.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Ceai negru de Ceylon, mărunțit; fraguțe și măceșe mărunțite (5%); aromă naturală ”Fructe de pădure”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default WildBerryPlic;
