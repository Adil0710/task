'use client'
import React from "react";
import shopCategory from "./Data";
import Image from "next/image";
import carworking from "@/assets/carworking.png"
import Button from "./Button";



export default function Category() {
  return (
    <section className=" mt-[100px] px-[150px] text-[#010212] pb-[500px]">
      <div className=" flex justify-between items-center font-semibold">
        <h1 className=" text-[32px]">Shop By Category</h1>
        <p className=" text-[#1781F8] text-sm">View All</p>
      </div>

      <div className=" mt-6 grid grid-cols-6 gap-4">
        {shopCategory.map((cat, index) => {
          return (
            <div className=" rounded h-[240px] bg-white border border-[#F2F4F7] flex justify-center items-center" key={index}>
              <div className=" w-[146px] h-[138px] justify-between items-center flex flex-col">
                <>{cat.logo}</>
                <p className="font-medium text-xs">{cat.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative w-full h-[340px] bg-[#F1ECFE] mt-[100px] rounded-xl overflow-hidden flex items-center">
        <div className=" absolute -right-[20%] top-0 w-[680px] h-[680px] rounded-full bg-[#3C2674] z-0"></div>
        <Image
          src={carworking}
          alt="car"
          height={340}
          width={600}
          className="absolute right-0"
        />
        <div className=" pl-20 w-1/2 ">
            <h1 className=" text-[#3C2674] font-bold text-[40px]">Car Service at Your Fingertips</h1>
            <p className="font-medium text-2xl">Book car servicing with top-rated providers right from the app. Quality service, hassle-free scheduling!</p>
            <Button className="mt-4 text-base font-medium bg-[#3C2674] rounded h-11 ">Schedule Now</Button>
        </div>
      </div>
    </section>
  );
}
