import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Love_blossom from "../../../assets/website/produse/ceaiuri/ceai_plic/Love_blossom.png";

const LoveBlossomPlic = () => {
  const productData = {
    title: "Love Blossom",
    image: Love_blossom,
    description:
      "Amestec de ceai negru, fructe, fructe de pădure și petale de șofrănel cu aromă de maracuia și mango.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Ceai negru kenyan, fructe mărunțite de mango (2%), căpșune mărunțite (1%), petale de șofrănel (0,5%), arome naturale: ”Maracuia”, ”Mango”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default LoveBlossomPlic;
