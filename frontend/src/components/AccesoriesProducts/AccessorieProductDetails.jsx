import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AccesorieProductDetails = ({ productData }) => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productData.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Navbar />
      <div className="py-16 font-serif">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coloana pentru slideshow de imagini */}
          <div className="relative flex justify-center items-center">
            {/* Buton stânga */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-primary/50 hover:bg-primary/80 rounded-full z-10 transition-colors"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Imaginea */}
            <div className="w-full max-w-lg p-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={productData.images[currentImageIndex]}
                  alt={`${productData.title} ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-auto object-contain"
                />
              </AnimatePresence>
            </div>

            {/* Buton dreapta */}
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-primary/50 hover:bg-primary/80 rounded-full z-10 transition-colors"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          {/* Coloana pentru descriere */}
          <div className="text-gray-800">
            <h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-20"
            >
              {productData.title}
            </h1>

            <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6"
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
            </div>
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

export default AccesorieProductDetails;
