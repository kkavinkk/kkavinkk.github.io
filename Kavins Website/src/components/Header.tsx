import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="{Header-main}">
      <nav className="{Full-header}">
        <div className="header-text">
          <a href="#" className="name">
            <p className="text-2xl font-bold underline cursor-pointer">
              Kavin.&nbsp;
            </p>
          </a>
          <ul className="list-header">
            <li className="list-component">
              <a href="#about">About</a>
            </li>
            <li className="list-component">
              <a href="#experience">Experience</a>
            </li>
            <li className="list-component">
              <a href="projects">Projects</a>
            </li>
            <li className="list-component">
              <a href="gallery">Gallery</a>
            </li>
            <li className="list-component">
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
