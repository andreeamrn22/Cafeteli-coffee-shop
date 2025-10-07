import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Love_blossom from "../../../assets/website/produse/ceaiuri/ceai_tub/Love-blossom.png";

const LoveBlossomTub = () => {
  const productData = {
    title: "Love Blossom",
    image: Love_blossom,
    description:
      "Amestec de ceai negru, fructe, fructe de pădure și petale de șofrănel, cu aromă de maracuia și mango.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru de Ceylon de calitate superioară, smochine mărunțite (8%), mango mărunțit (2%), căpșune mărunțite (2%), petale de șofrănel (1%), arome naturale: ”Maracuia”, ”Mango”.",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default LoveBlossomTub;
