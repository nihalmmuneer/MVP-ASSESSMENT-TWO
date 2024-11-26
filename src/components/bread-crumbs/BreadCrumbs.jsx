import React from "react";
import { Button } from "flowbite-react";

const BreadCrumbs = () => {
  return (
    <div className="md:p-8">
      <div className="flex md:justify-start justify-center items-center  gap-2 md:gap-4">
        <div>
          <Button
            type="button"
            className="text-black font-bold font-montserrat bg-yellow-300 rounded-full p-1 px-4"
          >
            Home
          </Button>
        </div>
        <div>
          <Button
            type="button"
            className="text-black font-bold font-montserrat bg-custom-thin-gray rounded-full p-1 px-4"
          >
            Following
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
