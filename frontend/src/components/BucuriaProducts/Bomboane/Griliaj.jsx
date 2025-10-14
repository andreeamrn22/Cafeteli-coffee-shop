import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import griliaj from "../../../assets/website/produse/dulciuri_bucuria/bomboane/griliaj.jpg";

const Griliaj = () => {
  const productData = {
    title: "Griliaj în ciocolată",
    image: griliaj,
    description:
      "Deliciul clasic al arahidelor prăjite, amestecate cu zahăr caramelizat și învelite în glazură fină de ciocolată. Aceste bomboane Griliaj sunt super-crocante și incredibil de satisfăcătoare. Odată ce ai gustat, este greu să te oprești! Perfecte pentru toți pofticioșii.",
    ingredients: [
      "zahăr",
      "27% glazură de ciocolată (zahăr, masă de cacao, echivalent al untului de cacao (ulei de palmier, ulei de shea), pudră de cacao, emulsifianți: lecitina din soia, E476; vanilină)",
      "24,2% arahide",
      "grăsime vegetală (ulei de palmier)",
      "vanilină",
    ],
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default Griliaj;
