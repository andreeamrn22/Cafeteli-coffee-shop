import React from "react";

const MarvimexMap = () => {
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.3544738414662!2d28.621636409403674!3d44.17786333783958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bae57212d20fcd%3A0xf121561914f9fa30!2sCoffee%20Shop%20-%20Magazin%20de%20Cafea!5e0!3m2!1sro!2sro!4v1754304142158!5m2!1sro!2sro"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MarvimexMap;
