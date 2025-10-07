import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Bahamian_Soursop from "../../../assets/website/produse/ceaiuri/ceai_tub/Bahamian_Soursop.png";

const BahamianSoursopTub = () => {
  const productData = {
    title: "Bahamian Soursop",
    image: Bahamian_Soursop,
    description:
      "Amestec de ceai verde, mango și petale de flori, cu aromă de soursop.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai verde chinezesc; mango mărunțit (1,5%), petale de flori de portocal (1,5%), aromă naturală ”Soursop”.",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default BahamianSoursopTub;
