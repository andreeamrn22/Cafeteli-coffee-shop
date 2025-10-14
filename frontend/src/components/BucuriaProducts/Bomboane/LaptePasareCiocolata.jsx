import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import lapte_de_pasare_ciocolata from "../../../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare_ciocolata.jpg";

const LaptePasareCiocolata = () => {
  const productData = {
    title: "Lapte de pasăre (Ciocolată)",
    image: lapte_de_pasare_ciocolata,
    description:
      "Gustul clasic al copilăriei, reinterpretat! Miezul este realizat dintr-o spumă extra fină de albuș și lapte concentrat. Combinația este finisată cu o glazură intensă de ciocolată, creând un echilibru perfect între finețea cremei și bogăția ciocolatei.",
    ingredients: [
      "35% glazură de ciocolată (zahăr, masă de cacao, echivalentul untului de cacao: ulei de palmier, ulei de shea, pudră de cacao, emulsifianți: lecitină din soia, vanilină)",
      "zahăr",
      "unt de cacao",
      "emulsifianți: lecitină din soia, vanilină",
      "masă de cacao",
      "sirop de glucoză",
      "grăsime vegetală (ulei de palmier)",
      "6,0% lapte concentrat cu zahăr",
      "albuș de ouă praf",
      "agent gelatinizant agar",
      "acidifiant acid citric",
      "conservant sorbat de potasiu",
      "alcool etilic",
      "0,06% aromă de vanilină agricolă rectificat",
      "stabilizator invertază",
      "Cacao - 14,0% min",
      "Substanța uscată totală de cacao în masă de ciocolată - 58% min",
    ],
    specs: [
      {
        label: "Posibili Alergeni",
        value: "Poate conține urme de arahide, gluten.",
      },
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default LaptePasareCiocolata;
