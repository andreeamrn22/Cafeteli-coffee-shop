import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ReusableHeader from "../components/ReusableHeader/ReusableHeader";
import poza from "../assets/website/produse/ceaiuri/georg-niggli-vCdC4Tz-dFU-unsplash.jpg";
import ProductDisplay from "../components/TeaProducts/TeaProductsDisplay";
import night from "../assets/website/produse/ceaiuri/ceai_vrac/1001_night.png";
import Alpine_herbs from "../assets/website/produse/ceaiuri/ceai_vrac/Alpine_herbs.png";
import Champagne_splashes from "../assets/website/produse/ceaiuri/ceai_vrac/Champagne_splashes.png";
import Cleopatra_s_night from "../assets/website/produse/ceaiuri/ceai_vrac/Cleopatra_s_night.png";
import Earl_Grey from "../assets/website/produse/ceaiuri/ceai_vrac/Earl_Grey.png";
import Golden_Ceylon from "../assets/website/produse/ceaiuri/ceai_vrac/Golden_Ceylon.png";
import Special_green from "../assets/website/produse/ceaiuri/ceai_vrac/Special_green.png";
import Wild_berry from "../assets/website/produse/ceaiuri/ceai_vrac/Wild_berry.png";

const products = [
  {
    image: night,
    name: "1001 Nights",
    href: "/produse/ceaiuri/vrac/1001_nights",
  },
  {
    image: Alpine_herbs,
    name: "Alpine Herbs",
    href: "/produse/ceaiuri/vrac/alpine_herbs",
  },
  {
    image: Champagne_splashes,
    name: "Champagne Splashes",
    href: "/produse/ceaiuri/vrac/champagne_splashes",
  },
  {
    image: Cleopatra_s_night,
    name: "Cleopatra's Night",
    href: "/produse/ceaiuri/vrac/cleopatra_s_night",
  },
  {
    image: Earl_Grey,
    name: "Earl Grey",
    href: "/produse/ceaiuri/vrac/earl_grey",
  },
  {
    image: Golden_Ceylon,
    name: "Golden Ceylon",
    href: "/produse/ceaiuri/vrac/golden_ceylon",
  },
  {
    image: Special_green,
    name: "Special Green",
    href: "/produse/ceaiuri/vrac/special_green",
  },
  {
    image: Wild_berry,
    name: "Wild Berry",
    href: "/produse/ceaiuri/vrac/wild_berry",
  },
];

const CeaiuriVrac = () => {
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
      <ReusableHeader backgroundImage={poza} title="Ceaiuri vrac" />
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

export default CeaiuriVrac;
