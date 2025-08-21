import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaChevronDown } from "react-icons/fa";

const AccesorieProductDetails = ({ productData }) => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openSections, setOpenSections] = useState({});

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

  const toggleSection = (sectionTitle) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="py-16 font-serif">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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

          {/* Coloana pentru descriere și instrucțiuni */}
          <div className="text-gray-800">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              {productData.title}
            </h1>

            {/* Secțiunea Descriere */}
            {productData.description && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                  Descriere
                </h2>
                <p className="text-lg text-gray-800">
                  {productData.description}
                </p>
              </div>
            )}

            {/* Secțiunea de specificatii simple (dacă există) */}
            {productData.specs && (
              <div className="mt-6">
                <ul className="space-y-5">
                  {productData.specs.map((spec, index) => (
                    <li key={index} className="flex items-left mb-4">
                      <p className="font-bold text-gray-600 w-40 text-xl flex-shrink-0 pr-4">
                        {spec.label}:
                      </p>
                      <p className="text-gray-800 text-xl">{spec.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Secțiunea Instrucțiuni (Accordion) - pentru produsele complexe */}
            {productData.instructions &&
              productData.instructions.length > 0 && (
                <div>
                  {productData.instructions.map((section, index) => (
                    <div key={index} className="border-b border-gray-300 py-4">
                      <button
                        onClick={() => toggleSection(section.title)}
                        className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
                      >
                        <h2 className="text-2xl font-bold text-gray-700">
                          {section.title}
                        </h2>
                        <FaChevronDown
                          className={`transform transition-transform duration-300 ${
                            openSections[section.title]
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openSections[section.title] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4">
                              {section.details.map((item, itemIndex) => (
                                <div key={itemIndex} className="mb-4">
                                  {item.label && (
                                    <p className="font-bold text-gray-600 mb-1">
                                      {item.label}:
                                    </p>
                                  )}
                                  <p className="text-lg text-gray-800">
                                    {item.value}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              )}
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
