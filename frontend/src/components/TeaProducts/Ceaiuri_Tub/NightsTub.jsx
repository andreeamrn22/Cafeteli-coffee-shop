import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import Night_300 from "../../../assets/website/produse/ceaiuri/ceai_tub/1001Night_300.png";

const NightsTub = () => {
  const productData = {
    title: "1001 Nights",
    image: Night_300,
    description:
      "Amestec de ceai negru, ceai verde, plante și fructe, cu aromă de struguri.",
    specs: [
      {
        label: "Ingrediente",
        value:
          "Frunze de ceai negru de Ceylon, frunze de ceai verde chinezesc „Sencha” (12%); boboci și petale de trandafir chinezesc (5%), mere mărunțite (4%), petale de flori (albăstrele, gălbenele, șofrănel) (4%), aromă naturală ”Struguri”.",
      },
      { label: "Cantitate netă", value: "80 g" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default NightsTub;
