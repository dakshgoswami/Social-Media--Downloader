import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full mx-auto flex justify-center items-center border-t-2 border-gray-500 bg-white text-black px-[20px] py-8 text-center text-sm ">
      <div className="max-w-[984px] mx-auto flex flex-col gap-5">
        {/* <nav>
          <ul className="flex items-center justify-center gap-2 font-medium text-sm md:text-base">
            <li className="hover:underline text-black hover:text-red-700 font-medium">
              <Link to="/">YouTube</Link>
            </li>
            <li className="hover:underline text-black hover:text-blue-500 font-medium">
              <Link to="/twitter">Twitter</Link>
            </li>
            <li className="hover:underline text-black hover:text-pink-600 font-medium">
              <Link to="/tiktok">TikTok</Link>
            </li>
            <li className="hover:underline text-black hover:text-red-900 font-medium">
              <Link to="/pinterest">Pinterest</Link>
            </li>
          </ul>
        </nav> */}
        <p className="text-center text-xs sm:text-sm p-2">
          This site does not host or store any videos on its servers. All
          content is directly streamed from third-party services. Use at your
          own risk and follow platform terms.
        </p>
        <hr />
        <p className="text-sm sm:text-base font-normal">
          © {new Date().getFullYear()} OnlyMedia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
