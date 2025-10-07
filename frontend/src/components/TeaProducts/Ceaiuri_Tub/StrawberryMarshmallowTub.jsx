import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Strawberry_Marshmallow from "../../../assets/website/produse/ceaiuri/ceai_tub/Strawberry_Marshmallow.png";

const StrawberryMarshmallowTub = () => {
  const productData = {
    title: "Strawberry Marshmallow",
    image: Strawberry_Marshmallow,
    description:
      "Amestec de ceai verde, căpșuni și petale de albăstrele, cu aromă de fragi.",
    specs: [
      {
        label: "Ingrediente",
        value:
          " Frunze de ceai verde chinezesc, căpșune mărunțite (2%), petale de albăstrele (0,5%), aromă naturală “Fragi”.",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default StrawberryMarshmallowTub;
