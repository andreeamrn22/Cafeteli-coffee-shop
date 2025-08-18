import React from "react";
import pahar from "../../assets/website/produse/pahar.png";
import pungaCafea from "../../assets/website/produse/columbia_mica1.png";
import coffeeBean1 from "../../assets/website/Bean1.png";
import coffeeBean2 from "../../assets/website/Bean2.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="mt-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-[700px] md:h-[650px] relative px-4">
        {/* Text section */}
        <div className="mb-20 space-y-10">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-4xl lg:text-6xl font-bold font-serif md:text-left px-3"
          >
            Cea mai bună{" "}
            <span className="text-primary font-cursive">cafea</span>, pe onoarea
            mea!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 px-3 text-xl font-serif max-w-lg"
          >
            La noi, cafeaua Leonard Caffe este mai mult decât o băutură – este o
            tradiție a gustului desăvârșit. Te invităm să descoperi aromele
            alese, pentru că fiecare bob poartă o poveste.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
          >
            <a href="/produse">Explorează produsele</a>
          </motion.button>
        </div>

        {/* Image section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center h-full">
          {/* Punga de cafea */}
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0, rotate: 10 }}
            transition={{ duration: 1, delay: 0.4 }}
            src={pungaCafea}
            className="absolute w-[260px] md:w-[400px] xl:w-[470px] left-3 md:-left-10 lg:-left-28 xl:-left-24 z-10"
          />

          {/* Paharul de cafea */}
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 1, delay: 0.4 }}
            src={pahar}
            alt="Pahar de cafea"
            className="absolute w-[200px] lg:w-[250px] xl:w-[300px] right-6 -bottom-7 md:bottom-40 md:-right-10 lg:bottom-32 lg:-right-1 xl:bottom-16 xl:right-6 z-20"
          />
        </div>

        {/* Boabe de cafea animate */}
        <motion.img
          initial={{ opacity: 0, x: 400, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 45 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          src={coffeeBean2}
          alt="bob cafea jos"
          className="absolute hidden md:block md:w-16 lg:w-20 bottom-20 left-36 z-10 rotate-45"
        />
        <motion.img
          initial={{ opacity: 0, x: 600, y: 200, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          src={coffeeBean1}
          alt="bob cafea jus stanga"
          className="absolute hidden md:block md:w-16 lg:w-20 top-3 xl:-left-2 z-10 "
        />
        <motion.img
          initial={{ opacity: 0, x: -100, y: 100, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -20 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          src={coffeeBean2}
          alt="bob cafea jus dreapta"
          className="absolute hidden md:block md:w-16 lg:w-20 top-0 right-0 md:right-16 lg:right-10 z-10 -rotate-45"
        />
      </div>
    </div>
  );
};

export default Home;
