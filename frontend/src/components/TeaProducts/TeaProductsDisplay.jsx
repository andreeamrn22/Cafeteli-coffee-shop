import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const TeaProductsDisplay = ({ products, productType }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const getImageClass = () => {
    switch (productType) {
      case "tea":
        return "h-60 w-auto md:h-72 lg:h-80 object-contain group-hover:scale-105 transition-transform duration-300";
      case "accessories":
        return "h-full w-auto md:h-72 lg:h-full object-contain group-hover:scale-105 transition-transform duration-300";
      default:
        return "h-full w-auto md:h-72 lg:h-full object-contain group-hover:scale-105 transition-transform duration-300";
    }
  };

  const productCount = products.length;
  return (
    <div className="py-10 font-serif">
      <div className="mx-auto px-8 md:px-8 lg:px-20 xl:px-40">
        <div className="mb-10 text-xl md:text-3xl">
          Afișate toate cele {productCount} de rezultate
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.a
              key={index}
              href={product.href}
              className="group bg-white rounded-lg shadow-lg hover:shadow-2xl hover:border-black border-2 border-transparent transition-shadow duration-300 relative flex flex-col items-center p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={product.image}
                alt={product.name}
                className={getImageClass()}
              />

              <div className="text-center w-full">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <div className="flex items-bottom justify-center text-black opacity-0 group-hover:opacity-100 group-hover:text-black transition-all duration-300">
                  <p className="text-sm font-semibold">
                    VEZI MAI MULTE DETALII
                  </p>
                  <FaArrowRightLong className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <div className="pt-10">
        <div className="border-b-2 border-primary/50 w-32 md:w-36 mx-auto mb-2"></div>
        <h1 className="text-primary/50 text-lg md:text-xl text-center font-serif">
          AI AJUNS LA FINAL
        </h1>
        <div className="border-b-2 border-primary/50 w-32 md:w-36 mx-auto mt-2"></div>
      </div>
    </div>
  );
};

export default TeaProductsDisplay;
