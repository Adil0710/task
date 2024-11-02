import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaArrowRight, FaPlus } from "react-icons/fa6";
import { carParts } from "@/lib/data";
import logo from "@/assets/Maroof Logo_03.png";
import Icon from "./Assets";

export default function Offers() {
  return (
    <section className=" mt-[100px] px-[150px] text-[#010212]">
      <div className=" flex justify-between items-center font-semibold">
        <h1 className=" text-[32px] ">Offers on Car Parts</h1>
        <p className=" text-[#1781F8] text-sm">View All</p>
      </div>

      <div className=" mt-6 grid grid-cols-6 gap-4">
        {carParts.map((part, index) => {
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
              <h2 className=" mt-2 text-sm font-medium">{part.title}</h2>
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

      <div className="h-[340px] bg-[#F9FAFB] border border-[#EAECF0] w-full mt-[100px] rounded-xl px-16 gap-[50px] flex justify-center items-center flex-row">
        <div>
          <Image src={logo} alt="logo" width={125} />
          <h1 className="text-2xl font-bold mt-4">
            Get the Right Part in Just 3 Simple Steps!
          </h1>
          <p className="mt-1 text-[#475467] font-medium">
            Effortlessly find the perfect car part for your needs. Simply log
            in, fill in your request details, and submit. Then, sit back and let
            the quotes roll in from trusted suppliers. It&apos;s that easy!
          </p>
        </div>

        <div className="flex flex-row gap-4 items-center justify-center w-full">
          <div className="bg-[#F1ECFE] w-[180px] h-[219px] py-6 px-4 rounded-lg flex flex-col justify-between items-center">
            <div className="bg-[#3C2674] h-16 w-16 rounded-lg flex justify-center items-center">
              <Icon name="Download" />
            </div>
            <div className="text-center">
              <p className="text-[#3C2674] text-xs font-bold">
                Log In or Sign Up
              </p>
              <p className="mt-1 text-[10px] font-medium">
                Access your Maroof account to start posting a request.
              </p>
            </div>
          </div>
          <FaArrowRight />
          <div className="bg-[#FFF3D6] w-[180px] h-[219px] py-6 px-4 rounded-lg flex flex-col justify-between items-center">
            <div className="bg-[#D2B161] h-16 w-16 rounded-lg flex justify-center items-center">
              <Icon name="NotePad" />
            </div>
            <div className="text-center">
              <p className="text-[#D2B161] text-xs font-bold">
                Fill in the Details
              </p>
              <p className="mt-1 text-[10px] font-medium">
                Enter the car part name, model, and any specific requirements,
                then set your budget.
              </p>
            </div>
          </div>
          <FaArrowRight />
          <div className="bg-[#E5F9F8] w-[180px] h-[219px] py-6 px-4 rounded-lg flex flex-col justify-between items-center">
            <div className="bg-[#417B78] h-16 w-16 rounded-lg flex justify-center items-center">
              <Icon name="TimeWatch" />
            </div>
            <div className="text-center">
              <p className="text-[#417B78] text-xs font-bold">
                Submit & Wait for Quotes
              </p>
              <p className="mt-1 text-[10px] font-medium">
                Submit your request and receive quotations from multiple
                suppliers.
              </p>
            </div>
          </div>
        </div>

        <Button className="mt-2 flex flex-row justify-center gap-[10px] items-center text-xs font-bold h-12 w-1/4">
          POST REQUEST
          <FaArrowRight />
        </Button>
      </div>
    </section>
  );
}
