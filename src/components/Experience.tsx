import React from "react";
import "react-vertical-timeline-component/style.min.css";

const Experience: React.FC = () => {
  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7x1 mx-auto relative z-0 bg-black">
      <span className="hach-span" id="work">
        &nbsp;
      </span>
      <div className="opacity-100 transform-none">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          <p>Experience</p>
        </h2>
      </div>
      <div className="mt-20 flex flex-col">
        <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
          <div id="" className="vertical-timeline-element">
            <span className="vertical-timeline-element-icon bounce-in bg-white cursor-pointer">
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src="src/assets/antony.jpg"
                  alt="ANTONY"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            </span>
            <div
              className="vetical-timeline-element-content bounce-in cursor-pointer"
              style={{
                background: "rgb(4, 54, 95)",
                color: "rgb(255, 255, 255)",
              }}
            >
              <div
                className="vertical-timeline-element-content-arrow"
                style={{
                  borderLeft: "7px solid white",
                  background: "rgb(29, 24, 54)",
                  color: "rgb(255, 255, 255)",
                }}
              ></div>
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  Design Member
                </h3>
                <p className="text-secondary text-[16px] font-semibold m-0"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
