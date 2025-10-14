import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import lapte_topit from "../../../assets/website/produse/dulciuri_bucuria/biscuiti/lapte_topit.png";

const LapteTopit = () => {
  const productData = {
    title: "Biscuiți Lapte topit",
    image: lapte_topit,
    description:
      "Un gust distinctiv și ușor de recunoscut: biscuiții Lapte Topit sunt zaharoși și au o aromă fină de lapte. O gustare simplă, mereu la îndemână, care îți aduce un strop de nostalgie la fiecare mușcătură.",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default LapteTopit;
