import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ReusableHeader from "../components/ReusableHeader/ReusableHeader";
import poza from "../assets/website/produse/ceaiuri/georg-niggli-vCdC4Tz-dFU-unsplash.jpg";
import ProductDisplay from "../components/TeaProducts/TeaProductsDisplay";
import Night_300 from "../assets/website/produse/ceaiuri/ceai_tub/1001Night_300.png";
import Alpine_herbs from "../assets/website/produse/ceaiuri/ceai_tub/Alpine_herbs.png";
import Bahamian_Soursop from "../assets/website/produse/ceaiuri/ceai_tub/Bahamian_Soursop.png";
import Berry_jam from "../assets/website/produse/ceaiuri/ceai_tub/Berry_jam.png";
import Champagne_Splashes from "../assets/website/produse/ceaiuri/ceai_tub/Champagne_Splashes.png";
import Cleopatra_s_night from "../assets/website/produse/ceaiuri/ceai_tub/Cleopatra_s_night.png";
import Love_blossom from "../assets/website/produse/ceaiuri/ceai_tub/Love-blossom.png";
import Passion_fruit from "../assets/website/produse/ceaiuri/ceai_tub/Passion_fruit.png";
import Royal_dessert from "../assets/website/produse/ceaiuri/ceai_tub/Royal_dessert.png";
import Strawberry_Marshmallow from "../assets/website/produse/ceaiuri/ceai_tub/Strawberry_Marshmallow.png";
import Wild_berry from "../assets/website/produse/ceaiuri/ceai_tub/Wild_berry.png";

const products = [
  {
    image: Night_300,
    name: "1001 Nights",
    href: "/produse/ceaiuri/tub/1001_nights",
  },
  {
    image: Alpine_herbs,
    name: "Alpine Herbs",
    href: "/produse/ceaiuri/tub/alpine_herbs",
  },
  {
    image: Bahamian_Soursop,
    name: "Bahamian Soursop",
    href: "/produse/ceaiuri/tub/bahamian_soursop",
  },
  {
    image: Berry_jam,
    name: "Berry Jam",
    href: "/produse/ceaiuri/tub/berry_jam",
  },
  {
    image: Champagne_Splashes,
    name: "Champagne Splashes",
    href: "/produse/ceaiuri/tub/champagne_splashes",
  },
  {
    image: Cleopatra_s_night,
    name: "Cleopatra's Night",
    href: "/produse/ceaiuri/tub/cleopatra_s_night",
  },
  {
    image: Love_blossom,
    name: "Love Blossom",
    href: "/produse/ceaiuri/tub/love_blossom",
  },
  {
    image: Passion_fruit,
    name: "Passion Fruit",
    href: "/produse/ceaiuri/tub/passion_fruit",
  },
  {
    image: Royal_dessert,
    name: "Royal Dessert",
    href: "/produse/ceaiuri/tub/royal_dessert",
  },
  {
    image: Strawberry_Marshmallow,
    name: "Strawberry Marshmallow",
    href: "/produse/ceaiuri/tub/strawberry_marshmallow",
  },
  {
    image: Wild_berry,
    name: "Wild Berry",
    href: "/produse/ceaiuri/tub/wild_berry",
  },
];

const CeaiuriTub = () => {
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
      <ReusableHeader backgroundImage={poza} title="Ceaiuri tub" />
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

export default CeaiuriTub;
