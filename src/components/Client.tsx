import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import johnd from "@/assets/johnd.jpg";
import { clients } from "@/lib/data";

function Client() {
  return (
    <section className=" mt-[124px] px-[150px] text-[#010212]">
      <div className=" flex justify-between items-center font-semibold">
        <h1 className=" text-[32px] ">Our Clients Love Us!</h1>
        <p className=" text-sm flex flex-row gap-8">
          <FaChevronLeft size={12} /> <FaChevronRight size={12} />
        </p>
      </div>

      <div className=" relative mt-6 grid grid-cols-3 gap-4">
        {clients.map((client, index) => {
          return (
            <div
              className=" h-[260px] p-10 flex flex-col justify-between"
              key={index}
            >
              <h2 className="font-medium text-base">"{client.description}"</h2>

              <div className=" flex flex-row gap-2 items-center ">
                <Image
                  src={client.image}
                  alt={client.name}
                  className="rounded-md h-16 w-16 object-cover"
                />
                <div>
                  <h2 className=" font-semibold text-sm">{client.name}</h2>
                  <p className="font-medium text-xs text-[#475467]">
                    {client.designation}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-[80px]">
        <h1 className=" font-bold text-[32px]">
          Maroof – Your Trusted Online Marketplace for Auto Parts
        </h1>
        <p className=" text-[#475467] font-medium text-sm mt-2">
          Owning a car grants you the freedom to navigate your day with ease,
          free from the constraints of public transportation schedules and
          unexpected delays. With your own vehicle, you have the flexibility to
          manage both business and leisure travel as you see fit. This autonomy
          has significantly contributed to the growing number of vehicles on the
          road, including passenger cars, trucks, and buses. To put this into
          perspective, there were only 500 million cars globally in 1986. By
          2010, that number had soared to 1 billion. According to the
          International Energy Agency, nearly 25 percent of the world’s
          population is expected to own a car by 2035, with the total number of
          vehicles projected to reach 1.7 billion. This surge in vehicle
          ownership drives the demand for auto parts. Maroof is here to meet
          that demand with a streamlined, efficient marketplace designed to make
          buying and selling auto parts easier and more convenient.
        </p>
        <h2 className=" font-bold text-2xl mt-6">What Maroof Offers</h2>
        <p className=" text-[#475467] font-medium text-sm mt-2">
          Established in 2023, Maroof has been dedicated to simplifying the
          process of purchasing and selling auto parts. Our platform connects
          car owners with a wide range of suppliers, offering an extensive
          selection of branded, original parts. Our continuously updated
          catalogs feature top-quality replacement parts from trusted and
          reputable brands. Maroof provides suppliers with a platform to
          showcase their products, engage with customers, and expand their
          market reach.
        </p>
        <h2 className=" font-bold text-2xl mt-6">Key Features of Maroof</h2>

        <li className="list-disc font-medium text-base ml-2.5 mt-2">Transparent and Fair Offers:</li>
        <p className=" text-[#475467] font-medium text-sm mt-1">
          We present all parts impartially, with no promotion of specific
          suppliers. Parts are organized by manufacturer and filtered by
          customer preferences.
        </p>

        
        <li className="list-disc font-medium text-base ml-2.5 mt-2">Responsive Customer Service:</li>
        <p className=" text-[#475467] font-medium text-sm mt-1">
        If any issues arise, Maroof is committed to resolving them quickly and efficiently.
        </p>

        <li className="list-disc font-medium text-base ml-2.5 mt-2">Comprehensive, Up-to-Date Catalogs:</li>
        <p className=" text-[#475467] font-medium text-sm mt-1">
        Our catalogs are refreshed daily with new products and current prices, ensuring you always have access to the latest offerings.
        </p>

        <li className="list-disc font-medium text-base ml-2.5 mt-2">User-Friendly Experience:</li>
        <p className=" text-[#475467] font-medium text-sm mt-1">
        Our website is designed to be both practical and mobile-friendly, allowing you to order auto parts from any device—whether it’s a computer, laptop, tablet, or smartphone.
        </p>

        <h2 className=" font-bold text-2xl mt-6">Why Choose Maroof?</h2>
        <li className="list-disc font-medium text-base ml-2.5 mt-2">10-Day Assured Return:</li>
        <p className=" text-[#475467] font-medium text-sm mt-1">
        If a part does not fit your vehicle, you can easily initiate a return request. Our return process is straightforward and hassle-free.
        </p>
        <li className="list-disc font-medium text-base ml-2.5 mt-2">Reliable Product Information: </li>
        <p className=" text-[#475467] font-medium text-sm mt-1">
        Our catalogs are created by gathering accurate market data. We ensure that product descriptions are precise, and we hold our sellers accountable for the authenticity and terms of their offers.
        </p>
      </div>
    </section>
  );
}

export default Client;
