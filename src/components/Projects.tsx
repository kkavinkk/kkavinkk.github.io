import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="project-container bg-black">
      <div className="p-contain-1">
        <div className="links-wrap">
          <a
            href="https://github.com/Segmentation-Faulters-HackED-2025/fact-or-cap"
            target="_blank"
          >
            <img
              className="divider"
              src="public\FactORCap.png"
              alt="FactOrCap"
            />
          </a>
          <center>
            <a
              href="https://github.com/Segmentation-Faulters-HackED-2025/fact-or-cap"
              target="_blank"
            >
              <button className="text-white">GitHub</button>
            </a>
            <a
              href="https://devpost.com/software/fact-or-cap-the-truth-checking-chrome-extention"
              target="_blank"
            >
              <button className="text-white">DEVPOST</button>
            </a>
          </center>
        </div>
      </div>
      <div className="p-contain-2"></div>
    </div>
  );
};

export default Projects;
