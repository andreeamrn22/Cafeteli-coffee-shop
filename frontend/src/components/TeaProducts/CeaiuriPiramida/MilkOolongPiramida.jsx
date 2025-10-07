import React from "react";
import SimpleTeaDisplay from "../SimpleTeaDisplay";
import MilkOolong from "../../../assets/website/produse/ceaiuri/ceai_piramida/MilkOolong.png";

const MilkOolongPiramida = () => {
  const productData = {
    title: "Milk Oolong",
    image: MilkOolong,
    description: "Ceai oolong cu aromă de lapte.",
    specs: [
      {
        label: "Ingrediente",
        value: "Frunze de ceai chinezesc ”Oolong”, aromă naturală “Lapte”. ",
      },
      { label: "Cantitate netă", value: "15 bucăți" },
    ],
  };

  return <SimpleTeaDisplay productData={productData} />;
};

export default MilkOolongPiramida;
