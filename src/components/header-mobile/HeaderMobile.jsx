import React from "react";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const HeaderMobile = () => {
  return (
    <div className="bg-custom-gradient whitespace-nowrap w-full">
      <div className="p-8">
        <div className="flex items-center gap-4">
          <div>
            <img src="/numah-mobile.png" alt="numah-mobile" />
          </div>
          <div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <h2 className="font-montserrat font-semibold text-lg">
                  Hi, Dominic 👋🏻
                </h2>
              </div>
              <div>
                <span className="font-montserrat text-sm text-black/50">
                  {" "}
                  let’s spin some tracks and vibe out!🎧
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-sm bg-white rounded-full p-2 shadow-md flex items-center justify-center">
              <BsHandbag className="text-gray-400 text-base md:text-lg" />
            </div>
            <div className="text-sm bg-white rounded-full p-2 shadow-md flex items-center justify-center">
              <AiOutlineUser className="text-gray-400 text-base md:text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
