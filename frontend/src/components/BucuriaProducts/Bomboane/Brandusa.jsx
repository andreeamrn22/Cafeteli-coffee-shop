import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import brandusa from "../../../assets/website/produse/dulciuri_bucuria/bomboane/brandusa.png";

const Brandusa = () => {
  const productData = {
    title: "Brândușa",
    image: brandusa,
    description:
      "O pralină delicată în formă de cupolă! Bomboanele Brândușa ascund o umplutură bogată din cremă fină de arahide prăjite și ciocolată. Exteriorul este glazurat și presărat cu bucățele crocante de napolitană fărâmițată, oferind o textură surprinzătoare și irezistibilă.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default Brandusa;
