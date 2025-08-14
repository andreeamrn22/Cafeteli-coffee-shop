import React from "react";
import marvimex from "../../assets/website/marvimex1_erased.png";
import casaDeCultura from "../../assets/website/CasaDeCultura1.jpg";
import Bg from "../../assets/website/background/BrownandCreamCoffeeBG.png";
import { motion } from "framer-motion";

const background = {
  backgroundImage: `url(${Bg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const locatii = [
  {
    name: "Cafeteli",
    subtitle: "Marvimex",
    image: marvimex,
    href: "/locatii/marvimex",
  },
  {
    name: "Cafeteli",
    subtitle: "Casa de Cultură",
    image: casaDeCultura,
    href: "/locatii/casa-de-cultura",
  },
];

const Locatii = () => {
  return (
    <div style={background} className="pt-[64px] pb-[200px] bg-fixed">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center pb-12 font-serif"
      >
        <p className="text-base uppercase tracking-wider text-gray-600 mb-2">
          LOCAȚIILE NOASTRE
        </p>
        <h2 className="text-5xl font-semibold">Ne poți găsi</h2>
      </motion.div>

      {/* grid */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 "
      >
        {locatii.map((loc) => (
          <a
            key={loc.name + loc.subtitle}
            href={loc.href}
            className="group block rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white"
          >
            <div className="overflow-hidden">
              <img
                src={loc.image}
                alt={`${loc.name} – ${loc.subtitle}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 font-serif">
              <h3 className="text-4xl font-bold">
                {loc.name} <span className="text-4xl">– {loc.subtitle}</span>
              </h3>
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Locatii;
