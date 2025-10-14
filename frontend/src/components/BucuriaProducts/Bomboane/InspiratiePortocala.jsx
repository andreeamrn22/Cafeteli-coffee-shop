import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import inspiratie_portocala from "../../../assets/website/produse/dulciuri_bucuria/bomboane/inspiratie_portocala.jpg";

const InspiratiePortocala = () => {
  const productData = {
    title: "Inspirație Portocală",
    image: inspiratie_portocala,
    description:
      "O inimă moale și suculentă de jeleu de portocale este învelită într-o glazură de ciocolată neagră. O alegere excepțională, ideală pentru a te delecta cu o aromă proaspătă și reconfortantă.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default InspiratiePortocala;
