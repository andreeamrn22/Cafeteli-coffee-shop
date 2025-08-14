import React from "react";

const CasaDeCulturaMap = () => {
  return (
    <div id="map" className="bg-brandDark py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text section*/}
        <div className="text-left text-white md:pr-10">
          <p className="uppercase text-lg mb-2 tracking-wider">
            CA SĂ NE GĂSEȘTI MAI UȘOR!
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Localizare pe Maps
          </h2>
        </div>

        {/* Map section */}
        <div
          className="relative overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.3645256716752!2d28.63594681953324!3d44.18013158694097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bae525202d6175%3A0x7a146a7ffa8a8029!2sCoffee%20Shop!5e0!3m2!1sro!2sro!4v1754308003200!5m2!1sro!2sro"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CasaDeCulturaMap;
