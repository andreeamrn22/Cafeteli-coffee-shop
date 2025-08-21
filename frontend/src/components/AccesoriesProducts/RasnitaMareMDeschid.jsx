import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import rasnita_mare_maro_deschis from "../../assets/website/produse/accesorii/rasnita_manuala_mare_maro_deschis/rasnita_MARE_manuala_maro_deschis.png";
import rasnita_mare_maro_deschis1 from "../../assets/website/produse/accesorii/rasnita_manuala_mare_maro_deschis/rasnita_MARE_manuala_maro_deschis1.png";
import rasnita_mare_maro_deschis2 from "../../assets/website/produse/accesorii/rasnita_manuala_mare_maro_deschis/rasnita_MARE_manuala_maro_deschis2.png";
import rasnita_mare_maro_deschis3 from "../../assets/website/produse/accesorii/rasnita_manuala_mare_maro_deschis/rasnita_MARE_manuala_maro_deschis3.png";
import rasnita_mare_maro_deschis4 from "../../assets/website/produse/accesorii/rasnita_manuala_mare_maro_deschis/rasnita_MARE_manuala_maro_deschis4.png";
import rasnita_mare_maro_deschis5 from "../../assets/website/produse/accesorii/rasnita_manuala_mare_maro_deschis/rasnita_MARE_manuala_maro_deschis5.png";

const productData = {
  title: "Râșniță manuală",
  images: [
    rasnita_mare_maro_deschis,
    rasnita_mare_maro_deschis1,
    rasnita_mare_maro_deschis2,
    rasnita_mare_maro_deschis3,
    rasnita_mare_maro_deschis4,
    rasnita_mare_maro_deschis5,
  ],
  description:
    "O râșniță manuală cu un design clasic și robust, perfectă pentru a măcina boabele de cafea proaspăt, direct la tine acasă. Construcția din lemn și metal oferă durabilitate, în timp ce mânerul ergonomic asigură o măcinare ușoară și eficientă. Cu o capacitate mai mare și un sertar practic pentru cafeaua măcinată, această râșniță este ideală pentru pasionații de cafea care doresc o experiență tradițională, dar cu un volum mai generos.",
  specs: [
    { label: "Tip produs", value: "Râșniță manuală" },
    { label: "Material", value: "Lemn de esență tare și metal" },
    { label: "Culoare", value: "Maro deschis" },
    { label: "Utilizare", value: "Pentru măcinat boabe de cafea" },
    {
      label: "Caracteristici",
      value: "Sertar integrat pentru cafeaua măcinată",
    },
  ],
};

const RasnitaMareMDeschid = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default RasnitaMareMDeschid;
