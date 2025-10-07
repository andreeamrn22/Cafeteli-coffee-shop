import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import StrawberryMarshmallow from "../../../assets/website/produse/ceaiuri/ceai_piramida/StrawberryMarshmallow.png";

const StrawberryMarshmallowPiramida = () => {
  const productData = {
    title: "Strawberry Marshmallow",
    image: StrawberryMarshmallow,
    description:
      "Amestec de ceai verde, căpșuni și petale de albăstrele, cu aromă de fragi.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai verde chinezesc, căpșune deshidratate, mărunțite (1%), petale de albăstrele (0.3%), aromă naturală “Fragi”.",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default StrawberryMarshmallowPiramida;
