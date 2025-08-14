import React from "react";
import Logo from "../../assets/website/logo.png";
import { Menu, X } from "lucide-react";
import ResponsitiveMenu from "./ResponsitiveMenu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div className="container py-5">
        <div className="flex justify-between items-center gap-4">
          {/* logo section */}
          <div className="flex items-center">
            <a href="/">
              <img
                src={Logo}
                alt="Logo"
                className="w-32 md:w-40 lg:w-36 xl:w-40"
              />
            </a>
          </div>
          {/* Links section */}
          <nav className="md:flex hidden items-center gap-7 font-serif">
            <ul className="flex gap-12 items-center md:text-xl md:gap-10 lg:text-2xl xl:text-4xl font-bold">
              <a href="/">
                <li className="cursor-pointer hover:text-secondary ">Acasă</li>
              </a>
              <a href="/meniu">
                <li className="cursor-pointer hover:text-secondary ">Meniu</li>
              </a>
              <a href="/produse">
                <li className="cursor-pointer hover:text-secondary ">
                  Produse
                </li>
              </a>
              <a href="/articole">
                <li className="cursor-pointer hover:text-secondary ">
                  Articole
                </li>
              </a>
              <a href="/contact">
                <li className="cursor-pointer hover:text-secondary ">
                  Contact
                </li>
              </a>
              <a href="/locatii">
                <li className="cursor-pointer hover:text-secondary ">
                  Locații
                </li>
              </a>
            </ul>
          </nav>
          {/* Butonul de meniu pentru mobil */}
          {open ? (
            <X onClick={() => setOpen(false)} className="w-7 h-7 md:hidden" />
          ) : (
            <Menu onClick={() => setOpen(true)} className="w-7 h-7 md:hidden" />
          )}
        </div>
        <ResponsitiveMenu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
