import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Recent = () => {
  return (
    <div>
      <div className="p-8">
        <div className="mb-2">
          <h2 className="text-lg font-semibold font-montserrat">
            Recently Played
          </h2>
        </div>

        <div className="block sm:hidden overflow-x-auto scrollbar-thin scrollbar-webkit scroll">
          <div className="flex gap-6 overflow-visible w-[110%]">
            <div className="flex flex-col gap-2">
              <div className="flex-shrink-0 w-64 flex items-center gap-4 p-4 rounded-lg">
                <img
                  src="/mechvirus-icon.png"
                  alt="Mechvirus"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex flex-col items-start">
                  <span className="font-montserrat whitespace-nowrap text-sm text-black font-medium">
                    Mechvirus...
                  </span>
                  <span className="font-montserrat text-gray-400 font-light text-sm">
                    Front line
                  </span>
                </div>
                <BsThreeDotsVertical className="w-6 h-6 text-gray-500 ml-auto" />
              </div>

              <div className="flex-shrink-0 w-64 flex items-center gap-4 p-4 rounded-lg">
                <img
                  src="/greenish-icon.png"
                  alt="It May Be Greenish"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex flex-col items-start">
                  <span className="font-montserrat whitespace-nowrap text-sm text-black font-medium">
                    It May Be Greenish...
                  </span>
                  <span className="font-montserrat text-gray-400 font-light text-sm">
                    eebrozgi...
                  </span>
                </div>
                <BsThreeDotsVertical className="w-6 h-6 text-gray-500 ml-auto" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex-shrink-0 w-64 flex items-center gap-4 p-4 rounded-lg">
                <img
                  src="/doom-icon.png"
                  alt="MF DOOM SUITE"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex flex-col items-start">
                  <span className="font-montserrat whitespace-nowrap text-sm text-black font-medium">
                    the MF DOOM SUITE
                  </span>
                  <span className="font-montserrat text-gray-400 font-light text-sm">
                    New Jazz Underground
                  </span>
                </div>
                <BsThreeDotsVertical className="w-6 h-6 text-gray-500 ml-auto" />
              </div>

              <div className="flex-shrink-0 w-64 flex items-center gap-4 p-4 rounded-lg">
                <img
                  src="/Akt-icon.png"
                  alt="Akt I; First sight of..."
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex flex-col items-start">
                  <span className="font-montserrat whitespace-nowrap text-sm text-black font-medium">
                    Akt I; First sight of...
                  </span>
                  <span className="font-montserrat text-gray-400 font-light text-sm">
                    Eldamar
                  </span>
                </div>
                <BsThreeDotsVertical className="w-6 h-6 text-gray-500 ml-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center justify-between gap-4 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <img
                src="/mechvirus-icon.png"
                alt="Mechvirus"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="font-montserrat text-sm text-black font-semibold line-clamp-1">
                  Mechvirus...
                </span>
                <span className="font-montserrat text-gray-400 font-light text-xs">
                  Front line
                </span>
              </div>
            </div>
            <BsThreeDotsVertical className="w-6 h-6 text-gray-500" />
          </div>

          <div className="flex items-center justify-between gap-4 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <img
                src="/doom-icon.png"
                alt="MF DOOM SUITE"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="font-montserrat text-sm text-black font-semibold line-clamp-1">
                  the MF DOOM SUITE
                </span>
                <span className="font-montserrat text-gray-400 font-light text-xs">
                  New Jazz Underground
                </span>
              </div>
            </div>
            <BsThreeDotsVertical className="w-6 h-6 text-gray-500" />
          </div>

          <div className="flex items-center justify-between gap-4 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <img
                src="/greenish-icon.png"
                alt="It May Be Greenish"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="font-montserrat text-sm text-black font-semibold line-clamp-1">
                  It May Be Greenish...
                </span>
                <span className="font-montserrat text-gray-400 font-light text-xs">
                  eebrozgi...
                </span>
              </div>
            </div>
            <BsThreeDotsVertical className="w-6 h-6 text-gray-500" />
          </div>

          <div className="flex items-center justify-between gap-4 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <img
                src="/Akt-icon.png"
                alt="Akt I; First sight of..."
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="font-montserrat text-sm text-black font-semibold line-clamp-1">
                  Akt I; First sight of...
                </span>
                <span className="font-montserrat text-gray-400 font-light text-xs">
                  Eldamar
                </span>
              </div>
            </div>
            <BsThreeDotsVertical className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
