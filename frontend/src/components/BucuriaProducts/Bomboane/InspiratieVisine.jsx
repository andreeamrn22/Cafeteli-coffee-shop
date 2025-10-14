import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import inspiratie_visine from "../../../assets/website/produse/dulciuri_bucuria/bomboane/inspiratie_visine.jpg";

const InspiratieVisine = () => {
  const productData = {
    title: "Inspirație Vișine",
    image: inspiratie_visine,
    description:
      "O evadare dulce și intensă! Aceste bomboane sunt o capodoperă a contrastelor: un strat crocant de ciocolată neagră îmbracă o inimă moale și suculentă de jeleu cu aromă autentică de vișine. Combinația perfectă între dulceața fructată și amăruiul subtil al ciocolatei.",
    ingredients: [
      "zahăr",
      "28% glazură de ciocolată (zahar, masă de cacao, pudră de cacao, echivalent la untul de cacao, ulei de palmier, ulei de shea)",
      "emulsifianți: lecitină din soia, vanilină",
      "sirop de glucoză",
      "agent gelatinizant pectină",
      "corector de aciditate lactat de sodiu",
      "acidulant acid citric",
      "arome vegetale",
      "arome",
      "aromă 'vișină'",
    ],
    specs: [
      {
        label: "Alergeni",
        value:
          "Poate conține urme de lapte, arahide, fructe cu coajă lemnosă, semințe de susan, gluten, ouă.",
      },
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default InspiratieVisine;
