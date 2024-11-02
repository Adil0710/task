import React from "react";
import bgimg from "@/assets/bg.jpeg";
import Image from "next/image";
import car from "@/assets/car.png";
import Button from "./Button";
import engine from "@/assets/engine.png";
import discBrake from "@/assets/Discbrake.png";
import Icon from "./Assets";

export default function Quotation() {
  return (
    <section className="mt-[100px] px-[150px]">
      {/* Quotation */}
      <div className="relative w-full h-[340px] overflow-hidden rounded-xl">
        <Image
          src={bgimg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute top-1/2 left-[40px] right-[247px] transform -translate-y-1/2 bg-[#010212] h-[259px] rounded-lg z-10 px-10 flex flex-col justify-center">
          <h2 className="text-[#1781F8] text-[32px] font-medium leading-[48px]">
            Can't Find the Right Auto Part?
          </h2>
          <h2 className=" text-white text-[48px] font-bold leading-[72px]">
            Request Any Part for <span className=" line-through">SAR10</span>{" "}
            FREE
          </h2>
          <Button className=" rounded w-36 h-11 mt-[16px]">
            Request Quotation
          </Button>
        </div>
        <Image
          src={car}
          alt="car"
          height={630}
          width={840}
          className="absolute -right-36 z-20 top-1/2 transform -translate-y-1/2"
        />
      </div>

      {/* Shop Now */}

      <div className="mt-[100px] flex justify-between items-center gap-[42px]  text-white">
        <div className="w-full h-[413.09px] bg-[#010212] rounded-[16.52px] relative overflow-hidden">
          {/* Right Side */}
          <div className=" absolute left-0 top-0 pl-[40px] h-full justify-center flex flex-col z-50">
            <Icon name="MaroofLogo" />
            <h2 className="font-semibold text-2xl mt-[33.05px]">
              Boost Your Engine's Performance!
            </h2>
            <p className=" mt-[8.06px] font-bold text-xs leading-[18px]">
              Discover top-quality engine parts that enhance efficiency and{" "}
              <br />
              longevity. Shop now for reliable performance and exceptional{" "}
              <br />
              value.
            </p>
            <h3 className="mt-[33.05px] font-bold text-2xl">
              Click To Shop Now
            </h3>
          </div>

          {/* Left Side */}
          <div className="absolute right-0 top-0 h-full w-1/2 flex flex-col items-center justify-center">
            <div className="absolute inset-0 transform -skew-x-[20deg] bg-[#101828] w-[150%] h-full left-0" />
            <Image
              src={engine}
              alt="Engine"
              className="relative z-10 max-h-full object-contain"
              width={307}
              height={312}
            />
            <p className="relative mt-1 flex flex-row items-center justify-center text-[7.5px] gap-1 h-[14.21] w-[14.21]">
              <Icon name="SquareChecked" /> Fulfilled by{" "}
              <span className="radial">
                <Icon name="Car" />
              </span>
            </p>
          </div>
          <div className="bg-[#1781F8] w-[168.61px] h-10 bottom-0 left-0 absolute gap-1 text-xs flex flex-row justify-center items-center">
            <Icon name="SquareCheckedBig" />
            <p>Fulfilled by</p>{" "}
            <span className="bg-[#060B56] w-6 h-6 flex justify-center items-center rounded">
              <Icon name="CarBig" />
            </span>
          </div>
        </div>

        <div className="w-full h-[413.09px] bg-[#010212] rounded-[16.52px] relative overflow-hidden">
          {/* Right Side */}
          <div className=" absolute left-0 top-0 pl-[40px] h-full justify-center flex flex-col z-50">
            <Icon name="MaroofLogo" />
            <h2 className="font-semibold text-2xl mt-[33.05px]">
              Stop with Confidence!
            </h2>
            <p className=" mt-[8.06px] font-bold text-xs leading-[18px]">
              Upgrade your braking system with our high-performance brake <br />{" "}
              parts. Ensure safety and reliability with every stop. Check out
              our <br /> range today!
            </p>
            <h3 className="mt-[33.05px] font-bold text-2xl">
              Click To Shop Now
            </h3>
          </div>

          {/* Left Side */}
          <div className="absolute right-0 top-0 h-full w-1/2 flex flex-col items-center justify-center">
            <div className="absolute inset-0 transform -skew-x-[20deg] bg-[#101828] w-[150%] h-full left-0" />
            <Image
              src={discBrake}
              alt="DiscBrake"
              className="relative z-10 max-h-full object-contain"
              width={307}
              height={312}
            />
          </div>
          <div className="bg-[#1781F8] w-[168.61px] h-10 bottom-0 left-0 absolute gap-1 text-xs flex flex-row justify-center items-center">
            <Icon name="SquareCheckedBig" />
            <p>Fulfilled by</p>{" "}
            <span className="bg-[#060B56] w-6 h-6 flex justify-center items-center rounded">
              <Icon name="CarBig" />
            </span>
          </div>
        </div>
       
      </div>
      <div className=" w-full flex flex-row justify-center items-center gap-2 mt-4">
          <div className=" w-2 h-2 bg-slate-300 rounded-full"></div>
          <div className=" w-2 h-2 bg-slate-300 rounded-full"></div>
          <div className=" w-2 h-2 bg-[#060B56] rounded-full"></div>
          <div className=" w-2 h-2 bg-slate-300 rounded-full"></div>
          <div className=" w-2 h-2 bg-slate-300 rounded-full"></div>
        </div>
    </section>
  );
}
