import React from "react";
import AccesorieProductDetails from "../AccesoriesProducts/AccessorieProductDetails";
import cana_cupru from "../../assets/website/produse/accesorii/cana_cupru/cana.png";
import cana_cupru_1 from "../../assets/website/produse/accesorii/cana_cupru/cana1.png";
import cana_cupru_2 from "../../assets/website/produse/accesorii/cana_cupru/cana2.png";
import cana_cupru_3 from "../../assets/website/produse/accesorii/cana_cupru/cana3.png";

const productData = {
  title: "Cană din cupru",
  images: [cana_cupru, cana_cupru_1, cana_cupru_2, cana_cupru_3],
  description: "Cană din cupru este executat din cupru alimentar 99,97%.",
  instructions: [
    {
      title: "Instrucțiuni de întreținere",
      details: [
        {
          label: "Prima variantă",
          value:
            "Doar cu ajutorul a 200-300 ml de oțet și puțină sare măruntă de bucatarie, de preferabil iodată. Cum se procedează? Se toarnă oțet pe cană, apoi se pune sare până când se acoperă stratul de oțet, se toarnă din nou oțet până când se acoperă stratul de sare și se lasă 10-20 secunde. Apoi se pune oțet pe un burete de bucatarie și se freaca produsul pana revine la strălucirea inițială.",
        },
        {
          label: "A doua variantă",
          value:
            "Tăiați o lămâie în două jumătăți, înmuiați jumătatea de lămâie în sare fină și frecați ușor suprafața cănii. Clătiți cu apă călduță, apoi uscați cu o cârpă uscată.",
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

const CanaCupru = () => {
  return (
    <div>
      <AccesorieProductDetails
        productData={productData}
        productType="accessories"
      />
    </div>
  );
};

export default CanaCupru;
