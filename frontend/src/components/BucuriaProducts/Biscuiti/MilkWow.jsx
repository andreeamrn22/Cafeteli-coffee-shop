import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import milk_wow from "../../../assets/website/produse/dulciuri_bucuria/biscuiti/milk_wow.png";

const MilkWow = () => {
  const productData = {
    title: "Biscuiți Milk Wow",
    image: milk_wow,
    description:
      "Pregătește-te pentru o experiență 'Wow'! Acești biscuiți zaharoși se remarcă prin gustul intens și bogat de lapte. Crocanți și dulci, sunt gustarea perfectă pentru a-ți reîncărca bateriile în pauza mare sau oricând ai nevoie de un impuls de energie.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default MilkWow;
