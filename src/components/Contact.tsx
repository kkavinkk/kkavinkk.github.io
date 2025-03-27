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
      {/* BUILT WITH LOVE AND AN IRRITATION TO BE BETTER */}
      <footer className="bg-white bottom-0">
        <p className="text-white">Kavin.K</p>
        <p>Built with ❤️ and an irritation to be better</p>
        <p>© Kavinvasan Kumaran 2025</p>
        <div className="flex item-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/kkavinkk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.31 2.797 7.97 6.675 9.26.488.09.665-.21.665-.47 0-.23-.009-.84-.014-1.65-2.716.59-3.29-1.31-3.29-1.31-.445-1.14-1.086-1.44-1.086-1.44-.89-.605.07-.59.07-.59 1.003.07 1.53 1.03 1.53 1.03.875 1.5 2.295 1.07 2.855.82.09-.635.34-1.07.615-1.315-2.17-.25-4.455-1.085-4.455-4.83 0-1.07.375-1.945 1.005-2.63-.1-.25-.435-1.27.1-2.64 0 0 .82-.26 2.69 1.005A9.26 9.26 0 0 1 12 6.84c.83.005 1.67.11 2.46.32 1.865-1.265 2.685-1.005 2.685-1.005.54 1.37.205 2.39.1 2.64.63.685 1.005 1.56 1.005 2.63 0 3.75-2.29 4.575-4.465 4.83.35.3.66.885.66 1.785 0 1.29-.01 2.33-.01 2.64 0 .265.175.565.67.47 3.87-1.29 6.665-4.95 6.665-9.26 0-5.385-4.365-9.75-9.75-9.75z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kavinvasan-kumaran-7a24352a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 10.29h-3v-4.79c0-1.14-.02-2.61-1.59-2.61s-1.84 1.25-1.84 2.53v4.87h-3v-9h2.88v1.23h.04c.4-.76 1.39-1.56 2.86-1.56 3.06 0 3.62 2.02 3.62 4.64v4.69z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kavinn_kk/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 100-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.5a1 1 0 100 2 1 1 0 100-2z" />
            </svg>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default contact;
