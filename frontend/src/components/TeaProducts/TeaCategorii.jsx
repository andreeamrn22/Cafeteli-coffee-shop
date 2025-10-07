import React from "react";
import { motion } from "framer-motion";
import ceaiuri_tub from "../../assets/website/produse/ceaiuri/ceaiuri_tub_300x259.png";
import ceaiuri_plic from "../../assets/website/produse/ceaiuri/ceaiuri_plicuri_300.png";
import ceaiuri_piramida from "../../assets/website/produse/ceaiuri/ceaiuri_piramide_300.png";
import ceaiuri_asortate from "../../assets/website/produse/ceaiuri/ceaiuri_asortate_300.png";
import set_cadou from "../../assets/website/produse/ceaiuri/set_cadou_mix_300.png";

const categories = [
  {
    title: "Ceai tub",
    image: ceaiuri_tub,
    description:
      "O experiență elegantă, ceaiuri premium ambalate în tuburi minimaliste pentru prospețime și stil.",
    href: "/produse/ceaiuri/tub",
  },
  {
    title: "Ceai plic",
    image: ceaiuri_plic,
    description:
      "Perfecte pentru o pauză rapidă, plicuri de ceai cu infuzie rapidă, menținând un gust bogat.",
    href: "/produse/ceaiuri/plic",
  },
  {
    title: "Ceai piramidă",
    image: ceaiuri_piramida,
    description:
      "Fiecare piramidă permite o infuzie optimă, eliberând aromele complete ale ceaiurilor noastre speciale.",
    href: "/produse/ceaiuri/piramida",
  },
  {
    title: "Ceai asortat",
    image: ceaiuri_asortate,
    description:
      "O varietate de gusturi într-o singură cutie. Ideal pentru a explora și a descoperi aromele preferate.",
    href: "/produse/ceaiuri/asortate",
  },
  {
    title: "Seturi cadou",
    image: set_cadou,
    description:
      "Seturi elegante cu selecții de ceaiuri premium, perfecte pentru a oferi momente speciale celor dragi.",
    href: "/produse/ceaiuri/seturi_cadou",
  },
];

const TeaCategorii = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="py-10 font-serif">
      <div className="mx-auto px-8 md:px-8 lg:px-16 xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.href}
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:border-black border-2 border-transparent transition-shadow duration-300 "
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-64 flex justify-center items-center mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-3xl font-bold mb-3">{category.title}</h2>
              <p className="text-gray-600 text-base md:text-lg">
                {category.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeaCategorii;
