import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ReusableHeader from "../components/ReusableHeader/ReusableHeader";
import ProductDisplay from "../components/TeaProducts/TeaProductsDisplay";
import poza from "../assets/website/produse/dulciuri_bucuria/bomboane_ambalate.jpg";
import chisinau_de_seara from "../assets/website/produse/dulciuri_bucuria/bomboane/chisinau_de_seara.jpg";
import meteorit from "../assets/website/produse/dulciuri_bucuria/bomboane/meteorit.jpg";
import bucuria from "../assets/website/produse/dulciuri_bucuria/bomboane/bucuria.jpg";
import griliaj from "../assets/website/produse/dulciuri_bucuria/bomboane/griliaj.jpg";

import lapte_de_pasare from "../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare.jpg";
import lapte_de_pasare_banane from "../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare_banane.jpg";
import lapte_de_pasare_capsiuni from "../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare_capsiuni.jpg";
import lapte_de_pasare_cocos from "../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare_cocos.jpg";
import lapte_de_pasare_ciocolata from "../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare_ciocolata.jpg";
import lapte_de_pasare_lamaie from "../assets/website/produse/dulciuri_bucuria/bomboane/lapte_de_pasare_lamaie.jpg";

import struguri_in_cioclata from "../assets/website/produse/dulciuri_bucuria/bomboane/struguri_in_ciocolata.jpg";
import visina_in_cioclata from "../assets/website/produse/dulciuri_bucuria/bomboane/visina_in_ciocolata.jpg";

import inspiratie_caisa from "../assets/website/produse/dulciuri_bucuria/bomboane/inspiratie_caisa.jpg";
import inspiratie_lamaie from "../assets/website/produse/dulciuri_bucuria/bomboane/inspiratie_lamaie.jpg";
import inspiratie_portocala from "../assets/website/produse/dulciuri_bucuria/bomboane/inspiratie_portocala.jpg";
import inspiratie_visine from "../assets/website/produse/dulciuri_bucuria/bomboane/inspiratie_visine.jpg";

import duet from "../assets/website/produse/dulciuri_bucuria/bomboane/duet.jpg";
import favorit from "../assets/website/produse/dulciuri_bucuria/bomboane/favorit.jpg";
import brandusa from "../assets/website/produse/dulciuri_bucuria/bomboane/brandusa.png";
import clepsidra from "../assets/website/produse/dulciuri_bucuria/bomboane/clepsidra.png";
import dulcineea from "../assets/website/produse/dulciuri_bucuria/bomboane/dulcineea.jpg";

const products = [
  {
    image: chisinau_de_seara,
    name: "Chișinău de seară",
    href: "/produse/bucuria/bomboane/chisinau_de_seara",
  },
  {
    image: meteorit,
    name: "Meteorit",
    href: "/produse/bucuria/bomboane/meteorit",
  },
  {
    image: bucuria,
    name: "Bucuria",
    href: "/produse/bucuria/bomboane/bucuria",
  },
  {
    image: griliaj,
    name: "Griliaj în ciocolată",
    href: "/produse/bucuria/bomboane/griliaj",
  },

  {
    image: lapte_de_pasare,
    name: "Lapte de pasăre",
    href: "/produse/bucuria/bomboane/lapte_de_pasare",
  },
  {
    image: lapte_de_pasare_banane,
    name: "Lapte de pasăre (Banane)",
    href: "/produse/bucuria/bomboane/lapte_de_pasare_banane",
  },
  {
    image: lapte_de_pasare_capsiuni,
    name: "Lapte de pasăre (Căpșuni)",
    href: "/produse/bucuria/bomboane/lapte_de_pasare_capsiuni",
  },
  {
    image: lapte_de_pasare_cocos,
    name: "Lapte de pasăre (Cocos)",
    href: "/produse/bucuria/bomboane/lapte_de_pasare_cocos",
  },
  {
    image: lapte_de_pasare_ciocolata,
    name: "Lapte de pasăre (Ciocolată)",
    href: "/produse/bucuria/bomboane/lapte_de_pasare_ciocolata",
  },
  {
    image: lapte_de_pasare_lamaie,
    name: "Lapte de pasăre (Lămâie)",
    href: "/produse/bucuria/bomboane/lapte_de_pasare_lamaie",
  },
  {
    image: struguri_in_cioclata,
    name: "Struguri în ciocolată",
    href: "/produse/bucuria/bomboane/struguri_in_cioclata",
  },
  {
    image: visina_in_cioclata,
    name: "Vișină în ciocolată",
    href: "/produse/bucuria/bomboane/visina_in_cioclata",
  },
  {
    image: inspiratie_caisa,
    name: "Inspirație Caisă",
    href: "/produse/bucuria/bomboane/inspiratie_caisa",
  },
  {
    image: inspiratie_lamaie,
    name: "Inspirație Lămâie",
    href: "/produse/bucuria/bomboane/inspiratie_lamaie",
  },
  {
    image: inspiratie_portocala,
    name: "Inspirație Portocală",
    href: "/produse/bucuria/bomboane/inspiratie_portocala",
  },
  {
    image: inspiratie_visine,
    name: "Inspirație Vișine",
    href: "/produse/bucuria/bomboane/inspiratie_visine",
  },
  {
    image: duet,
    name: "Duet",
    href: "/produse/bucuria/bomboane/duet",
  },
  {
    image: favorit,
    name: "Favorit",
    href: "/produse/bucuria/bomboane/favorit",
  },
  {
    image: brandusa,
    name: "Brândușa",
    href: "/produse/bucuria/bomboane/brandusa",
  },
  {
    image: clepsidra,
    name: "Clepsidra",
    href: "/produse/bucuria/bomboane/clepsidra",
  },
  {
    image: dulcineea,
    name: "Fondante Dulcineea",
    href: "/produse/bucuria/bomboane/dulcineea",
  },
];

const BucuriaBomboane = () => {
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
      <ReusableHeader backgroundImage={poza} title="Bomboane" />
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

export default BucuriaBomboane;
