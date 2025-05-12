import React from "react";
import "react-vertical-timeline-component/style.min.css";

//import FSAELOGO from "./public/FSAE.png"; // adjust path as needed

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  description: string;
  image: string;
  bgColor: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "TechNerds Solutions",
    date: "April 2025 - Present",
    description:
      "•	Working as a Software Engineering Intern, developing and improving web and mobile applications to deliver efficient, user-friendly digital solutions.",
    image: "/TechNerds.jpg",
    bgColor: "rgb(4, 54, 95)",
  },
  {
    title: "Low Voltage Design Member",
    company: "UAlbertaFSAE Racing",
    date: "Aug 2024 - Present",
    description:
      "•	Sourcing and specking components for the Low Voltage Electronics subsystem, ensuring compliance with Formula SAE(FSAE) regulations.",
    image: "/FSAE.png",
    bgColor: "rgb(4, 54, 95)",
  },
  {
    title: "Frontend Developer & Social Media Manager",
    company: "Apollo Jerseys",
    date: "Dec 2022 - Present",
    description:
      "• Frontend Developer and Social Media Manager building a sleek eCommerce website with a focus on UI/UX, responsiveness, and performance, while also managing digital presence and engagement across social platforms.",
    image: "/Apollo.jpg",
    bgColor: "rgb(4, 54, 95)",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="w-full bg-black py-16 px-6 relative">
      <span className="hach-span" id="experience">
        &nbsp;
      </span>

      <div className="opacity-100 transform-none">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Experience
        </h2>
      </div>

      <div className="mt-5 flex flex-col">
        <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns ">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>
          {experiences.map((exp, index) => (
            <div className="vertical-timeline-element" key={index}>
              <span className="vertical-timeline-element-icon bounce-in bg-white cursor-pointer">
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              </span>

              <div
                className="vertical-timeline-element-content bounce-in cursor-pointer"
                style={{ background: exp.bgColor, color: "#fff" }}
              >
                <div
                  className="vertical-timeline-element-content-arrow"
                  style={{
                    borderLeft: "0px solid white",
                    background: "rgba(182, 40, 40, 0)",
                  }}
                ></div>
                <div>
                  <h3 className="text-white text-[24px] font-bold">
                    {exp.title}
                  </h3>
                  <h4 className="text-gray-400 text-[16px] font-semibold m-0">
                    {exp.company}
                  </h4>
                  <p className="text-gray-300 mt-2 text-sm">
                    {exp.description}
                  </p>
                  <p className="text-gray-400 text-xs mt-1 italic">
                    {exp.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
