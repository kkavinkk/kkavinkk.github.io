import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="{Header-main}">
      <nav className="sm:px-16 px-3 w-full  flex items-center py-5 fixed top-0 z-20 bg-[#ffffff]">
        <div className="w-full  flex  justify-between items-center max-w-7x1 mx-auto">
          <a href="#" className="flex items-center gap-2">
            <p className="text-black text-[25px] font-bold cursor-pointer flex logo reduce-letter-spacing">
              Kavin.K&nbsp;
            </p>
          </a>
          <ul className="list-none hidden sm:flex flex-row gap-10 ml-auto mr-6">
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#experience">Experience</a>
            </li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="projects">Projects</a>
            </li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="gallery">Gallery</a>
            </li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
