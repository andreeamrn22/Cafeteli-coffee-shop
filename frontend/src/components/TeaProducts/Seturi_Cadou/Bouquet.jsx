import React from "react";
import AssortatedTeasDisplay from "../AssortatedTeasDisplay";
import BouquetImg from "../../../assets/website/produse/ceaiuri/seturi_cadou/Bouquet.png";
import nights from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/1001night.png";
import champagne_splashes from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/Champagne_Splashes.png";
import strawberry_marshmallow from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/strawberry_marshmallow.png";
import golden_mango from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/golden-mango.png";
import bergamot_vanilla from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/bergamot-vanilla.png";
import berry_jam from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/berry-jam.png";

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
    name: "Strawberry Marshmallow",
    image: strawberry_marshmallow,
    desc: "Frunze mărunte de ceai verde chinezesc; frăguțe mărunte (1%), petale de albăstrele (0.1%), aromă naturală ”Fragi”.",
  },
  {
    name: "Golden Mango",
    image: golden_mango,
    desc: "Ceai verde chinezesc; mango măruntit (1%), petale de șofrănel (0.2%), aromă naturală ”Mango”.",
  },
  {
    name: "Bergamot Vanilla",
    image: bergamot_vanilla,
    desc: "Cei negru de Ceylon; petale de șofrănel (0.5%), arome naturale: ”Bergamotă”, ”Vanilie”; vanilie măcinată.",
  },
  {
    name: "Berry Jam",
    image: berry_jam,
    desc: "Petale de hibiscus, frăguțe (20%), măceșe (20%), petale de albăstrele (0.5%), arome naturale: ”Zmeură”, ”Coacăze”, ”Vișine”.",
  },
];

const Bouquet = () => {
  const boxData = {
    title: "Bouquet",
    image: BouquetImg,
    description:
      "Colecție de ceaiuri asortate LOVARE. 30 de plicuri de ceai — 6 arome, câte 5 plicuri fiecare. O experiență florală și fructată rafinată.",
    teas,
  };

  return <AssortatedTeasDisplay boxData={boxData} />;
};
export default Bouquet;
