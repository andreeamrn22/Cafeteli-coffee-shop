import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Raspberrry_Vanilla from "../../../assets/website/produse/ceaiuri/ceai_plic/Raspberrry_Vanilla.png";

const RaspberryVanillaPlic = () => {
  const productData = {
    title: "Raspberrry Vanilla",
    image: Raspberrry_Vanilla,
    description:
      "Amestec de ceai negru, zmeură și petale de șofrănel, cu aromă de zmeură și vanilie.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Ceai negru de Ceylon, mărunțit, zmeură mărunțită (5%), petale de șofrănel (1%), arome naturale „Zmeură” și „Vanilie”.",
      },
      { label: "Cantitate netă", value: "24 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default RaspberryVanillaPlic;
