import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import machineta_moo from "../../assets/website/produse/accesorii/machineta_moo/machineta_moo.png";
import machineta_moo1 from "../../assets/website/produse/accesorii/machineta_moo/machineta_moo1.png";
import machineta_moo2 from "../../assets/website/produse/accesorii/machineta_moo/machineta_moo2.png";
import machineta_moo3 from "../../assets/website/produse/accesorii/machineta_moo/machineta_moo4.png";
import machineta_moo4 from "../../assets/website/produse/accesorii/machineta_moo/machineta_moo5.png";
import machineta_moo5 from "../../assets/website/produse/accesorii/machineta_moo/machineta_moo6.png";

const productData = {
  title: "Machinetă cu model 'Vacuță'",
  images: [
    machineta_moo,
    machineta_moo1,
    machineta_moo2,
    machineta_moo3,
    machineta_moo4,
    machineta_moo5,
  ],
  description:
    "Prepară-ți cafeaua cu stil, cu această machinetă unică cu model 'vacuță'. Este fabricată din materiale de înaltă calitate, care asigură o distribuție uniformă a căldurii pentru o extracție perfectă a aromei cafelei. Designul modern și jucăuș o transformă într-un accesoriu central în bucătărie, perfect pentru a-ți începe ziua cu un zâmbet. Robustă și ușor de utilizat, această machinetă este un must-have pentru toți iubitorii de cafea.",
  specs: [
    { label: "Tip produs", value: "Machinetă de cafea (Moka Pot)" },
    { label: "Material", value: "Aluminiu" }, // S-ar putea să fie aluminiu, nu fontă, verifică materialul real
    { label: "Volum", value: "250 ml (aprox. 3 cești)" }, // 1.2L este un volum neobișnuit pentru o machinetă, poți schimba cu 250ml-500ml în funcție de mărime
    { label: "Culoare", value: "Alb cu pete negre (model 'vacuță')" },
  ],
  instructions: [
    {
      title: "Instrucțiuni de utilizare",
      details: [
        {
          label: "1. Umplere",
          value:
            "Adaugă apă rece în compartimentul inferior, până la nivelul valvei de siguranță.",
        },
        {
          label: "2. Adaugă cafeaua",
          value: "Pune cafea măcinată mediu în sita metalică, fără a o presa.",
        },
        {
          label: "3. Asamblare",
          value:
            "Înșurubează bine cele două părți ale machinetei și pune-o pe aragaz la foc mic sau mediu.",
        },
        {
          label: "4. Savurează",
          value:
            "Oprește focul când auzi sunetul specific de fierbere. Toarnă cafeaua și savurează!",
        },
      ],
    },
    {
      title: "Întreținere",
      details: [
        {
          value:
            "Spală manual machinetă după fiecare utilizare cu apă caldă, fără a folosi detergent. Las-o să se usuce complet înainte de a o depozita.",
        },
      ],
    },
  ],
};

const MachinetaMoo = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default MachinetaMoo;
