import React from "react";
//import videoBg from "../assets/Face.mp4";

const Face: React.FC = () => {
  return (
    // <div className="relative w-full h-screen overflow-hidden">
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     className="absolute w-full h-full object-cover"
    //   >
    //     <source src={videoBg} type="video/mp4" />
    //   </video>
    <div className="absolute inset-0 top-[120px] max-w-7x1 mx-auto sm:px-16 px-3 flex flex-row items-start gap-5">
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 square-full bg-black"></div>
        <div className="w-1 sm:h-86 h-40 bg-black"></div>
      </div>
      <div className="flex flex-col justify-center z-10 relative">
        <h1 className="text-[#3559F4] font-serif lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px">
          <p className="name">👋Hi, My name is </p>
        </h1>
        <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-black">
          <span className="text-[#6acfff] font-sans drop-shadow-[0_0_10px_#529dff]">
            Kavinvasan
          </span>
          <span> </span>
          <span className="text-white font-sans drop-shadow-[0_0_10px_#529dff]">
            KUMARAN
          </span>
        </h1>
        <p className="text-black font-mediem lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-black-100 realtive z-10">
          <span className="text-[#ffffff] drop-shadow-[0_0_10px_#529dff]">
            Software Engineering @ UAlberta
          </span>
          <br className="sm:block hidden" />
        </p>
        <br />
        <div className="flex item-center gap-3 drop-shadow-[0_0_10px_#529dff]">
          {/* GitHub */}
          <a
            href="https://github.com/kkavinkk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.31 2.797 7.97 6.675 9.26.488.09.665-.21.665-.47 0-.23-.009-.84-.014-1.65-2.716.59-3.29-1.31-3.29-1.31-.445-1.14-1.086-1.44-1.086-1.44-.89-.605.07-.59.07-.59 1.003.07 1.53 1.03 1.53 1.03.875 1.5 2.295 1.07 2.855.82.09-.635.34-1.07.615-1.315-2.17-.25-4.455-1.085-4.455-4.83 0-1.07.375-1.945 1.005-2.63-.1-.25-.435-1.27.1-2.64 0 0 .82-.26 2.69 1.005A9.26 9.26 0 0 1 12 6.84c.83.005 1.67.11 2.46.32 1.865-1.265 2.685-1.005 2.685-1.005.54 1.37.205 2.39.1 2.64.63.685 1.005 1.56 1.005 2.63 0 3.75-2.29 4.575-4.465 4.83.35.3.66.885.66 1.785 0 1.29-.01 2.33-.01 2.64 0 .265.175.565.67.47 3.87-1.29 6.665-4.95 6.665-9.26 0-5.385-4.365-9.75-9.75-9.75z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kavinvasan-kumaran-7a24352a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:text-[#004182]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
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
            className="text-[#E4405F] hover:text-[#C13584]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 100-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.5a1 1 0 100 2 1 1 0 100-2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Face;
