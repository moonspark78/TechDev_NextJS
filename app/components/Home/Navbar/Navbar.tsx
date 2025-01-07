"use client";

import React, { useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { BsLightningChargeFill } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-[90%] bg-white shadow-lg px-6 py-3 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <GrTechnology size={24} className="text-blue-500" />
        <span className="font-bold text-blue-500 text-lg">TechDev</span>
      </div>

      {/* Middle Links */}
      <div className="hidden md:flex space-x-8">
        {["Home", "Features", "Services", "Reviews", "Teams", "Pricing", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-500 transition font-medium"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Button */}
      <div className="hidden md:flex items-center">
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition">
          <BsLightningChargeFill className="mr-2" />
          Create Account
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <CgMenu
          size={28}
          className="text-gray-700 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-start px-6 py-4">
          {/* Close Icon */}
          <div className="flex items-center justify-between w-full mb-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <GrTechnology size={24} className="text-blue-500" />
              <span className="font-bold text-blue-500 text-lg">TechDev</span>
            </div>
            <IoClose
              size={28}
              className="text-gray-700 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4 w-full">
            {["Home", "Features", "Services", "Reviews", "Teams", "Pricing", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-500 transition font-medium border-b border-gray-300 pb-2 w-full"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Button */}
          <button className="mt-8 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition self-start">
            <BsLightningChargeFill className="mr-2" />
            Create Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
