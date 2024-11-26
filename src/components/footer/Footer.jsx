import React from "react";

const Footer = () => {
  return (
    <footer className="border-t p-8 md:px-12  px-2">
      <div className="lg:flex gap-16">
        <div className="mb-8 lg:mb-0  flex items-center justify-center md:flex-none">
          <img src="/numah-logo.png" alt="numah-logo" />
        </div>
        <div className="md:flex  w-full lg:justify-between">
          <div className="flex justify-between md:gap-[80px] gap-4 whitespace-nowrap lg:gap-30 ">
            <div className="flex flex-col flex-start gap-3">
              <span className="text-custom-dark-grey font-montserrat text-sm font-medium">
                COMPANY
              </span>
              <span className="text-black font-medium font-montserrat text-xs">
                About
              </span>
            </div>
            <div className="flex flex-col flex-start gap-3">
              <span className="text-custom-dark-grey font-montserrat text-sm font-medium">
                COMMUNITIES
              </span>
              <span className="text-black font-medium font-montserrat text-xs">
                Numah For Fans
              </span>
              <span className="text-black font-medium font-montserrat text-xs">
                Numah For Artists
              </span>
              <span className="text-black font-medium font-montserrat text-xs">
                Numah For Labels
              </span>
            </div>
            <div className="flex flex-col flex-start gap-3">
              <span className="text-custom-dark-grey font-montserrat text-sm font-medium">
                USFUL LINKS
              </span>
              <span className="text-black font-medium font-montserrat text-xs">
                Subscription
              </span>
              <span className="text-black font-medium font-montserrat text-xs">
                Web Player
              </span>
            </div>
          </div>
          <div className="flex mr-4  justify-center mt-4 md:mt-0">
            <img src="/fb-icon.png" alt="fb-icon" className="w-14 h-14" />
            <img src="/insta-icon.png" alt="insta-icon" className="w-14 h-14" />
            <img
              src="/threads-icon.png"
              alt="threads-icon"
              className="w-14 h-14"
            />
          </div>
        </div>
        
      </div>
      <div className="text-center mt-5">
        <span className="text-custom-black text-xs font-montserrat">
          © 2024 Numah | All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
