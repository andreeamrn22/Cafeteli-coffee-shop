import React from "react";
import SimpleDetailsDisplay from "../SimpleDetailsDisplay";
import duet from "../../../assets/website/produse/dulciuri_bucuria/bomboane/duet.jpg";

const Duet = () => {
  const productData = {
    title: "Duet",
    image: duet,
    description:
      "Un Duet perfect pentru simțuri! Aceste bomboane combină armonios un strat pufos de sufleu din albuș bătut cu cacao și un strat cremos de fondant cu cacao. Întregul ansamblu este învelit într-un strat generos de ciocolată cu lapte. O combinație care execută o simfonie de arome!",
  };

  return <SimpleDetailsDisplay productData={productData} />;
};

export default Duet;
