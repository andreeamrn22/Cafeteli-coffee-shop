import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import lapte_de_pasare_cocos from "../../../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare_cocos.jpg";

const LaptePasareCocos = () => {
  const productData = {
    title: "Lapte de pasăre (Cocos)",
    image: lapte_de_pasare_cocos,
    description:
      "Textura extra fină, acum cu un gust tropical! Aceste bomboane combină crema extra fină de albuș bătut cu lapte concentrat și o aromă intensă de cocos (nucă de cocos). Miezul moale și pufos este învelit în ciocolată, creând un răsfăț de care nu vei mai scăpa.",
    ingredients: [
      "35% glazură de ciocolată (zahăr, masă de cacao, echivalentul untului de cacao: ulei de palmier, ulei de shea, pudră de cacao, emulsifianți: lecitină din soia, vanilină)",
      "zahăr",
      "grăsime vegetală (ulei de palmier)",
      "sirop de glucoză",
      "6,0% lapte concentrat cu zahăr",
      "albuș de ouă praf",
      "agent gelatinizant agar",
      "acidifiant acid citric",
      "conservant: sorbat de potasiu",
      "aromă 'cocos'",
      "stabilizator invertază",
      "Cacao - 11,0% min.",
    ],
    specs: [
      {
        label: "Posibili Alergeni",
        value: "Poate conține urme de arahide, gluten, dioxid de sulf.",
      },
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default LaptePasareCocos;
