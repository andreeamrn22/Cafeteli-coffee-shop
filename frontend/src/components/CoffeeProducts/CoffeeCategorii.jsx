import React from "react";
import { motion } from "framer-motion";
import cafea_origini from "../../assets/website/produse/cafea_origini/bg.jpg";
import cafea_blend from "../../assets/website/produse/cafea_blend/closeup-fresh-grinding-coffee.jpg";

const categories = [
  {
    title: "Origini",
    image: cafea_origini,
    description:
      "Cafele de origine unică, cu arome distincte ce reflectă regiunea de proveniență.",
    href: "/produse/cafea/origini",
  },
  {
    title: "Blend",
    image: cafea_blend,
    description:
      "Amestecuri create cu măiestrie, pentru un echilibru perfect de arome și un gust consistent.",
    href: "/produse/cafea/blend",
  },
];

const CoffeeCategorii = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <div className="py-16 font-serif">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 lg:gap-20">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.href}
              className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-black border-2 border-transparent transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-52 md:h-52 lg:h-80 mb-4 "
              />
              <h2 className="text-3xl font-bold mt-3 mb-2 tracking-tight">
                {category.title}
              </h2>
              <p className="text-xl md:text-2xl lg:text-2xl xl:text-2xl text-gray-600">
                {category.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCategorii;
