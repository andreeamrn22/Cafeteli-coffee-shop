import React from "react";
import AssortatedTeasDisplay from "../AssortatedTeasDisplay";
import green_tea from "../../../assets/website/produse/ceaiuri/ceai_asortat/GreenTea_cutie.png";
import golden_mango from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/golden-mango.png";
import cleopatra_night from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/cleoptra_n_night.png";
import bahamian_soursop from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/bahamian_soursop.png";
import strawberry_marshmallow from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/strawberry_marshmallow.png";

const teas = [
  {
    name: "Golden Mango",
    image: golden_mango,
    desc: "Ceai verde chinezesc; mango măruntit (1%), petale de șofrănel (0.2%), aromă naturală ”Mango”.",
  },
  {
    name: "Cleopatra's Night",
    image: cleopatra_night,
    desc: "Ceai verde chinezesc, mărunțit; zmeură (5%), fructe de ananas și mere mărunțite (1%), petale de flori (șofrănel, trandafir, albăstrele și gălbenele) (0,5%), aromă naturală ”Zmeură”.",
  },
  {
    name: "Bahamian Soursop",
    image: bahamian_soursop,
    desc: "Ceai verde chinezesc, mărunțit; soursop (graviola) mărunțit (1%), petale de gălbenele (0,5%), aromă naturală ”Soursop”.",
  },
  {
    name: "Strawberry Marshmallow",
    image: strawberry_marshmallow,
    desc: "Frunze mărunte de ceai verde chinezesc; frăguțe mărunte (1%), petale de albăstrele (0.1%), aromă naturală ”Fragi”.",
  },
];

const GreenTea = () => {
  const boxData = {
    title: "Green Tea Assorted",
    image: green_tea,
    description:
      "Cutie cu 32 de pliculețe de ceai verde asortat: 4 arome diferite, câte 8 pliculețe din fiecare.",
    teas,
  };

  return <AssortatedTeasDisplay boxData={boxData} />;
};

export default GreenTea;
