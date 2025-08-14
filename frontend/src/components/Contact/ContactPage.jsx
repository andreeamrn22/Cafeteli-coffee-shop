import React from "react";
import WhatsAppButton from "../../assets/website/extra/WhatsAppChat.png";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactPage = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const locations = [
    {
      name: "Coffee Shop Marvimex",
      address: "Str. Dumitru Marinescu nr. 17, Constanța",
      link: "/locatii/marvimex",
    },
    {
      name: "Coffee Shop Casa de Cultură",
      address: "Str. I.G. Duca nr. 81, Constanța",
      link: "/locatii/casa-de-cultura",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 font-serif">
        <motion.div
          className="flex flex-col space-y-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <div className="border-b-2 border-primary w-24 mx-auto"></div>
          </div>

          <div className="flex flex-col items-center">
            <HiOutlineMail className="text-5xl mb-3" />
            <a
              href="mailto:dan2012m@gmail.com"
              className="text-xl font-medium text-gray-800 transition-transform duration-200 hover:scale-110 inline-block"
            >
              dan2012m@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center">
            <MdPhone className="text-5xl mb-3" />
            <a
              href="tel:+40723766387"
              className="text-xl font-medium text-gray-800 transition-transform duration-200 hover:scale-110 inline-block"
            >
              0723 766 387
            </a>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/40723766387"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <img
                src={WhatsAppButton}
                alt="Chat on WhatsApp"
                className="w-52 transition-transform duration-200 hover:scale-110 inline-block"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col space-y-10 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Locațiile noastre</h2>
            <div className="border-b-2 border-primary w-24 mx-auto "></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {locations.map((loc, index) => (
              <motion.a
                key={index}
                href={loc.link}
                className="flex flex-col items-center text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <FiMapPin className="text-4xl mb-2 text-secondary group-hover:text-primary transition" />
                <h3 className="text-xl font-semibold mb-1 transition-all duration-200 hover:scale-110 inline-block">
                  {loc.name}
                </h3>
                <p className="text-lg text-gray-700 ">{loc.address}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
