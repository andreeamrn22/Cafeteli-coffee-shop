import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import bucuria from "../../../assets/website/produse/dulciuri_bucuria/bomboane/bucuria.jpg";

const Bucuria = () => {
  const productData = {
    title: "Bucuria",
    image: bucuria,
    description:
      "Texturi și arome în contrast, perfect echilibrate! Bomboana Bucuria oferă crocantul foilor de vafe și al arahidelor prăjite, completat de dulceața subtilă a magiunului de mere. Întregul ansamblu este finisat cu o glazură de ciocolată. O gustare complexă și irezistibilă.",
    ingredients: [
      "piure de mere",
      "zahăr",
      "32% glazură de ciocolată",
      "cacao (ulei de palmier, masă de cacao)",
      "ulei de shea",
      "cacao în pudră",
      "emulsifianți (lecitină din soia, E476)",
      "făină de grâu",
      "ouă",
      "lecitină din soia",
      "sare",
      "ulei de palmier",
      "agenți de afânare carbonați de sodiu",
      "albuș de ou în praf",
      "acid citric",
    ],
    specs: [
      {
        label: "Avertisment",
        value: "Poate conține urme	de lapte, nuci, susan",
      },
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default Bucuria;
