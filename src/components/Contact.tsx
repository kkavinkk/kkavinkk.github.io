import React from "react";
import { motion } from "framer-motion";

const contact: React.FC = () => {
  return (
    <section id="contact" className="px-3 py-6 max-w-7xl mx-auto">
      <span>&nbsp;</span>
      {/* fade in */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-lg flex flex-col items-start text-left bg-[#fcbb53] rounded-xl relative p-8"
      >
        <div className="w-full bg-black-100 p-8 rounded-2xl">
          <h3 className="font-black md:text-[40px] sm:text-[35px] xs:text-[30px] text-[25px]">
            Contact
          </h3>
          <p>
            I'm always down to connect and chat. Reach me on LinkedIn or Shoot
            me a message!
          </p>
          <a
            href="https://www.linkedin.com/in/kavinvasan-kumaran-7a24352a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-10 h-10 mt-2"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 10.29h-3v-4.79c0-1.14-.02-2.61-1.59-2.61s-1.84 1.25-1.84 2.53v4.87h-3v-9h2.88v1.23h.04c.4-.76 1.39-1.56 2.86-1.56 3.06 0 3.62 2.02 3.62 4.64v4.69z" />
            </svg>
          </a>
          <form className="mt-8 flex flex-col gap-6">
            {/* Name */}
            <label className="flex flex-col">
              <span className="text-black font-medium mb-2">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="bg-black py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            {/* Email */}
            <label className="flex flex-col">
              <span className="text-black font-medium mb-2">Email</span>
              <input
                type="text"
                name="email"
                placeholder="Your email"
                className="bg-black py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            {/* Message */}
            <label className="flex flex-col">
              <span className="text-black font-medium mb-2">Message</span>
              <textarea
                rows={4}
                name="message"
                placeholder="What's up?"
                className="bg-black py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-black py-2 px-6 rounded-lg outline-none w-fit text-white font-bold shadow-md shadow-primary"
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
