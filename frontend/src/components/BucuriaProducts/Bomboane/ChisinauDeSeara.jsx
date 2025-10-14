import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import chisinau_de_seara from "../../../assets/website/produse/dulciuri_bucuria/bomboane/chisinau_de_seara.jpg";

const ChisinauDeSeara = () => {
  const productData = {
    title: "Chișinău de seară",
    image: chisinau_de_seara,
    description:
      "Lasă-te purtat în inima Moldovei! Aceste bomboane surprind esența tradiției: o prună uscată moale (cu stafide) cu un gust dulce-acrișor, învelită într-un strat generos de ciocolată glasată. O alegere rafinată pentru momentele de răsfăț.",
    ingredients: [
      "50% Prune uscate",
      "36% Glazură de ciocolată (zahăr, masă de cacao, echivalent al untului de cacao (palmier, shea), pudră de cacao, emulsifianți: lecitină din soia, vanilină)",
      "zahăr",
      "stafide",
      "acidifiant acid citric",
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default ChisinauDeSeara;
