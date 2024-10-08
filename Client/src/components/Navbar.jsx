import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../styles";
import "../index.css";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full text-white flex items-center py-5 fixed top-0 z-20 navbar`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white font-light cursor-pointer flex flex-col">
            Shubham Rathore&nbsp;
            <span className="sm:block hidden">|Full-stack developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`relative ${
                active === link.title ? "active" : "text-white"
              } text-[18px] font-medium cursor-pointer mt-3 transition duration-300`}
              onClick={() => setActive(link.title)}
            >
              <a
                href={`#${link.id}`}
                className="hover:text-[#9b9b99] relative"
              >
                {link.title}
              </a>
              {/* Underline Effect */}
              <span
                className={`absolute left-0 right-0 bottom-0 h-[2px] bg-[#a0a09f] scale-x-0 transition-transform duration-300 origin-left ${
                  active === link.title ? "scale-x-100" : ""
                }`}
              />
            </li>
          ))}
          <a href="#contact">
            <button
              type="submit"
              className="btn py-3 px-8 rounded-xl outline-none w-fit text-white font-light drop-shadow-lg"
            >
              Hire Me
            </button>
          </a>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] color-white object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 navbar absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "active" : "text-white"
                  } relative`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a
                    href={`#${nav.id}`}
                    className="hover:text-[#979796] relative"
                  >
                    {nav.title}
                  </a>
                  {/* Underline Effect */}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-[2px] bg-[#8c8b88] scale-x-0 transition-transform duration-300 origin-left ${
                      active === nav.title ? "scale-x-100" : ""
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
