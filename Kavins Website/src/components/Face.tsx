import React from "react";

const Face: React.FC = () => {
  return (
    <div className="absolute inset-0 top-[120px] max-w-7x1 mx-auto sm:px-16 px-3 flex flex-row items-start gap-5">
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#FFE5B4]"></div>
        <div className="w-1 sm:h-80 h-40 gold-gradient"></div>
      </div>
      <div className="flex flex-col justify-center z-10 relative">
        <h1 className="text-[#3559F4] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px">
          <p className="name">WAGWAN CRODIE!</p>
        </h1>
      </div>
    </div>
  );
};

export default Face;
