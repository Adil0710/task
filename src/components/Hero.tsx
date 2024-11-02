"use client";
import { heroLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import bgcar from "@/assets/bgcar.png";
import Button from "./Button";
import Icon from "./Assets";
import { FaChevronRight } from "react-icons/fa";

export default function Hero() {
  const [activeLink, setActiveLink] = useState<string>(heroLinks[0].name);
  return (
    <section className="text-white">
      {/* Upper Side */}
      <div className="bg-[#010212] h-[40px] flex flex-col justify-center items-center">
        <ul className="flex gap-[16px] text-[12px] h-full">
          {heroLinks.map((link, index) => {
            const isActive = activeLink === link.name;

            return (
              <li
                key={index}
                className="h-full flex flex-col items-center justify-center relative"
              >
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`px-2 flex flex-col items-center h-full justify-center ${
                    isActive ? " bg-[#101828]" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Side */}

      <div className=" bg-[#101828] w-full h-[400px] relative flex  items-center">
        <Image
          src={bgcar}
          alt="car"
          priority
          width={578.18}
          height={340}
          className="absolute left-0 top-8 z-0"
        />

        <div className="z-10 px-[170px] w-full flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[40px]">Search By Vehicle</h1>
            <div className="flex items-center w-[297.67px]">
              <label htmlFor="vin" className="text-[12px] mr-[8px]">
                VIN Number:
              </label>
              <div className="flex h-[40px] flex-1">
                <input
                  type="text"
                  id="vin"
                  className="text-black h-full rounded-l-[8px] focus:outline-none w-full py-[10px] px-3 placeholder:text-[#D0D5DD]"
                  placeholder="TG13AA1234"
                />
                <Button className="rounded-r-[8px] rounded-l-[0px] h-full">
                  <Icon name="Search" />
                </Button>
              </div>
            </div>
          </div>

          <div className="h-[56px] flex items-center gap-3 justify-between mt-[24px] text-[#010212] text-[12px] font-semibold">
            <select
              name="brand"
              id="brand"
              defaultValue=""
              className="h-full w-[351.25px] px-3 rounded-md focus:outline-none"
            >
              <option value="" disabled>
                Select Brand
              </option>
            </select>

            <select
              name="model"
              id="model"
              defaultValue=""
              className="h-full w-[351.25px] px-3 rounded-md focus:outline-none"
            >
              <option value="" disabled>
                Select Model
              </option>
            </select>

            <select
              name="year"
              id="year"
              defaultValue=""
              className="h-full w-[351.25px] px-3 rounded-md focus:outline-none"
            >
              <option value="" disabled>
                Select Year
              </option>
            </select>

            <select
              name="fuel"
              id="fuel"
              defaultValue=""
              className="h-full w-[351.25px] px-3 rounded-md focus:outline-none"
            >
              <option value="" disabled>
                Select Fuel
              </option>
            </select>

            <Button className="w-[119px] h-full">Search Parts</Button>
          </div>
        </div>
      </div>

      <div className=" flex flex-row justify-between items-center mt-[100px] px-[150px] text-[#010212]">

        <div className=" bg-[#F1EDFD] w-[393px] h-[89px] rounded-xl px-5 flex flex-row items-center justify-between">
          <div className=" flex flex-row items-center gap-3">
            <div className=" w-10 h-10 bg-[#3C2674] rounded-lg flex justify-center items-center">
              <Icon name="Percentage" />
            </div>
            <div>
              <p className="text-lg font-semibold">Get 15% Off on Car Parts</p>
              <p className="text-base font-medium text-[#3C2674]">Shop Now</p>
            </div>
          </div>
          <FaChevronRight />
        </div>

        <div className=" bg-[#FFF3D6] w-[393px] h-[89px] rounded-xl px-5 flex flex-row items-center justify-between">
          <div className=" flex flex-row items-center gap-3">
            <div className=" w-10 h-10 bg-[#D2B161] rounded-lg flex justify-center items-center">
              <Icon name="NotepadCheck" />
            </div>
            <div>
              <p className="text-lg font-semibold">Book a Service Appointment</p>
              <p className="text-base font-medium text-[#D2B161]">Pre-Booking</p>
            </div>
          </div>
          <FaChevronRight />
        </div>

        <div className=" bg-[#FCEDF2] w-[393px] h-[89px] rounded-xl px-5 flex flex-row items-center justify-between">
          <div className=" flex flex-row items-center gap-3">
            <div className=" w-10 h-10 bg-[#C68A9E] rounded-lg flex justify-center items-center">
              <Icon name="UserChecked" />
            </div>
            <div>
              <p className="text-lg font-semibold">Expert Mechanic Consultation</p>
              <p className="text-base font-medium text-[#C68A9E]">In 15 Min</p>
            </div>
          </div>
          <FaChevronRight />
        </div>

        <div className=" bg-[#E5F9F8] w-[393px] h-[89px] rounded-xl px-5 flex flex-row items-center justify-between">
          <div className=" flex flex-row items-center gap-3">
            <div className=" w-10 h-10 bg-[#417B78] rounded-lg flex justify-center items-center">
              <Icon name="TruckChecked" />
            </div>
            <div>
              <p className="text-lg font-semibold">Order Parts Online</p>
              <p className="text-base font-medium text-[#417B78]">At Home</p>
            </div>
          </div>
          <FaChevronRight />
        </div>
      </div>

    </section>
  );
}
