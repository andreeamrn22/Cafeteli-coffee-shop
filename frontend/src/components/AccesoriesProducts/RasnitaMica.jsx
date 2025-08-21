import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import rasnita_mica from "../../assets/website/produse/accesorii/rasnita_manuala_mica/rasnita_manuala_maro.png";
import rasnita_mica1 from "../../assets/website/produse/accesorii/rasnita_manuala_mica/rasnita_manuala_maro1.png";
import rasnita_mica2 from "../../assets/website/produse/accesorii/rasnita_manuala_mica/rasnita_manuala_maro2.png";
import rasnita_mica3 from "../../assets/website/produse/accesorii/rasnita_manuala_mica/rasnita_manuala_maro3.png";
import rasnita_mar4 from "../../assets/website/produse/accesorii/rasnita_manuala_mica/rasnita_manuala_maro4.png";
import rasnita_mica5 from "../../assets/website/produse/accesorii/rasnita_manuala_mica/rasnita_manuala_maro5.png";

const productData = {
  title: "Râșniță manuală",
  images: [
    rasnita_mica,
    rasnita_mica1,
    rasnita_mica2,
    rasnita_mica3,
    rasnita_mar4,
    rasnita_mica5,
  ],
  description:
    "O râșniță manuală compactă și elegantă, perfectă pentru a măcina boabele de cafea proaspăt, oriunde te-ai afla. Designul său clasic, cu bază din lemn și mecanism metalic, aduce un plus de stil în orice bucătărie. Este ideală pentru prepararea unei singure cești de cafea, oferind o măcinare uniformă și precisă pentru a scoate în evidență aromele boabelor tale preferate.",
  specs: [
    { label: "Tip produs", value: "Râșniță manuală" },
    { label: "Material corp", value: "Lemn de esență tare și metal" },
    { label: "Culoare", value: "Maro închis" },
    { label: "Utilizare", value: "Pentru măcinat boabe de cafea" },
    {
      label: "Caracteristici",
      value: "Sertar integrat pentru cafeaua măcinată",
    },
  ],
};

const RasnitaMica = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default RasnitaMica;
