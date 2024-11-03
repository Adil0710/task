import React from "react";
import Image from "next/image";
import Button from "./Button";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
} from "react-icons/fa6";
import logo from "@/assets/Maroof Logo_03.png";
import Icon from "./Assets";

function BookService() {
  return (
    <section className=" mt-[100px] px-[150px]">
      <div className=" relative h-[340px] bg-[#101828] text-white border border-[#EAECF0] w-full rounded-xl px-16 gap-[50px] flex justify-center items-center flex-row">
        {/* Background Strips Positioned to the Right */}
        <div className="absolute inset-0 left-[72%] flex z-0 gap-4 -skew-x-[30deg]">
          <div className="w-[63px] h-full bg-[#1D2939]"></div>
          <div className="w-[63px] h-full bg-[#1D2939]"></div>
          <div className="w-[63px] h-full bg-[#1D2939]"></div>
        </div>
        <div>
          <Icon name="MaroofLogoBig" />
          <h1 className="text-2xl font-bold mt-4">
            Book Your Car Service in Minutes
          </h1>
          <p className="mt-1 font-medium">
            Keep your car running smoothly with our hassle-free service booking.
            Whether it&apos;s routine maintenance or urgent repairs, Maroof
            ensures your vehicle gets the attention it needs from trusted
            professionals. Enjoy the convenience of booking online and
            experience top-notch service at competitive prices.
          </p>
        </div>

        <div className="flex flex-row gap-4 items-center justify-center w-full text-[#010212] z-10">
          <div className="bg-white w-[180px] h-[161px] py-2 px-4 rounded-lg flex flex-col justify-between items-center">
            <div className="text-center">
              <p className="text-[#3C2674] text-sm font-bold">STEP 01</p>
            </div>
            <div className="bg-[#F1ECFE] h-16 w-16 rounded-lg flex justify-center items-center">
              <Icon name="NotepadColor" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold">Choose Your Service</p>
            </div>
          </div>
          <FaArrowRight color="white"/>
          <div className="bg-white w-[180px] h-[161px] py-2 px-4 rounded-lg flex flex-col justify-between items-center">
            <div className="text-center">
              <p className="text-[#D2B161] text-sm font-bold">STEP 02</p>
            </div>
            <div className="bg-[#FFF3D6] h-16 w-16 rounded-lg flex justify-center items-center">
              <Icon name="CalendarColor" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold">Choose Your Service</p>
            </div>
          </div>
          <FaArrowRight color="white"/>
          <div className="bg-white w-[180px] h-[161px] py-2 px-4 rounded-lg flex flex-col justify-between items-center">
            <div className="text-center">
              <p className="text-[#417B78] text-sm font-bold">STEP 03</p>
            </div>
            <div className="bg-[#E5F9F8] h-16 w-16 rounded-lg flex justify-center items-center">
              <Icon name="LoadingColor" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold">Choose Your Service</p>
            </div>
          </div>
        </div>

        <Button className="mt-2 flex flex-row justify-center gap-[10px] items-center text-xs font-bold h-12 w-1/2 z-10">
          BOOK SERVICE NOW
          <FaArrowRight />
        </Button>
      </div>
    </section>
  );
}

export default BookService;
