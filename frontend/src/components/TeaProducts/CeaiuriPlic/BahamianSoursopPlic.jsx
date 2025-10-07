import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Bahamian_Soursop from "../../../assets/website/produse/ceaiuri/ceai_plic/Bahamian_Soursop.png";

const BahamianSoursopPlic = () => {
  const productData = {
    title: "Bahamian Soursop",
    image: Bahamian_Soursop,
    description:
      "Amestec de ceai verde, soursop (graviola) și petale de gălbenele, cu aromă de soursop.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Ceai verde chinezesc, mărunțit; soursop (graviola) mărunțit (1%), petale de gălbenele (0,5%), aromă naturală ”Soursop”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default BahamianSoursopPlic;
