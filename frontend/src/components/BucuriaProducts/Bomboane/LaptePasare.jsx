import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import lapte_de_pasare from "../../../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare.jpg";

const LaptePasare = () => {
  const productData = {
    title: "Lapte de pasăre",
    image: lapte_de_pasare,
    description:
      "Transformăm basmul în realitate cu aceste bomboane rafinate! Miezul delicat, bazat pe albuș bătut și lapte concentrat, oferă un gust fin de frișcă. Toată această perfecțiune aerată este glasată cu ciocolată. Un desert care încântă prin simplitate și finețe.",
    ingredients: [
      "glazură de ciocolată 35% (zahăr, masă de cacao, echivalentul untului de cacao: ulei de palmier, ulei de shea, pudră de cacao, emulsifianți: lecitină din soia, vanilină)",
      "zahăr",
      "grăsime vegetală (ulei de palmier)",
      "sirop de glucoză",
      "8,0% lapte concentrat cu zahăr",
      "albuș de ouă praf",
      "agent gelatinizant agar",
      "acidifiant acid citric",
      "conservant: sorbat de potasiu",
      "stabilizator invertază",
      "aromă 'vanilie-friscă'",
      "cacao în glazură de ciocolată - 35,0% min.",
    ],
    specs: [
      {
        label: "Avertisment",
        value: "Poate conține urme de arahide, gluten.",
      },
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default LaptePasare;
