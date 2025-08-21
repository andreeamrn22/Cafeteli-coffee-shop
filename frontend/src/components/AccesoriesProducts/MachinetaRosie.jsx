import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import machineta_rosie from "../../assets/website/produse/accesorii/machineta_rosie/machineta_rosie.png";
import machineta_rosie1 from "../../assets/website/produse/accesorii/machineta_rosie/machineta_rosie1.png";
import machineta_rosie2 from "../../assets/website/produse/accesorii/machineta_rosie/machineta_rosie2.png";
import machineta_rosie3 from "../../assets/website/produse/accesorii/machineta_rosie/machineta_rosie4.png";
import machineta_rosie4 from "../../assets/website/produse/accesorii/machineta_rosie/machineta_rosie5.png";
import machineta_rosie5 from "../../assets/website/produse/accesorii/machineta_rosie/machineta_rosie6.png";
import machineta_rosie6 from "../../assets/website/produse/accesorii/machineta_rosie/machineta_rosie8.png";

const productData = {
  title: "Machinetă roșie de cafea",
  images: [
    machineta_rosie,
    machineta_rosie1,
    machineta_rosie2,
    machineta_rosie3,
    machineta_rosie4,
    machineta_rosie5,
    machineta_rosie6,
  ],
  description:
    "Prepară o cafea intensă și savuroasă cu această machinetă elegantă, de culoare roșu aprins. Fabricată din materiale de înaltă calitate, care asigură o extracție uniformă, această machinetă este ideală pentru a obține o cafea plină de aromă. Designul său atemporal și culoarea vibrantă o transformă într-un accesoriu deosebit pentru orice bucătărie.",
  specs: [
    { label: "Tip produs", value: "Machinetă de cafea (Moka Pot)" },
    { label: "Material", value: "Aluminiu" },
    { label: "Volum", value: "350 ml (aprox. 4 cești)" },
    { label: "Culoare", value: "Roșu" },
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

const MachinetaRosie = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default MachinetaRosie;
