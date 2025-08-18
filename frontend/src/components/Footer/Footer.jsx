import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Bg from "../../assets/website/background/footer_bg.jpg";
import Logo from "../../assets/website/logo.png";
import ANPC from "../../assets/website/logo-uri/Logo_ANPC.png";
import SOL from "../../assets/website/logo-uri/Logo_SOL.png";
import mastercard from "../../assets/website/logo-uri/mastercard_logo.png";
import VISA from "../../assets/website/logo-uri/VISA_logo.png";
import apple_pay from "../../assets/website/logo-uri/apple_pay_logo.png";

const FooterBg = {
  backgroundImage: `url(${Bg})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const ServicesLinks = [
  {
    name: "Acasă",
    link: "/",
  },
  {
    name: "Meniu",
    link: "/meniu",
  },
  {
    name: "Produse",
    link: "/produse",
  },
  {
    name: "Articole",
    link: "/articole",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Locații",
    link: "/locatii",
  },
];

const Footer = () => {
  return (
    <div style={FooterBg} className="min-h-[300px]">
      <div className="bg-[rgba(0,0,0,0.35)]">
        <div className="max-w-6xl mx-10 pb-20 pt-5 font-serif">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* footer links */}
            <div className="py-8 md:px-10 lg:px-16 text-left">
              <h1 className="text-3xl md:text-3xl font-semibold mb-5">
                Link-uri rapide
              </h1>
              <ul className="space-y-6 md:space-y-5 ">
                {ServicesLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-2xl md:text-xl font-bold transition-transform duration-200 hover:scale-110 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* logo și social media pe aceeași coloană */}
            <div className="py-8 px-4 flex flex-col items-center md:items-start space-y-10">
              {/* logo section */}
              <div>
                <a href="/">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="w-[200px] transition-transform duration-200 hover:scale-110 inline-block"
                  />
                </a>
              </div>
              {/* social media section */}
              <div>
                <h1 className="text-3xl font-semibold mb-3">Urmărește-ne</h1>
                <div className="flex items-center gap-10 mt-6">
                  <a
                    href="https://www.facebook.com/cafeteli.constanta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-5xl transition-transform duration-200 hover:scale-110 inline-block" />
                  </a>
                  <a
                    href="https://www.instagram.com/cafeteli_constanta/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-5xl transition-transform duration-200 hover:scale-110 inline-block" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@cafeteli_constanta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok className="text-5xl transition-transform duration-200 hover:scale-110 inline-block" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-col justify-start px-4 pt-10">
            {/* Metode de plată */}
            <div className="mb-8 md:mb-0">
              <div className="flex items-center justify-center md:justify-start gap-10 mt-6">
                <img src={mastercard} className="w-20 h-auto" />
                <img src={VISA} className="w-20 h-auto" />
                <img src={apple_pay} className="w-20 h-auto" />
              </div>
            </div>

            {/* Protecția consumatorului */}
            <div className="flex gap-5 mt-6">
              <a
                href="https://reclamatiisal.anpc.ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ANPC} alt="ANPC" className="w-[250px] h-[50px]" />
              </a>
              <a
                href="https://consumer-redress.ec.europa.eu/site-relocation_en?event=main.home2.show&lng=RO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={SOL} alt="SOL" className="w-[250px] h-[50px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
