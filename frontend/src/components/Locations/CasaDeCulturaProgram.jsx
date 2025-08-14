import React from "react";
import exterior from "../../assets/website/CasaDeCultura1.jpg";

const CasaDeCulturaProgram = () => {
  return (
    <div className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 xl:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Program */}
        <div className="text-left md:pr-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            PROGRAM
          </h2>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">LUNI – VINERI:</span> 08:00-17:00
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <span className="font-semibold">SÂMBĂTĂ:</span> 09:00-15:00
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <span className="font-semibold">DUMINICĂ:</span> 09:00-13:00
          </p>
        </div>

        {/* Image section */}
        <div className="w-full md:w-[364px] lg:w-[492px] xl:w-[700px] object-cover">
          <img src={exterior} />
        </div>
      </div>
    </div>
  );
};

export default CasaDeCulturaProgram;
