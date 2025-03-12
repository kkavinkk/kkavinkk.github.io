import React from "react";

const Header: React.FC = () => {
  return (
    <header className="big-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2x1 font-bold">Kavins Website</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
