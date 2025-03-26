import React from "react";
import { motion } from "framer-motion";

const contact: React.FC = () => {
  return (
    <section id="contact" className="px-3 py-6 max-w-7xl mx-auto">
      <span>&nbsp;</span>
      {/* fade in */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }} // Only animate once
        className="flex flex-col items-center text-left bg-white rounded"
      >
        <div className="flex-[0.75] bg-black-100 p-8 rounded-2x1">
          <h3 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact
          </h3>
          <p>Im always down to connect and shat shoot me a message!</p>
          <form className="mt-12 flex flex-col gap-8">
            {/* name */}
            <label className="flex flex-col">
              <span className="text-black font-medium mb-4">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Please Type your name"
                className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            {/* Email */}
            <label className="flex flex-col">
              <span className="text-black font-medium mb-4">Email</span>
              <input
                type="text"
                name="email"
                placeholder="Please type email address"
                className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            {/* Message */}
            <label className="flex flex-col">
              <span className="text-black font-medium mb-4">Message</span>
              <textarea
                rows={6}
                name="message"
                placeholder="What up?"
                className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default contact;
