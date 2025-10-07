import React from "react";
import AssortatedTeasDisplay from "../AssortatedTeasDisplay";
import bergamot from "../../../assets/website/produse/ceaiuri/ceai_asortat/Bergamot_cutie.png";
import golden_mango from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/golden-mango.png";
import bergamot_vanilla from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/bergamot-vanilla.png";
import bergamot_truffle from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/bergamot_truffle.png";
import bergamot_pomegranate from "../../../assets/website/produse/ceaiuri/ceai_asortat/pliculete/Bergamot_Pomegranate.png";

const teas = [
  {
    name: "Golden Mango",
    image: golden_mango,
    desc: "Ceai verde chinezesc; mango măruntit (1%), petale de șofrănel (0.2%), aromă naturală ”Mango”.",
  },
  {
    name: "Bergamot Vanilla",
    image: bergamot_vanilla,
    desc: "Ceai negru de Ceylon, mărunțit; petale de șofrănel (0,5%), arome naturale: “Bergamotă”, ”Vanilie”; vanilie măcinată.",
  },
  {
    name: "Bergamot Truffle",
    image: bergamot_truffle,
    desc: "Ceai negru de Ceylon, mărunțit; lapacho mărunțit (1%), arome naturale: “Bergamotă”, ”Truffle”.",
  },
  {
    name: "Bergamot Pomegranate",
    image: bergamot_pomegranate,
    desc: "Ceai negru de Ceylon, măceșe zdrobite (1.5%), petale de trandafir (1%), aromă naturală de bergamotă, aromă naturală de rodie.",
  },
];

const Bergamot = () => {
  const boxData = {
    title: "Bergamot Assorted",
    image: bergamot,
    description:
      "Colecție LOVARE de ceai negru asortat cu bergamotă. 32 pliculețe de ceai asortat: 4 arome diferite, câte 8 pliculețe din fiecare.",
    teas,
  };

  return <AssortatedTeasDisplay boxData={boxData} />;
};

export default Bergamot;
