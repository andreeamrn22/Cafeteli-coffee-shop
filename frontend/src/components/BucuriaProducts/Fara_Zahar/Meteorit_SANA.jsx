import React from "react";
import AccesorieProductDetails from "../../AccesoriesProducts/AccessorieProductDetails";
import meteorit_sana from "../../../assets/website/produse/dulciuri_bucuria/fara_zahar/meteorit_sana.jpg";

const productData = {
  title: "Râșniță manuală cu roată",
  image: meteorit_sana,
  description:
    "Bomboane din arahide prăjite cu miere de albine acoperite cu o glazură fină de ciocolată, special pentru diabetici.",
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

const Meteorit_SANA = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default Meteorit_SANA;
