import React from "react";
import { RiHome5Fill } from "react-icons/ri";
import { GoPlusCircle } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="bg-custom-gradient whitespace-nowrap">
      <div className=" p-7">
        <img src="/numah-logo.png" alt="numah-logo" />
      </div>
      <div className="p-6 flex flex-col gap-7 border-b">
        <ul className="flex  flex-col gap-6">
          <li className="flex items-center gap-4">
            <RiHome5Fill className="text-yellow-300" />
            <span className="text-xs font-semibold font-montserrat text-custom-dark-grey">
              Home
            </span>
          </li>
          <li className="flex items-center gap-4">
            <img src="music-library.png" alt="music-library" />
            <span className="text-xs font-semibold font-montserrat text-custom-dark-grey">
              Library
            </span>
          </li>
          <li className="flex items-center gap-4">
            <img src="playlist-icon.png" alt="playlist-icon" />
            <span className=" text-xs font-semibold font-montserrat text-custom-dark-grey">
              Playlist
            </span>
          </li>
        </ul>
        <ul className="flex flex-col items-start gap-3">
          <li className="">
            <div className="flex items-center gap-2">
              <img
                src="/summer-icon.png"
                alt="summer-icon"
                className="rounded-lg "
              />
              <div className="flex flex-col">
                <span className="text-xs  font-semibold font-montserrat">
                  Summer List 2...
                </span>
                <span className="text-xs text-gray-400 font-montserrat">
                  128 songs
                </span>
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center gap-1">
              <img
                src="/night-icon.png"
                alt="night-icon"
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xs  font-semibold font-montserrat">
                  Nightty night
                </span>
                <span className="text-xs text-gray-400 font-montserrat">
                  50 songs
                </span>
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center">
              <div className="">
                <img
                  src="/country-music-icon.png"
                  alt="country-music"
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs  font-semibold font-montserrat">
                  Country music
                </span>
                <span className="text-xs text-gray-400 font-montserrat">
                  7 songs
                </span>
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex items-center gap-2">
              <img
                src="/slow-icon.png"
                alt="slow-icon"
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xs  font-semibold font-montserrat">
                  Slow
                </span>
                <span className="text-xs text-gray-400 font-montserrat">
                  8 songs
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div className="flex items-center gap-2 border rounded-full p-2">
          <GoPlusCircle />
          <span className="text-xs text-black font-montserrat">
            Add new playlist
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex gap-4 items-center">
          <IoMdSettings  className="text-gray-400"/>
          <span className="text-custom-dark-grey text-xs font-semibold font-montserrat">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
