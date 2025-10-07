import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ReusableHeader from "../components/ReusableHeader/ReusableHeader";
import poza from "../assets/website/produse/ceaiuri/georg-niggli-vCdC4Tz-dFU-unsplash.jpg";
import ProductDisplay from "../components/TeaProducts/TeaProductsDisplay";
import green_tea from "../assets/website/produse/ceaiuri/ceai_asortat/GreenTea_cutie.png";
import bergamot from "../assets/website/produse/ceaiuri/ceai_asortat/Bergamot_cutie.png";
import flower_tea from "../assets/website/produse/ceaiuri/ceai_asortat/FlowerTea_cutie.png";
import fest_tea from "../assets/website/produse/ceaiuri/ceai_asortat/FestTeaSet_cutie.png";
import prime_tea from "../assets/website/produse/ceaiuri/ceai_asortat/PrimeTeaSet_cutie.png";

const products = [
  {
    image: green_tea,
    name: "Green Tea Assorted",
    href: "/produse/ceaiuri/asortate/green_tea",
  },
  {
    image: bergamot,
    name: "Bergamot Assorted",
    href: "/produse/ceaiuri/asortate/bergamot",
  },
  {
    image: flower_tea,
    name: "Flower Tea Assorted",
    href: "/produse/ceaiuri/asortate/flower_tea",
  },
  {
    image: fest_tea,
    name: "Fest Tea Set",
    href: "/produse/ceaiuri/asortate/fest_tea",
  },
  {
    image: prime_tea,
    name: "Prime Tea Set",
    href: "/produse/ceaiuri/asortate/prime_tea",
  },
];

const CeaiuriAsortate = () => {
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
      <ReusableHeader backgroundImage={poza} title="Ceaiuri asortate" />
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

export default CeaiuriAsortate;
