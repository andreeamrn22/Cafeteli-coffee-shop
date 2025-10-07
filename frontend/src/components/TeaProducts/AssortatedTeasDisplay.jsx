import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const TeaBoxDetails = ({ boxData }) => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Determinăm dimensiunea imaginilor în funcție de numărul de plicuri
  const getTeaImageClasses = () => {
    switch (boxData.teas.length) {
      case 4:
        return "w-40 h-40 md:w-60 md:h-60";
      case 6:
        return "w-40 h-40 md:w-48 md:h-48";
    }
  };

  // Determinăm câte coloane să fie pentru ecrane mari
  const getGridColsLg = () => {
    switch (boxData.teas.length) {
      case 4:
        return "lg:grid-cols-4";
      case 6:
        return "lg:grid-cols-3";
    }
  };

  return (
    <div>
      <Navbar />

      <div className="py-16 font-serif">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Imagine cutie ceai */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-lg p-8 flex items-center justify-center">
              <img
                src={boxData.image}
                alt={boxData.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Descriere */}
          <div className="text-gray-800">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-20"
            >
              {boxData.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 text-2xl"
            >
              {boxData.description}
            </motion.p>
          </div>
        </div>

        {/* Pliculețe de ceai pe un rând nou */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`mt-12 max-w-7xl mx-auto px-2 grid grid-cols-2 md:grid-cols-3 gap-2 ${getGridColsLg()}`}
        >
          {boxData.teas.map((tea) => (
            <div
              key={tea.name}
              className="p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={tea.image}
                alt={tea.name}
                className={`${getTeaImageClasses()} object-contain mb-3`}
              />
              <h2 className="text-lg font-bold text-gray-800 mb-1 text-center">
                {tea.name}
              </h2>
              <p className="text-md text-gray-600 text-center">{tea.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <Footer />
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showGoToTop ? 1 : 0, scale: showGoToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-10 right-10 bg-primary hover:bg-secondary/80 text-white font-bold py-4 px-4 rounded-full z-10 shadow-xl"
      >
        <IoIosArrowUp className="text-3xl" />
      </motion.button>
    </div>
  );
};

export default TeaBoxDetails;
