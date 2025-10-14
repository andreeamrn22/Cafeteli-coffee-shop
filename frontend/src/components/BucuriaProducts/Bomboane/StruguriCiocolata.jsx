import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import struguri_in_cioclata from "../../../assets/website/produse/dulciuri_bucuria/bomboane/struguri_in_ciocolata.jpg";

const StruguriCiocolata = () => {
  const productData = {
    title: "Struguri în ciocolată",
    image: struguri_in_cioclata,
    description:
      "Descoperă secretul ascuns sub glazura de ciocolată neagră! O bobiță de strugure alcoolizată se camuflează perfect în fondantul de zahăr cremos. O bomboană sofisticată, cu o notă de lichior, ideală pentru a încheia o seară specială.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default StruguriCiocolata;
