import React from "react";

const SocialTags = () => {
  return (
    <div className="w-full px-5 py-8 grid grid-cols-1">
      <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden flex flex-col md:flex-row items-center bg-white shadow-xl">
        {/* ✅ Responsive Image Wrapper */}
        <div className="w-full md:w-[40%] h-full flex justify-center items-center">
          <img
            src="/images/logo.jpg"
            alt="website-logo"
            className="w-full h-auto max-w-xs md:max-w-sm object-contain rounded-2xl"
          />
        </div>

        {/* ✅ Text Content */}
        <div className="w-full px-4 py-6 sm:px-10 flex flex-col justify-center gap-4">
          <h1 className="text-[22px] sm:text-2xl lg:text-4xl text-[#0f0f29] font-bold text-left">
            Social Media Videos Downloader
          </h1>
          <h3 className="text-[18px]/7 sm:text-base lg:text-lg text-gray-600 font-normal text-left ">
            OnlyMedia is an online web tool that helps you download YouTube,
            Twitter, TikTok, Pinterest Videos, Shorts and Reels. OnlyMedia is
            designed to be easy to use on any device, such as a mobile phone,
            tablet, or computer.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SocialTags;
