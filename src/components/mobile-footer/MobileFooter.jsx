import { Button } from "flowbite-react";
import React from "react";

const MobileFooter = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <div>
            <img
              src="/numah-mobile-footer.png"
              alt="mobile-footer"
              className="w-full h-[400px]"
            />
          </div>
          <div className="absolute top-20 left-48">
            <img src="/premium-numah.png" alt="premium" />
          </div>
          <div className="absolute top-40 left-10">
            <div className="flex justify-start flex-col gap-4">
              <h2 className="text-2xl text-white font-semibold font-montserrat">
                Unlock Unlimited Access!
              </h2>
              <span className="font-montserrat text-xs text-white">
                Subscribe today and elevate
                <br />
                your experience!
              </span>
              <Button
                type="button"
                className="text-black font-semibold  text-lg rounded-full flex justify-start max-w-fit bg-white  font-montserrat"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
