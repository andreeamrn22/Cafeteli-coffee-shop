import React from "react";

const Bucuria = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-center px-4">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">
          O mică pauză de vară ☀️
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Din păcate, pe timp de vară, produsele noastre delicioase cu ciocolată
          de la Bucuria sunt în vacanță. Vrem să ne asigurăm că ajung la tine în
          condiții perfecte și, din cauza temperaturilor ridicate, există riscul
          să se topească.
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Te asigurăm că din toamnă le vom readuce pe stoc cu multă bucurie!
          Între timp, te invităm să explorezi celelalte produse.
        </p>
      </div>
    </div>
  );
};

export default Bucuria;
