import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ReusableHeader from "../components/ReusableHeader/ReusableHeader";
import poza from "../assets/website/produse/ceaiuri/georg-niggli-vCdC4Tz-dFU-unsplash.jpg";
import ProductDisplay from "../components/TeaProducts/TeaProductsDisplay";
import Night from "../assets/website/produse/ceaiuri/ceai_plic/1001_night.png";
import Bahamian_Soursop from "../assets/website/produse/ceaiuri/ceai_plic/Bahamian_Soursop.png";
import Berry_Jam from "../assets/website/produse/ceaiuri/ceai_plic/Berry_Jam.png";
import Champagne_splashes from "../assets/website/produse/ceaiuri/ceai_plic/Champagne_splashes.png";
import Citrus_Melissa from "../assets/website/produse/ceaiuri/ceai_plic/Citrus_Melissa.png";
import Love_blossom from "../assets/website/produse/ceaiuri/ceai_plic/Love_blossom.png";
import Night_beautea from "../assets/website/produse/ceaiuri/ceai_plic/Night_beautea.png";
import Passion_Fruit from "../assets/website/produse/ceaiuri/ceai_plic/Passion_Fruit.png";
import Raspberrry_Vanilla from "../assets/website/produse/ceaiuri/ceai_plic/Raspberrry_Vanilla.png";
import Royal_Dessert from "../assets/website/produse/ceaiuri/ceai_plic/Royal_Dessert.png";
import Strawberry_Marshmellow from "../assets/website/produse/ceaiuri/ceai_plic/Strawberry_Marshmellow.png";
import Wild_Berry from "../assets/website/produse/ceaiuri/ceai_plic/Wild_Berry.png";

const products = [
  {
    image: Night,
    name: "1001 Nights",
    href: "/produse/ceaiuri/plic/1001_nights",
  },
  {
    image: Bahamian_Soursop,
    name: "Bahamian Soursop",
    href: "/produse/ceaiuri/plic/bahamian_soursop",
  },
  {
    image: Berry_Jam,
    name: "Berry Jam",
    href: "/produse/ceaiuri/plic/berry_jam",
  },
  {
    image: Champagne_splashes,
    name: "Champagne Splashes",
    href: "/produse/ceaiuri/plic/champagne_splashes",
  },
  {
    image: Citrus_Melissa,
    name: "Citrus Melissa",
    href: "/produse/ceaiuri/plic/citrus_melissa",
  },
  {
    image: Love_blossom,
    name: "Love Blossom",
    href: "/produse/ceaiuri/plic/love_blossom",
  },
  {
    image: Night_beautea,
    name: "Night Beautea",
    href: "/produse/ceaiuri/plic/night_beautea",
  },
  {
    image: Passion_Fruit,
    name: "Passion Fruit",
    href: "/produse/ceaiuri/plic/passion_fruit",
  },
  {
    image: Raspberrry_Vanilla,
    name: "Raspberrry Vanilla",
    href: "/produse/ceaiuri/plic/raspberrry_vanilla",
  },
  {
    image: Royal_Dessert,
    name: "Royal Dessert",
    href: "/produse/ceaiuri/plic/royal_dessert",
  },
  {
    image: Strawberry_Marshmellow,
    name: "Strawberry Marshmellow",
    href: "/produse/ceaiuri/plic/strawberry_marshmellow",
  },
  {
    image: Wild_Berry,
    name: "Wild Berry",
    href: "/produse/ceaiuri/plic/wild_berry",
  },
];

const CeaiuriPlic = () => {
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
      <ReusableHeader backgroundImage={poza} title="Ceaiuri plic" />
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

export default CeaiuriPlic;
