"use client";
import React from "react";
import Icon from "./Assets";
import Button from "./Button";
import { about, policy, quickLinks } from "@/lib/data";

function Footer() {
  return (
    <footer className=" text-white">
      <div className=" h-[344px] w-full bg-[#1781F8] mt-10 px-[150px] flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-[56px]">Download Our Mobile App</h1>
          <p className=" mt-1 font-medium text-base">
            Access all our services at your fingertips! Download our mobile app
            to browse products, <br /> receive quotations, and manage your
            orders anytime, anywhere.
          </p>
        </div>
        <div>
          <Button className=" bg-white rounded-md flex flex-row justify-center items-center h-16 gap-2">
            {" "}
            <Icon name="GooglePlayLogo" /> <Icon name="GooglePlay" />
          </Button>
          <Button className=" bg-white rounded-md flex flex-row justify-center items-center h-16 gap-2 mt-4">
            {" "}
            <Icon name="AppleStoreLogo" /> <Icon name="AppleStore" />
          </Button>
        </div>
      </div>

      <div className=" h-[694px] bg-[#010212] px-[150px]">
        <div className=" pt-[100px] flex flex-row justify-between">
          {/* Left Side */}
          <div className=" w-[31%]">
            <Icon name="MaroofLogoBig" />
            <p className=" mt-6 font-medium text-base">
              Experience excellence with Maroof – Your trusted partner for auto
              parts and services.
            </p>
          </div>

          {/* Right Side */}
          <div className=" grid grid-cols-3 gap-16">
            <div>
              <h2 className=" font-bold text-sm tracking-widest">ABOUT</h2>
              <ul className=" mt-4 flex flex-col gap-1">
                {about.map((link, index) => {
                  return (
                    <li className=" font-medium text-xs" key={index}>
                      {link.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              {" "}
              <h2 className=" font-bold text-sm tracking-widest">POLICY</h2>
              <ul className=" mt-4 flex flex-col gap-1">
                {policy.map((link, index) => {
                  return (
                    <li className=" font-medium text-xs" key={index}>
                      {link.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              {" "}
              <h2 className=" font-bold text-sm tracking-widest">
                QUICK LINKS
              </h2>
              <ul className=" mt-4 flex flex-col gap-1">
                {quickLinks.map((link, index) => {
                  return (
                    <li className=" font-medium text-xs" key={index}>
                      {link.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-10 mt-16 flex flex-row justify-between items-center">
          {/* Left Side */}
          <div className=" flex flex-row items-center gap-6">
            <div className=" h-10 flex items-center justify-center w-10 rounded-full bg-[#101828]">
              <Icon name="Facebook" />
            </div>
            <div className=" h-10 flex items-center justify-center w-10 rounded-full bg-[#101828]">
              <Icon name="Instagram" />
            </div>
            <div className=" h-10 flex items-center justify-center w-10 rounded-full bg-[#101828]">
              <Icon name="Twitter" />
            </div>
            <div className=" h-10 flex items-center justify-center w-10 rounded-full bg-[#101828]">
              <Icon name="LinkedIn" />
            </div>
          </div>

          {/* Right Side */}
          <div className=" flex flex-row gap-2">
            <Button className=" flex flex-row items-center justify-center h-10 gap-1.5">
              <Icon name="CarButton" /> Car Service
            </Button>
            <Button className=" flex flex-row items-center justify-center h-10 gap-1.5">
              <Icon name="Quotes" /> Get Quotation
            </Button>
          </div>
        </div>

        <div className=" mt-16 flex flex-row justify-between">
          {/* Left Side */}
          <div>
            <h2 className="font-bold text-[40px]">Download Our Mobile App</h2>
            <p className=" mt-1 text-xs font-medium">
              Access all our services at your fingertips! Download our mobile
              app to browse products, <br /> receive quotations, and manage your
              orders anytime, anywhere.
            </p>
          </div>

          {/* Right Side */}
          <div className=" flex flex-row gap-4 items-center justify-center">
            <Button className=" bg-white rounded-md flex flex-row justify-center items-center h-14 gap-2">
              {" "}
              <Icon name="GooglePlayLogo" /> <Icon name="GooglePlay" />
            </Button>
            <Button className=" bg-white rounded-md flex flex-row justify-center items-center h-14 gap-2">
              {" "}
              <Icon name="AppleStoreLogo" /> <Icon name="AppleStore" />
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center border-t border-t-[#e9e9e9] h-[42px] mt-16">
          <p className="font-medium text-xs absolute bottom-0">© Copyright 2024, All Rights Reserved by Maroof</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
