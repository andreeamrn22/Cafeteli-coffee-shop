import React from "react";
import { PiCoffeeBeanFill } from "react-icons/pi";

const CoffeeRating = ({ rating, max = 5 }) => {
  const fullColor = "#6f4e37";
  const emptyColor = "#ccc";

  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <PiCoffeeBeanFill
          key={i}
          size={24}
          color={i < rating ? fullColor : emptyColor}
        />
      ))}
    </div>
  );
};

export default CoffeeRating;
