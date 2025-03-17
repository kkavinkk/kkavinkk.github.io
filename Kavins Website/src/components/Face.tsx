import React from "react";

const Face: React.FC = () => {
  return (
    <div className="absolute inset-0 top-[120px] max-w-7x1 mx-auto sm:px-16 px-3 flex flex-row items-start gap-5">
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 squared-full bg-black"></div>
        <div className="w-1 sm:h-80 h-40 bg-black"></div>
      </div>
      <div className="flex flex-col justify-center z-10 relative">
        <h1 className="text-[#3559F4] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px">
          <p className="name">WAGWAN CRODIE!</p>
        </h1>
        <h1 className="font-black text-white lg:texxt-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-black">
          <span className="text-[#529dff] font-mono">Kavinvasan</span>
          <span> </span>
          <span className="text-[#f43535] font-serif">Kumaran</span>
        </h1>
        <p className="text-black font-mediem lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-black-100 realtive z-10">
          <span className="text-[#00000]">Software Engineering @ UAlberta</span>
          <br className="sm:block hidden" />
        </p>
        <br />
        <div className="flex item-center gap-3">
          <a
            href="https://github.com/kkavinkk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Face;
