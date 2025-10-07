import React from "react";
import AssortatedTeasDisplay from "../AssortatedTeasDisplay";
import flower_tea from "../../../assets/website/produse/ceaiuri/ceai_asortat/FlowerTea_cutie.png";
import royal_dessert from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/royal-dessert.png";
import alpine_herbs from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/alpine_herbs.png";
import bergamot_truffle from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/bergamot_truffle.png";
import Roiboos_Raspberry from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/Roiboos_Raspberry.png";

const teas = [
  {
    name: "Royal Dessert",
    image: royal_dessert,
    desc: "Petale de hibiscus; măceșe, vișine și frăguțe mărunțite (25%), ananas și coajă de portocale (1,5%), petale de trandafir și gălbenele (0,5%), arome naturale: ”Vișine” și ”Coacăze”.",
  },
  {
    name: "Alpine Herbs",
    image: alpine_herbs,
    desc: "Lemongrass (28%), flori de mușețel (25%), ceai verde, mărunțit (20%); măceșe mărunțite (14%), frunze de mentă (12%), petale de șofrănel și albăstrele (1%).",
  },
  {
    name: "Bergamot Truffle",
    image: bergamot_truffle,
    desc: "Ceai negru de Ceylon, mărunțit; lapacho mărunțit (1%), arome naturale: “Bergamotă”, ”Truffle”.",
  },
  {
    name: "Roiboos Raspberry",
    image: Roiboos_Raspberry,
    desc: "Rooibos, zmeură mărunțită (1,5%), aromă naturală ”Zmeură”.",
  },
];

const FlowerTeaAssorted = () => {
  const boxData = {
    title: "Flower Tea Assorted",
    image: flower_tea,
    description:
      "Colecție de ceai asortat LOVARE. 32 pliculețe de ceai asortat: 4 arome diferite, câte 8 pliculețe din fiecare.",
    teas,
  };

  return <AssortatedTeasDisplay boxData={boxData} />;
};

export default FlowerTeaAssorted;
