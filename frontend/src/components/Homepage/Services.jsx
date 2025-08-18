import React from "react";
import { motion } from "framer-motion";
import espreso from "../../assets/website/espreso_cup.png";
import late from "../../assets/website/HeroImg.png";
import cappuccino from "../../assets/website/cappucino_cup.png";
import line_frame from "../../assets/website/line_frame.jpg";

const ServicesData = [
  {
    id: 1,
    image: espreso,
    name: "Espresso",
    description:
      "Un espresso intens și aromat, perfect pentru un început de zi plin de energie.",
  },
  {
    id: 2,
    image: late,
    name: "Latte",
    description:
      "Un latte cremos cu lapte spumat, ideal pentru momentele de relaxare.",
  },
  {
    id: 3,
    image: cappuccino,
    name: "Cappuccino",
    description:
      "Un cappuccino clasic cu un echilibru perfect între cafea și lapte.",
  },
];

const Services = () => {
  return (
    <div id="menu" className="py-20 cursor-default">
      <div className="max-w-7xl mx-auto">
        {/* header title */}
        <div className="flex flex-col items-center justify-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl text-center font-bold font-serif text-primary px-4"
          >
            Cele mai bune cafele pentru tine
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
          {ServicesData.map((data, index) => {
            return (
              <div className="rounded-2xl bg-white shadow-xl duration-high max-w-[350px] group relative transition-all">
                {/* img section  */}
                <div className="h-[122px]">
                  <img
                    src={data.image}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>

                {/* Text content */}
                <div className="p-4 text-center font-serif space-y-3">
                  <h1 className="text-2xl font-bold ">{data.name}</h1>
                  <p className="text-gray-500 group-hover:text-black duration-high text-md mt-3">
                    {data.description}
                  </p>
                </div>
              </div>
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
            href="/meniu"
            className="w-64 h-14 bg-primary/40 hover:bg-primary/90 rounded-full font-serif text-xl flex justify-center items-center"
          >
            Vezi meniul nostru
          </a>
        </motion.div>
        <div className="flex flex-col items-center justify-center mt-20">
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

export default Services;
