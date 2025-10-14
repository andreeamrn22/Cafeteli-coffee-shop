import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import inspiratie_caisa from "../../../assets/website/produse/dulciuri_bucuria/bomboane/inspiratie_caisa.jpg";

const InspiratieCaisa = () => {
  const productData = {
    title: "Inspirație Caisă",
    image: inspiratie_caisa,
    description:
      "O adevărată capodoperă a gustului! Aceste bomboane oferă combinația rafinată de dulce și acrișor prin jeleul lor intens de caise. Învelite într-un strat generos de ciocolată neagră pură, ele creează un echilibru gustativ perfect, completat de o aromă fructată vibrantă.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default InspiratieCaisa;
