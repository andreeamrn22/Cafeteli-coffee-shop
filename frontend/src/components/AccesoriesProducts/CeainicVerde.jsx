import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import ceainic_verde0 from "../../assets/website/produse/accesorii/ceainic_verde/ceainic0.png";
import ceainic_verde1 from "../../assets/website/produse/accesorii/ceainic_verde/ceainic1.png";
import ceainic_verde2 from "../../assets/website/produse/accesorii/ceainic_verde/ceainic2.png";
import ceainic_verde3 from "../../assets/website/produse/accesorii/ceainic_verde/ceainic3.png";
import ceainic_verde4 from "../../assets/website/produse/accesorii/ceainic_verde/ceainic4.png";

const productData = {
  title: "Ceainic din fontă, model Suna",
  images: [
    ceainic_verde0,
    ceainic_verde1,
    ceainic_verde2,
    ceainic_verde3,
    ceainic_verde4,
  ],
  description:
    "Un ceainic elegant și durabil din fontă, perfect pentru a-ți savura ceaiul într-un mod tradițional. Fonta reține căldura pentru o perioadă îndelungată, menținând ceaiul la temperatura optimă. Modelul cu flori de lotus în relief adaugă o notă de rafinament și unicitate.",
  specs: [
    { label: "Material", value: "Fontă" },
    { label: "Volum", value: "1.2L" },
    { label: "Culoare", value: "Verde cu detalii aurii" },
    {
      label: "Caracteristici",
      value: "Menține temperatura ceaiului mai mult timp",
    },
  ],
  instructions: [
    {
      title: "Instrucțiuni de folosire",
      details: [
        {
          label: "1. Pregătirea",
          value:
            "Clătește ceainicul cu apă fierbinte înainte de prima utilizare.",
        },
        {
          label: "2. Adăugarea ceaiului",
          value:
            "Pune frunzele de ceai în infuzorul metalic și adaugă apă fierbinte.",
        },
        {
          label: "3. Infuzia",
          value:
            "Lasă ceaiul la infuzat pentru câteva minute, în funcție de preferințe.",
        },
        {
          label: "4. Servirea",
          value: "Toarnă ceaiul în ceașcă și savurează.",
        },
      ],
    },
    {
      title: "Întreținere",
      details: [
        {
          value:
            "După fiecare utilizare, clătește ceainicul cu apă caldă și lasă-l să se usuce complet pentru a preveni rugina.",
        },
        {
          value: "Nu folosi detergenți. Nu îl spăla la mașina de spălat vase.",
        },
        {
          value:
            "Pentru a preveni petele, evită să lași ceaiul în ceainic pentru perioade lungi de timp.",
        },
      ],
    },
  ],
};

const CeainicVerde = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default CeainicVerde;
