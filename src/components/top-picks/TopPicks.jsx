import React from "react";

const TopPicks = ({ title }) => {
  const picks = [
    { img: "/gbagada-express.png", label: "Gbagada Express", artist: "Boi" },
    { img: "/red-eye.png", label: "Redeye of the Hepcat", artist: "AKTR" },
    { img: "/mf-doom-suit.png", label: "The MF DOOM SUITE", artist: "New Jazz Underground" },
    { img: "/red-eye.png", label: "Redeye of the Hepcat", artist: "AKTR" },
    { img: "/gbagada-express.png", label: "Gbagada Express", artist: "Boi" },
    { img: "/mf-doom-suit.png", label: "The MF DOOM SUITE", artist: "New Jazz Underground" }
  ];

  return (
    <div>
      <div className="p-6">
        <div className=" px-2 mb-2">
          <h1 className="text-lg font-semibold font-montserrat">{title}</h1>
        </div>

        <div className="block sm:hidden overflow-x-auto scrollbar-thin scrollbar-webkit">
          <div className="flex gap-4 w-[130%]">
            {picks.map((pick, index) => (
              <div key={index} className="flex flex-col items-start w-40">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={pick.img}
                    alt={pick.label}
                    className="md:w-full w-[200px] h-[150px] md:h-40 object-cover"
                  />
                </div>
                <div className="pl-4">
                  <h2 className="font-semibold text-sm whitespace-nowrap">{pick.label}</h2>
                  <span className="text-xs text-gray-400 font-montserrat whitespace-nowrap">{pick.artist}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {picks.map((pick, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={pick.img}
                  alt={pick.label}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="pl-4">
                <h2 className="font-semibold text-sm">{pick.label}</h2>
                <span className="text-xs text-gray-400 font-montserrat">{pick.artist}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
