import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import dulcineea from "../../../assets/website/produse/dulciuri_bucuria/bomboane/dulcineea.jpg";

const Dulcineea = () => {
  const productData = {
    title: "Fondante Dulcineea",
    image: dulcineea,
    description:
      "O creație sofisticată, destinată iubitorilor de dulciuri fine. Aceste bomboane neglasate se remarcă prin textura catifelată a fondantului clasic și o notă subtilă de brandy. Crema fină de frișcă completează perfect gustul, oferind o experiență rafinată și distinctă.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default Dulcineea;
