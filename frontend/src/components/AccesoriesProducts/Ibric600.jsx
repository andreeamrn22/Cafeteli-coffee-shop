import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import ibric600 from "../../assets/website/produse/accesorii/ibric_600/ibr_600.png";
import ibric600_1 from "../../assets/website/produse/accesorii/ibric_600/ibr_600_1.png";
import ibric600_2 from "../../assets/website/produse/accesorii/ibric_600/ibr_600_2.png";
import ibric600_3 from "../../assets/website/produse/accesorii/ibric_600/ibr_600_3.png";

const productData = {
  title: "Ibric de cupru (600ml)",
  images: [ibric600, ibric600_1, ibric600_3, ibric600_2],
  description:
    "Ibricul din cupru pentru cafea este executat din cupru alimentar 99,97%.",
  instructions: [
    {
      title: "Instrucțiuni de folosire",
      details: [
        {
          label: "Pregătire pentru folosire",
          value:
            "Înainte de prima folosire se umple ibricul cu apă și se fierbe la temperatură maximă, după care goliți și clătiți ibricul cu apă.",
        },
        {
          label: "De reținut",
          value:
            "După fiecare folosire a ibricului, se spală, se clatește și se usucă cu o cârpă uscată.",
        },
      ],
    },
    {
      title: "Instrucțiuni de întreținere",
      details: [
        {
          label: "Prima variantă",
          value:
            "Doar cu ajutorul a 200-300 ml de oțet și puțină sare măruntă de bucatarie, de preferabil iodată. Cum se procedează? Se toarnă oțet pe ibric, apoi se pune sare până când se acoperă stratul de oțet, se toarnă din nou oțet până când se acoperă stratul de sare și se lasă 10-20 secunde. Apoi se pune oțet pe un burete de bucatarie și se freaca produsul pana revine la strălucirea inițială.",
        },
        {
          label: "A doua variantă",
          value:
            "Tăiați o lămâie în două jumătăți, înmuiați jumătatea de lămâie în sare fină și frecați ușor suprafața ibricului. Clătiți cu apă călduță, apoi uscați cu o cârpă uscată.",
        },
        {
          label: "A treia variantă",
          value:
            "Soluție specială pentru curățarea și lustruirea produselor din cupru. (se găsesc în comerț)",
        },
      ],
    },
  ],
};

const Ibric600 = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default Ibric600;
