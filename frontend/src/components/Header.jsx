import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  // console.log(isMenuOpen);
  return (
    <header className="w-full mx-auto border-b-2 border-gray-500 bg-white px-[20px] py-[6px]">
      <div className="max-w-[984px] h-16 mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/images/logo.png" alt="" className="size-10 sm:size-12" />
          <h1 className="text-xl md:text-2xl font-bold text-black">
            OnlyMedia
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-6 font-medium text-sm md:text-base">
            <li className="hover:underline text-black hover:text-red-700 font-bold">
              <Link to="/">YouTube</Link>
            </li>
            <li className="hover:underline text-black hover:text-blue-500 font-bold">
              <Link to="/twitter">Twitter</Link>
            </li>
            <li className="hover:underline text-black hover:text-pink-600 font-bold">
              <Link to="/tiktok">TikTok</Link>
            </li>
            <li className="hover:underline text-black hover:text-red-900 font-bold">
              <Link to="/pinterest">Pinterest</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <div
          className="sm:hidden block text-2xl text-gray-700 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <IoMenu />
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-zinc-100 text-zinc-900 z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold">Menu</h2>
            <div
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <IoClose />
            </div>
          </div>
          <ul className="flex flex-col gap-6 px-4 py-6 text-base">
            <Link
              to="/"
              className="hover:underline text-zinc-900 hover:text-red-700 font-bold bg-zinc-300 p-2 rounded-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <li>YouTube</li>
            </Link>
            <Link
              to="/twitter"
              className="hover:underline text-zinc-900 hover:text-blue-500 font-bold bg-zinc-300 p-2 rounded-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <li>Twitter</li>
            </Link>
            <Link
              to="/tiktok"
              className="hover:underline text-zinc-900 hover:text-pink-600 font-bold bg-zinc-300 p-2 rounded-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <li>TikTok</li>
            </Link>
            <Link
              to="/pinterest"
              className="hover:underline text-zinc-900 hover:text-red-900 font-bold bg-zinc-300 p-2 rounded-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <li>Pinterest</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
