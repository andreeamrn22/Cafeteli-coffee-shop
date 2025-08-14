import React from "react";
import { motion } from "framer-motion";
import columbia from "../../assets/website/produse/poze_facute_de_min/cafea_boabe/columbia_mica1.png";
import irish_coffee from "../../assets/website/produse/poze_facute_de_min/cafea_boabe/irish_coffee.png";
import el_salvador from "../../assets/website/produse/poze_facute_de_min/cafea_boabe/el_salvador.png";
import line_frame from "../../assets/website/line_frame.jpg";

const ProductsData = [
  {
    id: 1,
    image: columbia,
    name: "Columbia",
    href: "/produse/cafea/origini/columbia_supremo",
    description:
      "Cu note fine de caramel și ciocolată, această cafea oferă un gust echilibrat și o aromă bogată, ideală pentru un espresso de excepție.",
  },
  {
    id: 2,
    image: irish_coffee,
    name: "Irish Coffee",
    href: "/produse/cafea/blend/cafea_cu_aroma_de_irish_coffee",
    description:
      "O cafea delicată cu arome subtile de whiskey irlandez și frișcă, care se îmbină perfect pentru a crea o experiență sofisticată și reconfortantă.",
  },
  {
    id: 3,
    image: el_salvador,
    name: "El Salvadore",
    href: "/produse/cafea/origini/el_savador_himalaya",
    description:
      "O cafea cu un profil de aciditate plăcut și note de fructe uscate, oferind o senzație vibrantă și revigorantă, perfectă pentru a-ți trezi simțurile.",
  },
];

const Products = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* header title */}
        <div className="flex flex-col items-center justify-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl font-bold font-serif text-primary px-5 text-center"
          >
            Cele mai populare produse
          </motion.h1>
        </div>
        {/* Service Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center px-5"
        >
          {ProductsData.map((data) => {
            return (
              <a
                key={data.id}
                href={data.href}
                className="rounded-2xl bg-white shadow-xl duration-high max-w-[300px] group relative transition-all"
              >
                {/* img section */}
                <div className="flex justify-center items-center p-4 h-[300px]">
                  <img
                    src={data.image}
                    className="max-w-[200px] block mx-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text content */}
                <div className="p-5 text-center font-serif space-y-3">
                  <h1 className="text-2xl font-bold ">{data.name}</h1>
                  <p className="text-gray-500 group-hover:text-black duration-high text-md">
                    {data.description}
                  </p>
                </div>
              </a>
            );
          })}
        </motion.div>
        {/* Buton catre meniu */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center items-center py-14"
        >
          <a
            href="/produse"
            className="w-64 h-14 bg-primary/40 hover:bg-primary/90 rounded-full font-serif text-xl flex justify-center items-center"
          >
            Vezi produsele noastre
          </a>
        </motion.div>
        <div className="flex flex-col items-center justify-center mt-10">
          <motion.img
            src={line_frame}
            className="py-2 rotate-180"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
