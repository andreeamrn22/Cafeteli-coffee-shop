import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Night_beautea from "../../../assets/website/produse/ceaiuri/ceai_plic/Night_beautea.png";

const NightBeauteaPlic = () => {
  const productData = {
    title: "Night Beautea",
    image: Night_beautea,
    description:
      "Amestec de ceai negru cu ulei de bergamotă și petale de albăstrele.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Amestec de ceai negru de Ceylon mărunțit, de calitate superioară, ceai negru kenyan mărunțit, de calitate superioară, ulei de bergamotă (0,8%), petale de albăstrele (0,3%).",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default NightBeauteaPlic;
