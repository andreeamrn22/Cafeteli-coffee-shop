import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import meteorit from "../../../assets/website/produse/dulciuri_bucuria/bomboane/meteorit.jpg";

const Meteorit = () => {
  const productData = {
    title: "Meteorit",
    image: meteorit,
    description:
      "Descoperă o simfonie de arome la fiecare mușcătură. Aceste bomboane evocă gustul original al griliajului, îmbinând perfect dulceața mierii de albine cu arahidele crocante. O delicatesă intensă, învelită într-o manta de ciocolată fină.",
    ingredients: [
      "55% arahide",
      "25% glazură de ciocolată (zahăr, masă de cacao, shea)",
      "emulsificatori (lecitină, vanilină)",
      "7,0% cacao",
    ],
    specs: [
      {
        label: "Avertisment",
        value:
          "Poate conține urme de lapte, gluten, fructe cu coajă lemnoasă, ouă.",
      },
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default Meteorit;
