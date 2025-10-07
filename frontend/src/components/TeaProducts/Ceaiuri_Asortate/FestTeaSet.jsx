import React from "react";
import AssortatedTeasDisplay from "../AssortatedTeasDisplay";
import fest_tea from "../../../assets/website/produse/ceaiuri/ceai_asortat/FestTeaSet_cutie.png";
import nights from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/1001night.png";
import champagne_splashes from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/Champagne_Splashes.png";
import bergamot_truffle from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/bergamot_truffle.png";
import cleoptra_n_night from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/cleoptra_n_night.png";
import strawberry_marshmallow from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/strawberry_marshmallow.png";
import royal_dessert from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/royal-dessert.png";

const teas = [
  {
    name: "1001 Nights",
    image: nights,
    desc: "Cei negru de Ceylon; Ceai verde chinezesc (10%); mere mărunte (1.5%), petale de flori (albăstrele, gălbenele, șofrănel, trandafir), aromă naturală ”Struguri”.",
  },
  {
    name: "Champagne Splashes",
    image: champagne_splashes,
    desc: "Cei negru de Ceylon; ceai verde chinezesc (10%); căpșuni mărunte (1.5%), petale de albăstrele (0.5%), aromă naturală ”Fragi”.",
  },
  {
    name: "Bergamot Truffle",
    image: bergamot_truffle,
    desc: "Ceai negru de Ceylon, mărunțit; lapacho mărunțit (1%), arome naturale: “Bergamotă”, ”Truffle”.",
  },
  {
    name: "Cleopatra's Night",
    image: cleoptra_n_night,
    desc: "Ceai verde chinezesc, mărunțit; zmeură (5%), fructe de ananas și mere mărunțite (1%), petale de flori (șofrănel, trandafir, albăstrele și gălbenele) (0,5%), aromă naturală ”Zmeură”.",
  },
  {
    name: "Strawberry Marshmallow",
    image: strawberry_marshmallow,
    desc: "Frunze mărunte de ceai verde chinezesc; frăguțe mărunte (1%), petale de albăstrele (0.1%), aromă naturală ”Fragi”.",
  },
  {
    name: "Royal Dessert",
    image: royal_dessert,
    desc: "Petale de hibiscus; măceșe, vișine și frăguțe mărunțite (25%), ananas și coajă de portocale (1,5%), petale de trandafir și gălbenele (0,5%), arome naturale: ”Vișine” și ”Coacăze”.",
  },
];

const FestTeaSet = () => {
  const boxData = {
    title: "Fest Tea Set",
    image: fest_tea,
    description:
      "Colecție de ceai asortat LOVARE. 90 pliculețe de ceai asortat: 6 arome a câte 15 pliculețe fiecare.",
    teas,
  };

  return <AssortatedTeasDisplay boxData={boxData} />;
};

export default FestTeaSet;
