import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const SimpleTeaDisplay = ({ productData }) => {
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

  return (
    <div>
      <Navbar />

      <div className="py-16 font-serif">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Imagine produs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-lg p-8 flex items-center justify-center">
              <img
                src={productData.image}
                alt={productData.title}
                className="w-64 md:w-80 lg:w-96 max-h-80 md:max-h-96 object-contain "
              />
            </div>
          </motion.div>

          {/* Descriere și specificații */}
          <div className="text-gray-800">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-10"
            >
              {productData.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 text-2xl mb-10"
            >
              {productData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ul className="space-y-4">
                {productData.specs.map((spec, index) => (
                  <li key={index} className="flex">
                    <p className="font-bold text-gray-600 w-40 flex-shrink-0 pr-4 text-xl">
                      {spec.label}:
                    </p>
                    <p className="text-gray-800 text-xl">{spec.value}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
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

export default SimpleTeaDisplay;
