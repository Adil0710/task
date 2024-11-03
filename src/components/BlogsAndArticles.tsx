import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import redcar from "@/assets/redcar.jpg";
import { blogsAndArticles } from "@/lib/data";

function BlogsAndArticles() {
  return (
    <section className=" mt-[100px] px-[150px] text-[#010212]">
      <div className=" flex justify-between items-center font-semibold">
        <h1 className=" text-[32px] ">Blogs & Articles</h1>
        <p className=" text-[#1781F8] text-sm">View All</p>
      </div>

      <div className=" relative mt-6 grid grid-cols-6 gap-4">
        <div className="absolute bg-[#FCFCFD] rounded-full box-shadow h-10 w-10 flex justify-center items-center top -left-5 top-1/2 transform -translate-y-1/2">
          <FaChevronLeft />
        </div>
        <div className="absolute bg-[#FCFCFD] rounded-full box-shadow h-10 w-10 flex justify-center items-center top -right-5 top-1/2 transform -translate-y-1/2">
          <FaChevronRight />
        </div>

       {
        blogsAndArticles.map((blog, index) => {
            return (
                <div className=" h-[257px] p-2" key={index}>
                <Image src={blog.image} alt={blog.title} className="rounded-lg" />
      
                <h2 className="font-semibold text-sm mt-2">
                 {blog.title}
                </h2>
                <p className=" text-[#475467] text-xs overflow-hidden text-ellipsis break-words whitespace-nowrap">
                 {blog.description}
                </p>
                <p className="text-[#475467] font-normal text-[10px] mt-2">
                  {blog.date}
                </p>
              </div>
            )
        }) 
       }
      </div>
    </section>
  );
}

export default BlogsAndArticles;
