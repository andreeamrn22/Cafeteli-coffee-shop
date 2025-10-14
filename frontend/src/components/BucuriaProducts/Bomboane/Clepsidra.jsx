import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import clepsidra from "../../../assets/website/produse/dulciuri_bucuria/bomboane/clepsidra.png";

const Clepsidra = () => {
  const productData = {
    title: "Clepsidra",
    image: clepsidra,
    description:
      "Un amestec delicios care te face să uiți de timp! Miezul acestor bomboane este o combinație bogată de cocos (nucă de cocos) și arahide, învelită într-o glazură de ciocolată fină. Exteriorul este presărat din nou cu fulgi de cocos pentru o textură suplimentară și o aromă exotică.",
    ingredients: [
      "zahăr",
      "grăsime vegetală total hidrogenată (palmier, shea)",
      "15% fulgi de cocos",
      "arahide",
      "zahăr praf",
      "lapte integral praf",
      "făină de grâu",
      "pudră de cacao",
      "ulei de cartofi",
      "arome",
      "sare",
      "lecitină din soia",
      "agenți de afânare (carbonat de sodiu, carbonat de amoniu)",
      "ulei de palmier",
      "acidifiant acid citric",
    ],
    specs: [
      {
        label: "Posibili Alergeni",
        value:
          "Poate conține urme de fructe de coajă lemnoasă, semințe de susan.",
      },
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default Clepsidra;
