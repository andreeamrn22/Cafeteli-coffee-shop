import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import CAFEA_AVEDIS from "../../assets/website/produse/cafea_blend/CAFEA_AVEDIS.png";
import CAFEA_CU_AROMA_DE_CIOCOLATA from "../../assets/website/produse/cafea_blend/CAFEA_CU_AROMA_DE_CIOCOLATA.png";
import CAFEA_CU_AROMA_DE_IRISH_COFFEE from "../../assets/website/produse/cafea_blend/CAFEA_CU_AROMA_DE_IRISH_COFFEE.png";
import CAFEA_CU_AROMA_DE_IUBIRE from "../../assets/website/produse/cafea_blend/CAFEA_CU_AROMA_DE_IUBIRE.png";
import CAFEA_CU_AROMA_DE_VANILIE from "../../assets/website/produse/cafea_blend/CAFEA_CU_AROMA_DE_VANILIE.png";
import CAFEA_CU_SCORTISOARA from "../../assets/website/produse/cafea_blend/CAFEA_CU_SCORTISOARA.png";
import CAFEAUA_BUNICII_100_ARABICA from "../../assets/website/produse/cafea_blend/CAFEAUA_BUNICII_100_ARABICA.png";
import DEGUSTO_SUPREMA from "../../assets/website/produse/cafea_blend/DEGUSTO_SUPREMA.png";
import MISCELA_ARABICA from "../../assets/website/produse/cafea_blend/MISCELA_ARABICA.png";
import MISCELA_CARAIBICA from "../../assets/website/produse/cafea_blend/MISCELA_CARAIBICA.png";
import MISCELA_CEA_MAI_BUNA_CAFEA from "../../assets/website/produse/cafea_blend/MISCELA_CEA_MAI_BUNA_CAFEA.png";
import MISCELA_DECOFEINIZATA from "../../assets/website/produse/cafea_blend/MISCELA_DECOFEINIZATA.png";
import MISCELA_ITALIANA from "../../assets/website/produse/cafea_blend/MISCELA_ITALIANA.png";

const products = [
  {
    image: CAFEA_AVEDIS,
    name: "CAFEA AVEDIS",
    href: "/produse/cafea/blend/cafea_avedis",
  },
  {
    image: CAFEA_CU_AROMA_DE_CIOCOLATA,
    name: "CAFEA CU AROMĂ DE CIOCOLATĂ",
    href: "/produse/cafea/blend/cafea_cu_aroma_de_ciocolata",
  },
  {
    image: CAFEA_CU_AROMA_DE_IRISH_COFFEE,
    name: "CAFEA CU AROMĂ DE IRISH COFFEE",
    href: "/produse/cafea/blend/cafea_cu_aroma_de_irish_coffee",
  },
  {
    image: CAFEA_CU_AROMA_DE_IUBIRE,
    name: "CAFEA CU AROMĂ DE IUBIRE",
    href: "/produse/cafea/blend/cafea_cu_aroma_de_iubire",
  },
  {
    image: CAFEA_CU_AROMA_DE_VANILIE,
    name: "CAFEA CU AROMĂ DE VANILIE",
    href: "/produse/cafea/blend/cafea_cu_aroma_de_vanilie",
  },
  {
    image: CAFEA_CU_SCORTISOARA,
    name: "CAFEA CU SCORȚIȘOARĂ",
    href: "/produse/cafea/blend/cafea_cu_scortisoara",
  },
  {
    image: CAFEAUA_BUNICII_100_ARABICA,
    name: "CAFEAUA BUNICII 100% ARABICA",
    href: "/produse/cafea/blend/cafeaua_bunicii_100_arabica",
  },
  {
    image: DEGUSTO_SUPREMA,
    name: "DEGUSTO SUPREMA",
    href: "/produse/cafea/blend/degusto_suprema",
  },
  {
    image: MISCELA_ARABICA,
    name: "MISCELA ARABICA",
    href: "/produse/cafea/blend/miscela_arabica",
  },
  {
    image: MISCELA_CARAIBICA,
    name: "MISCELA CARAIBICA",
    href: "/produse/cafea/blend/miscela_caraibica",
  },
  {
    image: MISCELA_CEA_MAI_BUNA_CAFEA,
    name: "MISCELA CEA MAI BUNA CAFEA",
    href: "/produse/cafea/blend/miscela_cea_mai_buna_cafea",
  },
  {
    image: MISCELA_DECOFEINIZATA,
    name: "MISCELA DECOFEINIZATĂ",
    href: "/produse/cafea/blend/miscela_decofeinizata",
  },
  {
    image: MISCELA_ITALIANA,
    name: "MISCELA ITALIANA",
    href: "/produse/cafea/blend/miscela_italiana",
  },
];

const BlendCoffeePage = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const productCount = products.length;

  return (
    <div className="py-10 font-serif">
      <div className="mx-auto px-8 md:px-20 lg:px-16 xl:px-40">
        <div className="mb-10 text-xl md:text-3xl ">
          Afișate toate cele {productCount} de rezultate
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.a
              key={index}
              href={product.href}
              className="group bg-white rounded-lg shadow-lg hover:shadow-2xl hover:border-black border-2 border-transparent transition-shadow duration-300 relative flex flex-col items-center p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />

              <div className="text-center w-full">
                <h2 className="text-2xl font-bold mb-2 mt-5">{product.name}</h2>
                {/* More info section */}
                <div className="flex items-bottom justify-center text-black opacity-0 group-hover:opacity-100 group-hover:text-black transition-all duration-300">
                  <p className="text-sm font-semibold">
                    VEZI MAI MULTE DETALII
                  </p>
                  <FaArrowRightLong className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <div className="pt-10">
        <div className="border-b-2 border-primary/50 w-56 md:w-64 mx-auto mb-2"></div>
        <h1 className="text-primary/50 text-lg md:text-xl text-center font-serif">
          AI AJUNS LA FUNDUL BORCANULUI
        </h1>
        <div className="border-b-2 border-primary/50 w-56 md:w-64 mx-auto mt-2"></div>
      </div>
    </div>
  );
};

export default BlendCoffeePage;
