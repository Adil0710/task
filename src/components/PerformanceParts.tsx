import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa6";
import {  performanceParts } from "@/lib/data";


export default function PerformanceParts() {
  return (
    <section className=" mt-[100px] px-[150px] text-[#010212]">
      <div className=" flex justify-between items-center font-semibold">
        <h1 className=" text-[32px] ">Enhances your car Performance With Engine Part</h1>
        <p className=" text-[#1781F8] text-sm">View All</p>
      </div>

      <div className=" relative mt-6 grid grid-cols-6 gap-4">
        <div className="absolute bg-[#FCFCFD] rounded-full box-shadow h-10 w-10 flex justify-center items-center top -left-3 top-1/2 transform -translate-y-1/2">
        <FaChevronLeft />
        </div>
        <div className="absolute bg-[#FCFCFD] rounded-full box-shadow h-10 w-10 flex justify-center items-center top -right-3 top-1/2 transform -translate-y-1/2">
        <FaChevronRight />
        </div>
        {performanceParts.map((part, index) => {
          return (
            <div className=" h-[378px] p-2" key={index}>
              <div className=" h-[250px] bg-[#F9FAFB] rounded-lg flex justify-center items-center">
                <Image
                  src={part.image}
                  alt={part.title}
                  width={200}
                  height={200}
                />
              </div>
              <h2 className=" mt-2 text-sm font-medium break-words overflow-hidden text-ellipsis whitespace-nowrap">{part.title}</h2>
              <div className=" flex flex-row items-center gap-1">
                <p className=" font-semibold text-base">{part.price}</p>
                <p className=" font-medium text-[10px] text-[#475467] line-through">
                  {part.oldPrice}
                </p>
                <p className=" font-semibold text-sm text-[#34C759] ">
                  {part.offer}
                </p>
              </div>
              <Button className="mt-2 flex flex-row justify-center gap-[10px] items-center text-xs font-semibold h-12 w-full">
                <FaPlus /> ADD TO CART
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
