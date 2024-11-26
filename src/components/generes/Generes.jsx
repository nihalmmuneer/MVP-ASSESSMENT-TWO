import { Button } from "flowbite-react";
import React from "react";


const Genres = () => {
  return (
    <div>
      <div className="px-3">
        <div className="flex justify-between">
          <div className="mb-2">
            <h2 className="text-lg font-semibold font-montserrat">
              Browse Genres
            </h2>
          </div>
          <div>
            <span className="text-lg font-montserrat font-medium cursor-pointer">
              View All
            </span>
          </div>
        </div>

        <div className="block sm:hidden overflow-x-auto scrollbar-thin scrollbar-webkit">
          <div className="flex gap-4 w-[130%]">
            {[
              { img: "/metal-img.png", label: "Metal" },
              { img: "/jazz-img.png", label: "Jazz" },
              { img: "/rock-img.png", label: "Rock" },
              { img: "/punk-img.png", label: "Punk" },
              { img: "/metal-img.png", label: "Alternative" },
              { img: "/metal-img.png", label: "Metal" },
            ].map((genre, index) => (
              <div key={index} className="relative group">
                <img
                  src={genre.img}
                  alt={`${genre.label}-icon`}
                  className="h-36 w-36 object-cover rounded-lg"
                />
                <Button
                  type="button"
                  className="absolute inset-x-0 bottom-4 bg-transparent bg-opacity-0 hover:bg-opacity-20 backdrop-blur-md rounded-full shadow-lg text-white mx-4 transition-all duration-200 opacity-100 "
                >
                  {genre.label}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { img: "/metal-img.png", label: "Metal" },
            { img: "/jazz-img.png", label: "Jazz" },
            { img: "/rock-img.png", label: "Rock" },
            { img: "/punk-img.png", label: "Punk" },
            { img: "/metal-img.png", label: "Alternative" },
            { img: "/metal-img.png", label: "Metal" },
          ].map((genre, index) => (
            <div key={index} className="relative group">
              <img
                src={genre.img}
                alt={`${genre.label}-icon`}
                className="w-full object-cover rounded-lg"
              />
              <Button
                type="button"
                className="absolute inset-x-0 bottom-4 bg-transparent bg-opacity-0 hover:bg-opacity-20 backdrop-blur-md rounded-full shadow-lg text-white mx-4 transition-all duration-200 opacity-100 "
              >
                {genre.label}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genres;
