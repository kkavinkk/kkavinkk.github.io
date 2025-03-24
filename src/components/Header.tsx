import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent">
      <nav className="w-full fixed top-0 z-20 bg-transparent">
        <div className="px-3 py-6 max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <p className="text-white text-[25px] font-bold cursor-pointer flex logo reduce-letter-spacing">
              Kavin.K&nbsp;
            </p>
          </a>
          <ul className="list-none hidden sm:flex flex-row gap-10 ml-auto mr-6">
            <li className="text-white hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="text-white hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#experience">Experience</a>
            </li>
            <li className="text-white hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-white hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="text-white hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
