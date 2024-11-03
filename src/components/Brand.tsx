import Image from "next/image";
import React from "react";
import {  brands} from "@/lib/data";


export default function Brands() {
  return (
    <section className=" mt-[100px] px-[150px] text-[#010212]">
      <div className=" flex justify-between items-center font-semibold">
        <h1 className=" text-[32px] ">Shop For Brand</h1>
        <p className=" text-[#1781F8] text-sm">View All</p>
      </div>

      <div className=" relative mt-6 grid grid-cols-6 gap-4">
       
        {brands.map((brand, index) => {
          return (
            <div className=" h-[120px] p-2 rounded-lg flex justify-center items-center bg-white border border-[#F2F4F7]" key={index}>
             
                <Image
                  src={brand.logo}
                  alt={brand.title}
                  width={brand.width}
                  height={brand.height}
                />
           
            </div>
          );
        })}
      </div>
    </section>
  );
}
