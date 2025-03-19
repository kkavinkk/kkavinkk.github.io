import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="bg-black">
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="about">
          &nbsp;
        </span>
        {/* Motion Div for Fade-in Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Fade in when in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true }} // Only animate once
          className="flex flex-col items-center text-center"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              About Me
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6">
              <img
                src="src/assets/kavin.png"
                className="w-80 h-auto object-cover rounded-lg border-4 border-white"
                alt="Image"
              />
              <div className="max-w-xl text-left">
                <p className="text-white sm:text-[18px] text-[14px] tracking-wider">
                  🥷🏼Hey!
                  <span className="text-[#2be5c6]"> My name is Kavin</span>. I'm
                  a second year Software Engineering student at the University
                  of Alberta in Edmonton, Canada. I am always committed to
                  learning new skills and technologies to create practical
                  tools.
                  <br />
                  <br />
                  🚀 I aspire to be an engineer who creates technology that
                  drives meaningful change, solving real-world problems and
                  making a deep impact on people's lives globally.
                </p>
                <p className="text-gray-400 text-[17px] leading-[30px] mt-4">
                  🏍️ Hobbies: Motorcycling, Mechanics, Programming, Cricket
                  <br />
                  Let's Connect!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
