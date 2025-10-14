import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import tarancuta from "../../../assets/website/produse/dulciuri_bucuria/biscuiti/tarancuta1.png";

const Tarancuta = () => {
  const productData = {
    title: "Biscuiți Țărăncuța",
    image: tarancuta,
    description:
      "Biscuiți dreptunghiulari clasici, inspirați din rețeta tradițională moldovenească. Cu o textură crocantă și un gust echilibrat de lapte și făină de grâu, acești biscuiți sunt alegerea ideală pentru un mic dejun rapid sau o pauză dulce reconfortantă.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default Tarancuta;
