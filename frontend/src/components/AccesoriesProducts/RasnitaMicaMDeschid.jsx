import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import rasnita_MICA_maro_deschis from "../../assets/website/produse/accesorii/rasnita_manuala_mica_maro_deschis/rasnita_MICA_manuala_maro_deschis.png";
import rasnita_MICA_maro_deschis1 from "../../assets/website/produse/accesorii/rasnita_manuala_mica_maro_deschis/rasnita_MICA_manuala_maro_deschis1.png";
import rasnita_MICA_maro_deschis2 from "../../assets/website/produse/accesorii/rasnita_manuala_mica_maro_deschis/rasnita_MICA_manuala_maro_deschis2.png";
import rasnita_MICA_maro_deschis3 from "../../assets/website/produse/accesorii/rasnita_manuala_mica_maro_deschis/rasnita_MICA_manuala_maro_deschis3.png";
import rasnita_MICA_maro_deschis4 from "../../assets/website/produse/accesorii/rasnita_manuala_mica_maro_deschis/rasnita_MICA_manuala_maro_deschis4.png";
import rasnita_MICA_maro_deschis5 from "../../assets/website/produse/accesorii/rasnita_manuala_mica_maro_deschis/rasnita_MICA_manuala_maro_deschis5.png";

const productData = {
  title: "Râșniță manuală",
  images: [
    rasnita_MICA_maro_deschis,
    rasnita_MICA_maro_deschis1,
    rasnita_MICA_maro_deschis2,
    rasnita_MICA_maro_deschis3,
    rasnita_MICA_maro_deschis4,
    rasnita_MICA_maro_deschis5,
  ],
  description:
    "O râșniță manuală tradițională pentru o experiență autentică a cafelei. Realizată din lemn de calitate, cu un design clasic și un sistem de măcinare eficient, este perfectă pentru a-ți măcina boabele de cafea proaspăt, oriunde te-ai afla.",
  specs: [
    { label: "Tip produs", value: "Râșniță manuală" },
    { label: "Material corp", value: "Lemn și metal" },
    { label: "Material mecanism", value: "Metal" },
    { label: "Culoare", value: "Maro deschis" },
    { label: "Utilizare", value: "Pentru măcinat boabe de cafea" },
    {
      label: "Caracteristici",
      value: "Design retro cu sertar pentru cafea măcinată",
    },
  ],
};

const RasnitaMicaMDeschid = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default RasnitaMicaMDeschid;
