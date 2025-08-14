import React from "react";
import WhatsAppButton from "../../assets/website/extra/WhatsAppChat.png";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const CasaDeCulturaContact = () => {
  return (
    <div>
      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Email */}
          <div className="flex flex-col items-center">
            <HiOutlineMail className="text-5xl mb-5" />
            <p className="text-lg md:text-xl font-medium text-gray-800 ">
              dan2012m@gmail.com
            </p>
            {/* Buton WhatsApp */}
            <a
              href="https://wa.me/40723766387"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10"
            >
              <img
                src={WhatsAppButton}
                className="w-52 transition-transform duration-200 hover:scale-110 inline-block"
              />
            </a>
          </div>

          {/* Telefon */}
          <div className="flex flex-col items-center">
            <MdPhone className="text-5xl mb-5" />
            <a
              href="tel:+40723766387"
              className="text-lg md:text-xl font-medium text-gray-800 transition-transform duration-200 hover:scale-110 inline-block"
            >
              0723 766 387
            </a>
          </div>

          {/* Locație */}
          <div className="flex flex-col items-center">
            <FiMapPin className="text-5xl mb-5" />
            <a
              href="#map"
              className="text-lg md:text-xl font-medium text-gray-800 transition-transform duration-200 hover:scale-110 inline-block"
            >
              Str. I.G. Duca nr. 81, Constanța
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasaDeCulturaContact;
