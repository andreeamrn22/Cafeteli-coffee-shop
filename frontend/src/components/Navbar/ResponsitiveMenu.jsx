import React from "react";
import Bg from "../../assets/website/background/BrownAestheticCoffeeShopBg.png";

const MenuBg = {
  backgroundImage: `url(${Bg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const ResponsitiveMenu = ({ open, setOpen }) => {
  return (
    <div
      style={MenuBg}
      className={`${
        open ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-50 x-30 flex h-screen w-[75%] flex-col justify-between px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <nav className="mt-12">
          <ul className="flex flex-col gap-10 text-2xl font-serif font-bold">
            <a href="/">
              <li onClick={() => setOpen(false)} className="cursor-pointer ">
                Acasă
              </li>
            </a>
            <a href="/meniu">
              <li onClick={() => setOpen(false)} className="cursor-pointer">
                Meniu
              </li>
            </a>
            <a href="/produse">
              <li onClick={() => setOpen(false)} className="cursor-pointer">
                Produse
              </li>
            </a>
            <a href="/articole">
              <li
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-primary"
              >
                Articole
              </li>
            </a>
            <a href="/contact">
              <li onClick={() => setOpen(false)} className="cursor-pointer">
                Contact
              </li>
            </a>
            <a href="/locatii">
              <li onClick={() => setOpen(false)} className="cursor-pointer">
                Locații
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsitiveMenu;
