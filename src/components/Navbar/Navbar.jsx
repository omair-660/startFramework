import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [paddingY, setPaddingY] = useState('py-6');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setPaddingY('py-3');
      } else {
        setPaddingY('py-6');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <div className={`bg-slate-700 px-4 z-50 fixed top-0 right-0 left-0 transtion duration-500 ${paddingY}`}>
        <div className="container mx-auto flex justify-between items-center relative flex-wrap">
          <div className="logo">
            <h2 className="uppercase text-slate-50 font-bold">START FRAMEWORK</h2>
          </div>
          <div className="block md:hidden absolute right-3 top-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-50 focus:outline-none"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className={`links w-full md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row justify-center">
              <li className="px-3 font-bold text-lg py-2 text-slate-50">
                <NavLink to="" onClick={() => setIsOpen(false)}>Home</NavLink>
              </li>
              <li className="px-3 font-bold text-lg py-2 text-slate-50">
                <NavLink to="about" onClick={() => setIsOpen(false)}>About</NavLink>
              </li>
              <li className="px-3 font-bold text-lg py-2 text-slate-50">
                <NavLink to="contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
              </li>
              <li className="px-3 font-bold text-lg py-2 text-slate-50">
                <NavLink to="portfolio" onClick={() => setIsOpen(false)}>portfolio</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
