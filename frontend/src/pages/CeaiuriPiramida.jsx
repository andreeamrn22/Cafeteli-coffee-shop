import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ReusableHeader from "../components/ReusableHeader/ReusableHeader";
import poza from "../assets/website/produse/ceaiuri/georg-niggli-vCdC4Tz-dFU-unsplash.jpg";
import ProductDisplay from "../components/TeaProducts/TeaProductsDisplay";
import Night from "../assets/website/produse/ceaiuri/ceai_piramida/1001night.png";
import AlpineHerbs from "../assets/website/produse/ceaiuri/ceai_piramida/AlpineHerbs.png";
import Bahamian_Soursop from "../assets/website/produse/ceaiuri/ceai_piramida/Bahamian_Soursop.png";
import BargamotVanilla from "../assets/website/produse/ceaiuri/ceai_piramida/BargamotVanilla.png";
import berry_jam from "../assets/website/produse/ceaiuri/ceai_piramida/berry-jam.png";
import ChampagneSplashes from "../assets/website/produse/ceaiuri/ceai_piramida/ChampagneSplashes.png";
import CherryConfiture from "../assets/website/produse/ceaiuri/ceai_piramida/CherryConfiture.png";
import Cleopatra_s_Night from "../assets/website/produse/ceaiuri/ceai_piramida/Cleopatra_s_Night.png";
import Creme_brulle from "../assets/website/produse/ceaiuri/ceai_piramida/Creme-brulle.png";
import Golden_Ceylon from "../assets/website/produse/ceaiuri/ceai_piramida/Golden_Ceylon.png";
import Golden_Mango from "../assets/website/produse/ceaiuri/ceai_piramida/Golden_Mango.png";
import MilkOolong from "../assets/website/produse/ceaiuri/ceai_piramida/MilkOolong.png";
import Passion_Fruit from "../assets/website/produse/ceaiuri/ceai_piramida/Passion_Fruit.png";
import PomegranateShake from "../assets/website/produse/ceaiuri/ceai_piramida/PomegranateShake.png";
import StrawberryMarshmallow from "../assets/website/produse/ceaiuri/ceai_piramida/StrawberryMarshmallow.png";
import WhitePeach from "../assets/website/produse/ceaiuri/ceai_piramida/WhitePeach.png";
import Wild_berry from "../assets/website/produse/ceaiuri/ceai_piramida/Wild_berry.png";

const products = [
  {
    image: Night,
    name: "1001 Nights",
    href: "/produse/ceaiuri/piramida/1001_nights",
  },
  {
    image: AlpineHerbs,
    name: "Alpine Herbs",
    href: "/produse/ceaiuri/piramida/alpine_herbs",
  },
  {
    image: Bahamian_Soursop,
    name: "Bahamian Soursop",
    href: "/produse/ceaiuri/piramida/bahamian_soursop",
  },
  {
    image: BargamotVanilla,
    name: "Bargamot Vanilla",
    href: "/produse/ceaiuri/piramida/bargamot_vanilla",
  },
  {
    image: berry_jam,
    name: "Berry Jam",
    href: "/produse/ceaiuri/piramida/berry_jam",
  },
  {
    image: ChampagneSplashes,
    name: "Champagne Splashes",
    href: "/produse/ceaiuri/piramida/champagne_splashes",
  },
  {
    image: CherryConfiture,
    name: "Cherry Confiture",
    href: "/produse/ceaiuri/piramida/cherry_confiture",
  },
  {
    image: Cleopatra_s_Night,
    name: "Cleopatra's Night",
    href: "/produse/ceaiuri/piramida/cleopatra_s_night",
  },
  {
    image: Creme_brulle,
    name: "Creme Brulle",
    href: "/produse/ceaiuri/piramida/creme_brulle",
  },
  {
    image: Golden_Ceylon,
    name: "Golden Ceylon",
    href: "/produse/ceaiuri/piramida/golden_ceylon",
  },
  {
    image: Golden_Mango,
    name: "Golden Mango",
    href: "/produse/ceaiuri/piramida/golden_mango",
  },
  {
    image: MilkOolong,
    name: "Milk Oolong",
    href: "/produse/ceaiuri/piramida/milk_oolong",
  },
  {
    image: Passion_Fruit,
    name: "Passion Fruit",
    href: "/produse/ceaiuri/piramida/passion_fruit",
  },
  {
    image: PomegranateShake,
    name: "Pomegranate Shake",
    href: "/produse/ceaiuri/piramida/pomegranate_shake",
  },
  {
    image: StrawberryMarshmallow,
    name: "Strawberry Marshmallow",
    href: "/produse/ceaiuri/piramida/strawberry_marshmallow",
  },
  {
    image: WhitePeach,
    name: "White Peach",
    href: "/produse/ceaiuri/piramida/white_peach",
  },
  {
    image: Wild_berry,
    name: "Wild Berry",
    href: "/produse/ceaiuri/piramida/wild_berry",
  },
];

const CeaiuriPiramida = () => {
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
      <ReusableHeader backgroundImage={poza} title="Ceaiuri piramidă" />
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

export default CeaiuriPiramida;
