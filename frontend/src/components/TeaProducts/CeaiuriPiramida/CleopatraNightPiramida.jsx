import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Cleopatra_s_Night from "../../../assets/website/produse/ceaiuri/ceai_piramida/Cleopatra_s_Night.png";

const CleopatraNightPiramida = () => {
  const productData = {
    title: "Cleopatra’s Night",
    image: Cleopatra_s_Night,
    description:
      "Amestec de ceai verde, zmeură și petale de flori, cu aromă de zmeură.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai verde chinezesc, zmeură (2%), petale de flori (gălbenele, trandafir șofrănel, albăstrele) (1,8%), aromă naturală ”Zmeură”.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default CleopatraNightPiramida;
