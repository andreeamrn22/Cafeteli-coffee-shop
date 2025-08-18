import React from "react";
import poza from "../../assets/website/background/equipment-coffee-maker-barista.jpg";

const background = {
  backgroundImage: `url(${poza})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Produse_header = () => {
  return (
    <div
      className="relative h-[300px] overflow-hidden md:bg-fixed"
      style={background}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)] flex items-center justify-center text-center ">
        <div className="text-white font-serif">
          <h1 className="text-5xl md:text-7xl ">Produsele Noastre</h1>
          <p className="mt-4 md:text-2xl">
            Descoperă universul gustului autentic!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Produse_header;
