import React from "react";
import SimpleTeaDisplay from "../SimpleDetailsDisplay";
import lapte_de_pasare_capsiuni from "../../../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare_capsiuni.jpg";

const LaptePasareCapsiuni = () => {
  const productData = {
    title: "Lapte de pasăre (Căpșuni)",
    image: lapte_de_pasare_capsiuni,
    description:
      "Ai dat peste deliciul absolut! Crema extra-fină din albuș bătut este infuzată cu aromă intensă de căpșuni și învelită în ciocolată. Un desert ușor, spumos și plin de savoare.",
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default LaptePasareCapsiuni;
