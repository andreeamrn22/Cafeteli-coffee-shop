import React from "react";

const ReusableHeader = ({ backgroundImage, title }) => {
  const background = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      className="relative h-[300px] overflow-hidden md:bg-fixed"
      style={background}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)] flex items-center justify-center text-center ">
        <div className="text-white font-serif">
          <h1 className="text-5xl md:text-7xl ">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ReusableHeader;
