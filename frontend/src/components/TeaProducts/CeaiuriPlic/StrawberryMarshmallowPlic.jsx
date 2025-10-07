import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Strawberry_Marshmellow from "../../../assets/website/produse/ceaiuri/ceai_plic/Strawberry_Marshmellow.png";

const StrawberryMarshmallowPlic = () => {
  const productData = {
    title: "Strawberry Marshmellow",
    image: Strawberry_Marshmellow,
    description:
      "Amestec de ceai verde, frăguțe și petale de albăstrele cu aromă de fragi.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze mărunțite de ceai verde chinezesc, frăguțe mărunțite (1%), petale de albăstrele (0,1%), aromă naturală “Fragi”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default StrawberryMarshmallowPlic;
