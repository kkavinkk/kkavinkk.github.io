import React from "react";

const FeatureGallery: React.FC = () => {
  return (
    <section id="gallery" className="px-3 py-6 max-w-7xl mx-auto">
      <span className="hash-span">&nbsp;</span>
      <div className="transform-none">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-white">
          More of me
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[60px] sm:text-[50px] sx:text-[40px] text-[30px]">
          <p className="font-sans">Feature Gallery</p>
        </h2>
      </div>
      <div className="w-ful flex">
        <div className="mt-3 text-secondary text-[17px] leading-[30px] transform-none text-white">
          A curated collection of my smaller projects, creative experiments, and
          cool things I’ve built along the way. From one-off ideas to quick
          builds, this space highlights the fun, the functional, and everything
          in between.s
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {/* Gallery element 1 */}
        <div className="transform-none">
          <div className="bg-[#261FB3] p-5 rounded-2x1 sm:w-[360px] w-full">
            <div className="relative w-full h-[230px]">
              <img
                src="src\assets\antony.jpg"
                alt="gal1"
                className="w-full h-full object-cover rounded-2x1"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1"></div>
            </div>
            <div className="mt-5">
              <div className="flex gap-2 items-center">
                <h3 className="text-white font-bold text-[24px]">ANTONY</h3>
              </div>
              <p className="mt-2 text-secondary text-[14px] text-white">
                ANTONY ANTONY ANTONY ANTONY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGallery;
