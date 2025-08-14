import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import BRAZILIA_ALTA_MOGIANA_FRANCA from "../../assets/website/produse/cafea_origini/BRAZILIA_ALTA_MOGIANA_FRANCA.png";
import COLUMBIA_SUPREMO from "../../assets/website/produse/cafea_origini/COLUMBIA_SUPREMO.png";
import COSTA_RICA_SAN_RAFAEL_TARRAZU from "../../assets/website/produse/cafea_origini/COSTA_RICA_SAN_RAFAEL_TARRAZU.png";
import EL_SALVADOR_HIMALAYA from "../../assets/website/produse/cafea_origini/EL_SALVADOR_HIMALAYA.png";
import ETHIOPIA_YIRGACHEFFE from "../../assets/website/produse/cafea_origini/ETHIOPIA_YIRGACHEFFE.png";
import GUATEMALA from "../../assets/website/produse/cafea_origini/GUATEMALA.png";
import HONDURAS from "../../assets/website/produse/cafea_origini/HONDURAS.png";
import INDIA_AA_PLANTATION from "../../assets/website/produse/cafea_origini/INDIA_AA_PLANTATION.png";
import INDIA_MALABAR from "../../assets/website/produse/cafea_origini/INDIA_MALABAR.png";
import KENYA_AA_TQ from "../../assets/website/produse/cafea_origini/KENYA_AA_TQ.png";
import KILIMANJARO_MOSHI from "../../assets/website/produse/cafea_origini/KILIMANJARO_MOSHI.png";
import MEXIC_FINCA_MONTE_AZUL from "../../assets/website/produse/cafea_origini/MEXIC_FINCA_MONTE_AZUL.png";
import NICARAGUA_MARAGOGYPE from "../../assets/website/produse/cafea_origini/NICARAGUA_MARAGOGYPE.png";
import NICARAGUA_MATAGALPA from "../../assets/website/produse/cafea_origini/NICARAGUA_MATAGALPA.png";
import PERU_CAJAMARCA from "../../assets/website/produse/cafea_origini/PERU_CAJAMARCA.png";
import SAN_DOMINGO_BARAHONA from "../../assets/website/produse/cafea_origini/SAN_DOMINGO_BARAHONA.png";

const products = [
  {
    image: BRAZILIA_ALTA_MOGIANA_FRANCA,
    name: "BRAZILIA ALTA MOGIANA FRANCA",
    href: "/produse/cafea/origini/brazilia_alta_mogiana_franca",
  },
  {
    image: COLUMBIA_SUPREMO,
    name: "COLUMBIA SUPREMO",
    href: "/produse/cafea/origini/columbia_supremo",
  },
  {
    image: COSTA_RICA_SAN_RAFAEL_TARRAZU,
    name: "COSTA RICA SAN RAFAEL TARRAZU",
    href: "/produse/cafea/origini/costa_rica_san_rafael_tarrazu",
  },
  {
    image: EL_SALVADOR_HIMALAYA,
    name: "EL SALVADOR HIMALAYA",
    href: "/produse/cafea/origini/el_savador_himalaya",
  },
  {
    image: ETHIOPIA_YIRGACHEFFE,
    name: "ETHIOPIA YIRGACHEFFE",
    href: "/produse/cafea/origini/ethiopia_yirgacheffe",
  },
  {
    image: GUATEMALA,
    name: "GUATEMALA SHB",
    href: "/produse/cafea/origini/guatemala",
  },
  {
    image: HONDURAS,
    name: "HONDURAS SHG LA FLOR",
    href: "/produse/cafea/origini/honduras",
  },
  {
    image: INDIA_AA_PLANTATION,
    name: "INDIA AA PLANTATION",
    href: "/produse/cafea/origini/india_aa_plantation",
  },
  {
    image: INDIA_MALABAR,
    name: "INDIA MALABAR",
    href: "/produse/cafea/origini/india_malabar",
  },
  {
    image: KENYA_AA_TQ,
    name: "KENYA AA TQ",
    href: "/produse/cafea/origini/kenya_aa_tq",
  },
  {
    image: KILIMANJARO_MOSHI,
    name: "KILIMANJARO MOSHI",
    href: "/produse/cafea/origini/kilimanjaro_moshi",
  },
  {
    image: MEXIC_FINCA_MONTE_AZUL,
    name: "MEXIC FINCA MONTE AZUL",
    href: "/produse/cafea/origini/mexic_finca_monte_azul",
  },
  {
    image: NICARAGUA_MARAGOGYPE,
    name: "NICARAGUA MARAGOGYPE",
    href: "/produse/cafea/origini/nicaragua_maragogype",
  },
  {
    image: NICARAGUA_MATAGALPA,
    name: "NICARAGUA MATAGALPA",
    href: "/produse/cafea/origini/nicaragua_matagalpa",
  },
  {
    image: PERU_CAJAMARCA,
    name: "PERU CAJAMARCA",
    href: "/produse/cafea/origini/peru_cajamarca",
  },
  {
    image: SAN_DOMINGO_BARAHONA,
    name: "SAN DOMINGO BARAHONA",
    href: "/produse/cafea/origini/san_somingo_barahona",
  },
];

const OriginCoffeePage = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const productCount = products.length;

  return (
    <div className="py-10 font-serif">
      <div className="mx-auto px-8 md:px-20 lg:px-40">
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

export default OriginCoffeePage;
