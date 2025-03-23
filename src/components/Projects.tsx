import React from "react";
import "./projects.css";

const Projects: React.FC = () => {
  return (
    <section className="w-full bg-black py-1 px-6 relative">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
      </div>
      <div className="project-container bg-black">
        <div className="p-contain-1">
          <div className="links-wrap space-x-4">
            <a
              href="https://github.com/Segmentation-Faulters-HackED-2025/fact-or-cap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-80 h-auto object-cover rounded-lg border-4 border-white bg-white"
                src="public\FactORCap.png"
                alt="FactOrCap"
              />
            </a>
            <div className="text-center space-y-6 space-x-4">
              <a
                href="https://github.com/Segmentation-Faulters-HackED-2025/fact-or-cap"
                target="_blank"
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-sans py-2 px-4 rounded-full">
                  GitHub
                </button>
              </a>
              <a
                href="https://devpost.com/software/fact-or-cap-the-truth-checking-chrome-extention"
                target="_blank"
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-sans py-2 px-4 rounded-full">
                  DEVPOST
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="p-contain-2 text-white">
          <h2 className="text-4xl font-extrabold dark:text-white">
            Fact or Cap
          </h2>
          <p>
            A Chrome extension that allows users to highlight any sentence on
            the internet, right-click, and fact-check the selected text
            instantly using verified sources.
          </p>
          <p>Computer Engineering Club HackED 2025</p>
          <div className="icon-wrap items-center">
            <button className="icon-house">
              <p>JavaScript</p>
            </button>
            <button className="icon-house">
              <p>HTML</p>
            </button>
            <button className="icon-house">
              <p>CSS</p>
            </button>
            <button className="icon-house">
              <p>Google Fact Checking API</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
