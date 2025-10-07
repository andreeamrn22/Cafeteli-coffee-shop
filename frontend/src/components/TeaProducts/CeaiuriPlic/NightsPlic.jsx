import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Night from "../../../assets/website/produse/ceaiuri/ceai_plic/1001_night.png";

const NightsPlic = () => {
  const productData = {
    title: "1001 Nights",
    image: Night,
    description:
      "Amestec de ceai negru, ceai verde, plante și fructe, cu aromă de struguri.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Ceai negru de Ceylon, mărunțit, Ceai verde chinezesc, mărunțit (10%); mere mărunțite (1,5%), petale de flori (albăstrele, gălbenele, șofrănel, trandafir) (1,5%), aromă naturală ”Struguri” .",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default NightsPlic;
