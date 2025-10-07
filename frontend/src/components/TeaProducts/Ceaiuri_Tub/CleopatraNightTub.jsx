import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Cleopatra_s_night from "../../../assets/website/produse/ceaiuri/ceai_tub/Cleopatra_s_night.png";

const CleopatraNightTub = () => {
  const productData = {
    title: "Cleopatra's Night",
    image: Cleopatra_s_night,
    description:
      "Amestec de ceai verde, petale de flori și fructe, cu aromă de zmeură.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai verde chinezesc „Gun Powder”, fructe de ananas și mere mărunțite (11,2%), petale de flori (gălbenele, șofrănel, trandafir și albăstrele) (2,4%), boboci de trandafir (2,0%), fructe goji (1,5%), aromă naturală „Zmeură”.",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default CleopatraNightTub;
