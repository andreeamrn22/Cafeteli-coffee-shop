import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import visina_in_cioclata from "../../../assets/website/produse/dulciuri_bucuria/bomboane/visina_in_ciocolata.jpg";

const VisinaCiocolata = () => {
  const productData = {
    title: "Vișină în ciocolată",
    image: visina_in_cioclata,
    description:
      "Un clasic irezistibil! Fiecare bomboană este o mică sferă de extravaganță care ascunde o vișină naturală alcoolizată într-un miez de zahăr fondant cremos. Întregul ansamblu este acoperit de o mantie elegantă de ciocolată lucioasă. Combinația perfectă de acrișor, dulce și alcoolizat.",
    ingredients: [
      "glazură de ciocolată (zahăr, masă de cacao, echivalent al untului de cacao, cacao, vanilie)",
      "praf de cacao",
      "emulsificatori",
      "alcool rectificat din materie primă alimentară",
      "zahăr",
      "sirop de glucoză",
      "soluție de alcool și zahăr din vișină",
      "acid citric",
      "cacao 12,0% min",
    ],
    specs: [
      {
        label: "Avertismente",
        value:
          "Vișina conține sâmbure. Poate conține urme de lapte, arahide, fructe cu coajă lemnoasă, semințe de susan, gluten, ouă.",
      },
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default VisinaCiocolata;
