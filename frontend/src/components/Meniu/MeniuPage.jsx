import React from "react";
import coffee_cup_beans from "../../assets/website/elements/coffee_cup_beans.png";
import coffee_cup from "../../assets/website/elements/coffee_cup2.png";
import frappe from "../../assets/website/elements/frappe1.png";
import espresor from "../../assets/website/elements/espresor.png";
import ciocolata_calda from "../../assets/website/produse/poze_facute_de_min/ciocolata_calda.png";

const hotCoffee = [
  { name: "Cafea Columbia", price: "6.00 LEI" },
  { name: "Cafea Miscela Italiană", price: "6.00 LEI" },
  { name: "Cafea Irish", price: "6.00 LEI" },
  { name: "Cafea Ethiopia", price: "7.00 LEI" },
  { name: "Cafea Americano", price: "7.00 LEI" },
  { name: "Cafea Decofeinizată", price: "7.00 LEI" },
];

const MilkCoffee = [
  { name: "Cappucino", price: "10.00 LEI" },
  { name: "Cappucino Mare", price: "12.00 LEI" },
  { name: "Caffe Late", price: "10.00 LEI" },
  { name: "Caffe Late Mare", price: "12.00 LEI" },
  { name: "Late Machiato", price: "10.00 LEI" },
];

const iceCoffee = [
  { name: "Frappe", description: "(350 ml)", price: "12.00 LEI" },
  { name: "Frappe", description: "(450 ml)", price: "14.00 LEI" },
  { name: "Frappe Decofeinizat", description: "(350 ml)", price: "14.00 LEI" },
  { name: "Frappe Decofeinizat", description: "(450 ml)", price: "14.00 LEI" },
  { name: "Oreo Frappe", description: "(350 ml)", price: "13.00 LEI" },
  { name: "Oreo Frappe", description: "(450 ml)", price: "15.00 LEI" },
  { name: "Snickers Frappe", description: "(350 ml)", price: "13.00 LEI" },
  { name: "Snickers Frappe", description: "(450 ml)", price: "15.00 LEI" },
];

const NonCoffee = [
  {
    name: "Ceai",
    description: "(cireșe, fructe de pădure, lămâie, mentă, mușețel)",
    price: "5.00 LEI",
  },
  {
    name: "Ciocolata Caldă",
    description:
      "*fără gluten* (clasică, albă, caramel, portocală și scorțișoară)",
    price: "7.00 LEI",
  },
];

const MenuSection = ({ title, items }) => (
  <div className="mt-10 cursor-default">
    <h2 className="text-3xl md:text-4xl font-bold border-b border-dashed border-gray-400 pb-2 mb-4">
      {title}
    </h2>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center text-sm md:text-base"
        >
          <div className="flex-grow mr-4">
            <p
              className={
                "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mt-1 relative group inline-block "
              }
            >
              {item.name}
              {item.name === "Ciocolata Caldă" && (
                <div
                  role="tooltip"
                  className="absolute z-10 invisible group-hover:visible inline-block w-52 text-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100 dark:border-gray-600 top-full left-1/2 -translate-x-1/2 mt-2"
                >
                  <div className="border border-gray-200 rounded-lg shadow-xl bg-transparent">
                    <img src={ciocolata_calda} className="w-full h-auto" />
                  </div>
                </div>
              )}

              <span className="text-gray-500 text-xl ml-3">
                {item.description}
              </span>
            </p>
            <p className="border-b border-dashed border-gray-300 flex-grow mr-4 pb-1"></p>
          </div>
          <span className="font-semibold text-xl md:text-xl lg:text-2xl xl:text-2xl">
            {item.price}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const MeniuPage = () => {
  return (
    <div className="relative min-h-screen bg-primary/10 p-4 md:p-8 font-serif ">
      {/* Grid-ul principal pentru secțiunile de meniu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-20 max-w-7xl mx-auto mb-10">
        {/* Hot Coffee Section */}
        <div className="md:col-span-1">
          <MenuSection title="CAFEA CALDĂ" items={hotCoffee} />
        </div>

        {/* Ice Coffee Section */}
        <div className="md:col-span-1">
          <MenuSection title="CAFEA CU LAPTE" items={MilkCoffee} />
        </div>

        {/* Coffee Latte Section */}
        <div className="md:col-span-1">
          <MenuSection title="CAFEA RECE" items={iceCoffee} />
        </div>

        {/* Special Section */}
        <div className="md:col-span-1">
          <MenuSection title="ALTE BĂUTURI" items={NonCoffee} />
        </div>
      </div>
    </div>
  );
};

export default MeniuPage;
