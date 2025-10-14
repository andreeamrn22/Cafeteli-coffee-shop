import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import lapte_de_pasare_banane from "../../../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare_banane.jpg";

const LaptePasareBanane = () => {
  const productData = {
    title: "Lapte de pasăre (Banane)",
    image: lapte_de_pasare_banane,
    description:
      "Bucură-te de miezul extra fin, aerat și cremos, infuzat cu gustul dulce al bananelor. Glazura de ciocolată completează perfect acest desert ușor și surprinzător.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default LaptePasareBanane;
