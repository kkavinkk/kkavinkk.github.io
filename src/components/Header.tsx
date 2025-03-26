import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  //close menu after button is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-transparent">
      <nav className="w-full fixed top-0 z-20 bg-transparent">
        <div className="px-3 py-6 max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <p className="text-white text-[25px] font-bold cursor-pointer flex logo reduce-letter-spacing">
              Kavin.K&nbsp;
            </p>
          </a>

          {/* Hamburger Menu Button (Visible only on small/slim screens) */}
          <button
            className="text-white text-[25px] focus:outline-none sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Navigation Menu */}
          <ul
            className={`list-none sm:flex flex-col sm:flex-row gap-10 ml-auto mr-6 absolute sm:static top-[60px] left-0 w-full sm:w-auto bg-black sm:bg-transparent transition-all duration-300 ease-in-out ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <li className="text-white hover:text-gray-300 text-[18px] font-medium cursor-pointer px-5 py-3 sm:p-0">
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="text-white hover:text-gray-300 text-[18px] font-medium cursor-pointer px-5 py-3 sm:p-0">
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li className="text-white hover:text-gray-300 text-[18px] font-medium cursor-pointer px-5 py-3 sm:p-0">
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li className="text-white hover:text-gray-300 text-[18px] font-medium cursor-pointer px-5 py-3 sm:p-0">
              <a href="#gallery" onClick={closeMenu}>
                Gallery
              </a>
            </li>
            <li className="text-white hover:text-gray-300 text-[18px] font-medium cursor-pointer px-5 py-3 sm:p-0">
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
