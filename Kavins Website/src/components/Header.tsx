import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className="sm:px-16 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <a href="#" className="flex items-center gap-2">
            <p className="text-white text-[25px] font-bold cursor-pointer tracking-tight">
              Kavin.&nbsp;
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
