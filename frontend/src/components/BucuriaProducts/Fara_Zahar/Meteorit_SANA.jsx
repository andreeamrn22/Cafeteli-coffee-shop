import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import meteorit_sana from "../../../assets/website/produse/dulciuri_bucuria/fara_zahar/meteorit_sana.jpg";

const Meteorit_SANA = () => {
  const productData = {
    title: "Bomboane Meteorit SANA",
    image: meteorit_sana,
    description:
      "Bomboane din arahide prăjite cu miere de albine acoperite cu o glazură fină de ciocolată, special pentru diabetici.",
    ingredients: [
      "Miez: Arahide prăjite",
      "Îndulcitor: Miere de albine pură (fără zahăr adăugat)",
      "Înveliș: Glazură subțire de ciocolată",
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default Meteorit_SANA;
