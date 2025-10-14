import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import lapte_de_pasare_lamaie from "../../../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare_lamaie.jpg";

const LaptePasareLamaie = () => {
  const productData = {
    title: "Lapte de pasăre (Lămâie)",
    image: lapte_de_pasare_lamaie,
    description:
      "O interpretare dulce și luminoasă a clasicului! Miezul este o cremă extra fină din albuș și lapte, cu o aromă proaspătă și distinctivă de lămâie. Învelite în ciocolată, aceste bomboane sunt perfecte pentru a te bucura de un gust ușor și revigorant.",
    ingredients: [
      "35% glazură de ciocolată (zahăr, masă de cacao, echivalentul untului de cacao (ulei de palmier, ulei de shea), pudră de cacao, emulsifianți: lecitină din soia, vanilină)",
      "zahăr",
      "grăsime vegetală (ulei de palmier, ulei de soia)",
      "pudră de cacao",
      "albuș de ou",
      "agar",
      "agent gelatinizant agar",
      "acidifiant acid citric",
      "conservant sorbat de potasiu",
      "colorant de lămâie - 0,1%",
      "stabilizator invertază",
      "colorant",
      "ulei de lămâie",
      "Cacao în glazură de ciocolată - 35,0% min.",
    ],
    specs: [
      {
        label: "Posibili Alergeni",
        value: "Poate conține urme de arahide, gluten",
      },
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default LaptePasareLamaie;
