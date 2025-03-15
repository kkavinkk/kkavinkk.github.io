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
          {/* <ul className="list-none hidden"></ul> */}
        </div>
      </nav>
      {/* <div className="container mx-auto flex justify-between items-center">
        <h1 className={styles.title}>Kavins Website</h1>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div> */}
    </header>
  );
};

export default Header;
