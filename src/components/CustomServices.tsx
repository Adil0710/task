import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { customService } from "./Data";

export default function CustomServices() {
  return (
    <section className=" mt-[100px] px-[150px] text-[#010212]">
      <div className=" flex justify-between items-center font-semibold">
        <h1 className=" text-[32px] ">Shop For Brand</h1>
        <p className=" text-[#1781F8] text-sm">View All</p>
      </div>

      <div className=" relative mt-6 grid grid-cols-4 gap-4">
        {customService.map((service, index) => {
          return (
            <div
              className=" h-[96px] p-2 rounded-lg flex justify-between items-center bg-[#F9FAFB] border border-[#F2F4F7] px-5"
              key={index}
            >
              <div className=" flex flex-row items-center gap-6">
                <>{service.logo}</>
                <div className=" flex flex-col">
                  <h2 className=" font-semibold text-lg">{service.title}</h2>
                  <p className="text-xs font-medium text-[#475467]">
                    {service.description}
                  </p>
                </div>
              </div>

              <FaChevronRight size={12} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
