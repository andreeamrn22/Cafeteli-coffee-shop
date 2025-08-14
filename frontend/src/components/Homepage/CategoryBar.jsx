import React from "react";
import { Candy } from "lucide-react";
import { CiCoffeeCup } from "react-icons/ci";
import { GiCoffeeBeans } from "react-icons/gi";

const categories = [
  { name: "Cafea Caldă", Icon: CiCoffeeCup },
  { name: "Cafea boabe", Icon: GiCoffeeBeans },
  { name: "Bomboane Bucuria", Icon: Candy },
];

const CategoryBar = () => {
  return (
    <div className="mt-10 flex flex-col items-center w-full">
      <div className="bg-primary/20 px-6 py-4 flex gap-10 md:gap-32 justify-center flex-wrap w-full">
        {categories.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center text-xl font-serif text-secondary transition"
          >
            <div className="p-2 mb-2 w-16 h-16 md:w-24 md:h-24">
              <Icon className="w-full h-full" />
            </div>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
