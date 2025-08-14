import React from "react";
import { motion } from "framer-motion";
import cafeaBoabe from "../../assets/website/produse/cafea_boabe.png";
import ceai from "../../assets/website/produse/ceai.png";
import bomboaneBucuria from "../../assets/website/produse/bucuria-box.png";
import ibrice from "../../assets/website/produse/ibric.png";

const categories = [
  {
    title: "CAFEA BOABE",
    image: cafeaBoabe,
    description:
      "O selecție fină de boabe de cafea proaspăt prăjite din întreaga lume.",
    href: "/produse/cafea",
  },
  {
    title: "CEAIURI",
    image: ceai,
    description: "Ceaiuri rare și aromate pentru o experiență relaxantă.",
    href: "/produse/ceaiuri",
  },
  {
    title: "DULCIURI BUCURIA",
    image: bomboaneBucuria,
    description:
      "Bomboane artizanale și praline delicioase pentru orice moment dulce.",
    href: "/produse/bucuria",
  },
  {
    title: "ACCESORII PENTRU CAFEA",
    image: ibrice,
    description:
      "Ibrice de cupru și alte accesorii esențiale pentru pasionații de cafea.",
    href: "/produse/accesorii",
  },
];

const Produse = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="py-16 font-serif">
      <div className="mx-auto px-8 md:px-8 lg:px-4 xl:px-12 2xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-5 lg:gap-4 xl:gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.href}
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:border-black border-2 border-transparent transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full md:w-96 lg:w-96 xl:w-80 2xl:w-auto h-72 md:h-96 lg:h-96 xl:h-80 2xl:h-96 overflow-hidden group-hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-xl md:text-3xl font-bold mt-3 mb-2 tracking-tight">
                {category.title}
              </h2>
              <p className="text-lg md:text-2xl text-gray-900">
                {category.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Text section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl text-gray-700 max-w-2xl mx-auto font-serif">
            Te așteptăm în magazin pentru a descoperi și mai multe produse
            unice, de la ustensile pentru prepararea cafelei, la dulciuri și
            alte surprize.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Produse;
