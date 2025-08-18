import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ReusableHeader from "../components/ReusableHeader/ReusableHeader";
import ProductDisplay from "../components/TeaProducts/TeaProductsDisplay";
import poza from "../assets/website/background/equipment-coffee-maker-barista.jpg";
import ibric300 from "../assets/website/produse/accesorii/ibric_300/ibr_300.png";
import ibric400 from "../assets/website/produse/accesorii/ibric_400/ibr_400.png";
import ibric500 from "../assets/website/produse/accesorii/ibric_500/ibr_500.png";
import ibric600 from "../assets/website/produse/accesorii/ibric_600/ibr_600.png";
import ibric700 from "../assets/website/produse/accesorii/ibric_700/ibr_700.png";
import ibric1L from "../assets/website/produse/accesorii/ibric_1000/ibr_1000.png";
import cana_cupru from "../assets/website/produse/accesorii/cana_cupru/cana.png";
import pahar_cupru from "../assets/website/produse/accesorii/pahar_cupru/pahar.png";

const products = [
  {
    image: ibric300,
    name: "Ibric (300ml)",
    href: "/produse/accesorii/ibric_300ml",
  },
  {
    image: ibric400,
    name: "Ibric (400ml)",
    href: "/produse/accesorii/ibric_400ml",
  },
  {
    image: ibric500,
    name: "Ibric (500ml)",
    href: "/produse/accesorii/ibric_500ml",
  },
  {
    image: ibric600,
    name: "Ibric (600ml)",
    href: "/produse/accesorii/ibric_600ml",
  },
  {
    image: ibric700,
    name: "Ibric (700ml)",
    href: "/produse/accesorii/ibric_700ml",
  },
  {
    image: ibric1L,
    name: "Ibric (1L)",
    href: "/produse/accesorii/ibric_1L",
  },
  {
    image: cana_cupru,
    name: "Cană cupru",
    href: "/produse/accesorii/cana_cupru",
  },
  {
    image: pahar_cupru,
    name: "Pahar cupru",
    href: "/produse/accesorii/pahar_cupru",
  },
];

const AccesoriesProducts = () => {
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
      <ReusableHeader backgroundImage={poza} title="Accesorii" />
      <ProductDisplay products={products} />
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

export default AccesoriesProducts;
