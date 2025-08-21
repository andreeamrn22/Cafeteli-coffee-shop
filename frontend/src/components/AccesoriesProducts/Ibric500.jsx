import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import ibric500 from "../../assets/website/produse/accesorii/ibric_500/ibr_500.png";
import ibric500_1 from "../../assets/website/produse/accesorii/ibric_500/ibr_500_1.png";
import ibric500_2 from "../../assets/website/produse/accesorii/ibric_500/ibr_500_2.png";
import ibric500_3 from "../../assets/website/produse/accesorii/ibric_500/ibr_500_3.png";
import ibric500_4 from "../../assets/website/produse/accesorii/ibric_500/ibr_500_4.png";

const productData = {
  title: "Ibric de cupru (500ml)",
  images: [ibric500, ibric500_1, ibric500_4, ibric500_2, ibric500_3],
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
            "Soluție specială pentru curățarea și lustruirea produselor din cupru. (se găsesc în comerț)",
        },
        {
          label: "A doua variantă",
          value:
            "Tăiați o lămâie în două jumătăți, înmuiați jumătatea de lămâie în sare fină și frecați ușor suprafața ibricului. Clătiți cu apă călduță, apoi uscați cu o cârpă uscată.",
        },
        {
          label: "A treia variantă",
          value:
            "Doar cu ajutorul a 200-300 ml de oțet și puțină sare măruntă de bucatarie, de preferabil iodată. Cum se procedează? Se toarnă oțet pe ibric, apoi se pune sare până când se acoperă stratul de oțet, se toarnă din nou oțet până când se acoperă stratul de sare și se lasă 10-20 secunde. Apoi se pune oțet pe un burete de bucatarie și se freaca produsul pana revine la strălucirea inițială.",
        },
      ],
    },
  ],
};

const Ibric500 = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default Ibric500;
