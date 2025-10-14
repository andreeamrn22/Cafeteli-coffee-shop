import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import inspiratie_lamaie from "../../../assets/website/produse/dulciuri_bucuria/bomboane/inspiratie_lamaie.jpg";

const InspiratieLamaie = () => {
  const productData = {
    title: "Inspirație Lămâie",
    image: inspiratie_lamaie,
    description:
      "O fuziune îndrăzneață de arome! Aceste bomboane îmbină dulceața bogată a ciocolatei cu o surpriză răcoritoare de jeleu acidulat de lămâie. Jeleul vibrant, cu arome citrice intense, contrastează perfect cu învelișul fin. O experiență multisenzorială unică.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default InspiratieLamaie;
