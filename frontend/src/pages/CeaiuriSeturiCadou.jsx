import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ReusableHeader from "../components/ReusableHeader/ReusableHeader";
import poza from "../assets/website/produse/ceaiuri/georg-niggli-vCdC4Tz-dFU-unsplash.jpg";
import ProductDisplay from "../components/TeaProducts/TeaProductsDisplay";
import Bouquet from "../assets/website/produse/ceaiuri/seturi_cadou/Bouquet.png";

const products = [
  {
    image: Bouquet,
    name: "Bouquet",
    href: "/produse/ceaiuri/seturi_cadou/bouquet",
  },
];

const CeaiuriSeturiCadou = () => {
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
      <ReusableHeader backgroundImage={poza} title="Seturi cadou" />
      <ProductDisplay products={products} productType="tea" />
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

export default CeaiuriSeturiCadou;
