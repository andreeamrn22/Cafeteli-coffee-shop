import React from "react";
import AssortatedTeasDisplay from "../AssortatedTeasDisplay";
import prime_tea from "../../../assets/website/produse/ceaiuri/ceai_asortat/PrimeTeaSet_cutie.png";
import gold_ceylon from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/gold_ceylon.png";
import bergamot_vanilla from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/bergamot-vanilla.png";
import Passion_Fruit from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/Passion_Fruit.png";
import special_green from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/special_green.png";
import Royal_Jasmine from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/Royal_Jasmine.png";
import bahamian_soursop from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/bahamian_soursop.png";

const teas = [
  {
    name: "Golden Ceylon",
    image: gold_ceylon,
    desc: "Ceai negru de Ceylon, mărunțit.",
  },
  {
    name: "Bergamot Vanilla",
    image: bergamot_vanilla,
    desc: "Ceai negru de Ceylon, mărunțit; petale de șofrănel (0,5%), arome naturale: “Bergamotă”, ”Vanilie”; vanilie măcinată.",
  },
  {
    name: "Passion Fruit",
    image: Passion_Fruit,
    desc: "Ceai negru de Ceylon, mărunțit; fructe mărunțite de ananas și piersici (5%), coajă de portocale (3%), petale de șofrănel (1%), arome naturale: ”Piersici”, ”Maracuia”.",
  },
  {
    name: "Special Green",
    image: special_green,
    desc: "Ceai verde chinezesc, mărunțit.",
  },
  {
    name: "Royal Jasmine",
    image: Royal_Jasmine,
    desc: "Ceai verde chinezesc, mărunțit; petale de iasomie (1%), aromă naturală ”Iasomie”.",
  },
  {
    name: "Bahamian Soursop",
    image: bahamian_soursop,
    desc: "Ceai verde chinezesc, mărunțit; soursop (graviola) mărunțit (1%), petale de gălbenele (0,5%), aromă naturală ”Soursop”.",
  },
];

const PrimeTeaSet = () => {
  const boxData = {
    title: "Prime Tea Set",
    image: prime_tea,
    description:
      "Colecție de ceai asortat LOVARE. 90 pliculețe de ceai asortat: 6 arome a câte 15 pliculețe fiecare.",
    teas,
  };

  return <AssortatedTeasDisplay boxData={boxData} />;
};

export default PrimeTeaSet;
