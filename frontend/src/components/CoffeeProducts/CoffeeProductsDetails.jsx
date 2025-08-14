import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CoffeeRating from "./CoffeeRating";

const CoffeeProductsDetails = ({ productData }) => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="py-16 font-serif">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coloana pentru imagine */}
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
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          <div className="text-gray-800">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-20"
            >
              {productData.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 "
            >
              <ul className="space-y-5">
                {productData.specs.map((spec, index) => (
                  <li key={index} className="flex items-left">
                    <p className="font-bold text-gray-600 w-40 text-xl flex-shrink-0 pr-4">
                      {spec.label}:
                    </p>
                    {spec.isRating ? (
                      <CoffeeRating rating={spec.value} />
                    ) : (
                      <p className="text-gray-800 text-xl">{spec.value}</p>
                    )}
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

export default CoffeeProductsDetails;
