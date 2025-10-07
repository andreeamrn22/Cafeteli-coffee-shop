import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Cleopatra_Night from "../../../assets/website/produse/ceaiuri/ceai_plic/1001_night.png";

const CleopatraNightPlic = () => {
  const productData = {
    title: "Cleopatra's Night",
    image: Cleopatra_Night,
    description:
      "Amestec de ceai verde, petale de flori și fructe, cu aromă de zmeură.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Ceai verde chinezesc, mărunțit; zmeură (5%), fructe de ananas și mere mărunțite (1%), petale de flori (șofrănel, trandafir, albăstrele și gălbenele) (0,5%), aromă naturală ”Zmeură”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default CleopatraNightPlic;
