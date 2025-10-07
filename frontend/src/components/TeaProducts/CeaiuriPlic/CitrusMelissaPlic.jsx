import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Citrus_Melissa from "../../../assets/website/produse/ceaiuri/ceai_plic/Citrus_Melissa.png";

const CitrusMelissaPlic = () => {
  const productData = {
    title: "Citrus Melissa",
    image: Citrus_Melissa,
    description:
      "Amestec de ceai verde, plante și coajă de portocale, cu aromă de lămâie.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Ceai verde chinezesc, mărunțit; mentă și roiniță mărunțite (30%), lemongrass (20%), coajă de portocale (1%), aromă naturală “Lămâie”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default CitrusMelissaPlic;
