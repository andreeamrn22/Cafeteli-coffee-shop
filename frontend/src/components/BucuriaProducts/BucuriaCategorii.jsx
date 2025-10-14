import React from "react";
import { motion } from "framer-motion";
import bomboane from "../../assets/website/produse/dulciuri_bucuria/bomboane_ambalate.jpg";
import biscuiti from "../../assets/website/produse/dulciuri_bucuria/biscuiti.jpg";
import fara_zahar from "../../assets/website/produse/dulciuri_bucuria/fara_zahar.png";

const categories = [
  {
    title: "Bomboane",
    image: bomboane,
    href: "/produse/bucuria/bomboane",
  },
  {
    title: "Biscuiți",
    image: biscuiti,
    href: "/produse/bucuria/biscuiti",
  },
  {
    title: "Fără zahăr",
    image: fara_zahar,
    href: "/produse/bucuria/fara_zahar",
  },
];

const BucuriaCategorii = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const isSummer = false; // Change to false when it's cold outside

  if (isSummer) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center px-4">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">
            O mică pauză de vară ☀️
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Din păcate, pe timp de vară, produsele noastre delicioase cu
            ciocolată de la Bucuria sunt în vacanță. Vrem să ne asigurăm că
            ajung la tine în condiții perfecte și, din cauza temperaturilor
            ridicate, există riscul să se topească.
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Te asigurăm că din toamnă le vom readuce pe stoc cu multă bucurie!
            Între timp, te invităm să explorezi celelalte produse.
          </p>
        </div>
      </div>
    );
  }

  // Show products
  return (
    <div className="py-10 font-serif">
      <div className="mx-auto px-8 md:px-8 lg:px-16 xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-12">
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

export default BucuriaCategorii;
