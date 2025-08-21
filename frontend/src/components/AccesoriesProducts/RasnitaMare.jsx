import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import rasnita_mare from "../../assets/website/produse/accesorii/rasnita_manuala_mare/rasnita_MARE0.png";
import rasnita_mare2 from "../../assets/website/produse/accesorii/rasnita_manuala_mare/rasnita_MARE2.png";
import rasnita_mare3 from "../../assets/website/produse/accesorii/rasnita_manuala_mare/rasnita_MARE3.png";
import rasnita_mar4 from "../../assets/website/produse/accesorii/rasnita_manuala_mare/rasnita_MARE4.png";
import rasnita_mare5 from "../../assets/website/produse/accesorii/rasnita_manuala_mare/rasnita_MARE5.png";

const productData = {
  title: "Râșniță manuală cu roată",
  images: [
    rasnita_mare,
    rasnita_mare2,
    rasnita_mare3,
    rasnita_mar4,
    rasnita_mare5,
  ],
  description:
    "O râșniță manuală cu un design inedit și o roată de măcinare, ideală pentru pasionații de cafea care apreciază un stil vintage și o funcționalitate robustă. Construcția sa solidă, din lemn și fontă, garantează durabilitate și o măcinare precisă. Roata laterală face procesul de măcinare mai simplu și mai eficient, oferind control total asupra texturii cafelei măcinate. Un accesoriu perfect pentru a adăuga un plus de farmec ritualului tău zilnic de cafea.",
  specs: [
    { label: "Tip produs", value: "Râșniță manuală" },
    { label: "Material", value: "Lemn și fontă" },
    { label: "Mecanism", value: "Roată de măcinare laterală" },
    { label: "Culoare", value: "Maro închis" },
    { label: "Utilizare", value: "Pentru măcinat boabe de cafea" },
    {
      label: "Caracteristici",
      value: "Sertar integrat pentru cafeaua măcinată",
    },
  ],
};

const RasnitaMare = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default RasnitaMare;
