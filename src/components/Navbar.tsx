"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/Maroof Logo_03.png";
import { FaChevronDown } from "react-icons/fa";
import Icon from "./Assets";
import Button from "./Button";
import { navLinks } from "@/lib/data";
import Link from "next/link";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>(navLinks[0].name);
  return (
    <nav className=" font-medium  text-[#010212]">
      {/* Upper Side */}

      <div className=" py-[10px] px-[150px] flex justify-between">
        {/* Left Side */}

        <div className=" flex flex-row items-center justify-center gap-10">
          <Image src={logo} alt="Logo" width={60} />
          <div className=" flex flex-row justify-center items-center gap-2">
            <Icon name="Location" />
            <div>
              <p className="text-[#475467] text-[10px] leading-[15px]">
                Delivery Address
              </p>
              <p className="text-[12px] flex flex-row items-center gap-2 leading-[18px]">
                Jeddah <FaChevronDown size={10} />
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className=" flex flex-row  items-center justify-center gap-4">
          <Icon name="Language"/>
          <Button className="w-[82px] h-[40px]">Signing</Button>
          <Icon name="HamBurger" />
        </div>
      </div>

      {/* Bottom Side */}

      <div className="border-t border-t-[#ececec] h-[48px] flex justify-center items-center">
        <ul className="flex gap-[24px] text-sm h-full">
          {navLinks.map((link, index) => {
            const isActive = activeLink === link.name;

            return (
              <li
                key={index}
                className="h-full flex flex-col items-center justify-center relative"
              >
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`flex flex-col items-center h-full justify-center ${
                    isActive ? "text-[#010212] font-semibold" : "text-[#475467]"
                  }`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-full border-b-2 border-black"></span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
