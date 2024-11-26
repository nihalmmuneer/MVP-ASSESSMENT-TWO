import React from "react";

const Artists = () => {
  return (
    <div>
      <div className="p-8">
        <div className="mb-4">
          <h2 className="text-lg font-semibold font-montserrat">
            Trending Artists
          </h2>
        </div>

        <div className="block sm:hidden overflow-x-auto scrollbar-thin scrollbar-webkit">
          <div className="flex gap-6 w-max">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center w-36">
                <img
                  src="/cevin_key.png"
                  alt="cevin-img"
                  className="h-36 w-36 object-cover rounded-full" 
                />
                <div className="flex flex-col whitespace-nowrap items-center mt-2">
                  <span className="font-montserrat text-sm text-black font-medium">
                    Cevin Key
                  </span>
                  <span className="font-montserrat whitespace-nowrap text-xs text-gray-400 font-light">
                    Vancouver, British
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center w-36">
                <img
                  src="/magdalena.png"
                  alt="magdalena-img"
                  className="h-36 w-36 object-cover rounded-full"
                />
                <div className="flex flex-col items-center mt-2">
                  <span className="font-montserrat text-sm text-black font-medium">
                    Magdalena Bay
                  </span>
                  <span className="font-montserrat text-xs text-gray-400 font-light">
                    Los Angeles
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center w-36">
                <img
                  src="/tunic.png"
                  alt="tunic-img"
                  className="h-36 w-36 object-cover rounded-full"
                />
                <div className="flex flex-col items-center mt-2">
                  <span className="font-montserrat text-sm text-black font-medium">
                    Tunic
                  </span>
                  <span className="font-montserrat text-xs text-gray-400 font-light">
                    Winnipeg, Manitoba
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center w-36">
                <img
                  src="/cevin-brother.png"
                  alt="cevin-brother"
                  className="h-36 w-36 object-cover rounded-full"
                />
                <div className="flex flex-col items-center mt-2">
                  <span className="font-montserrat text-sm text-black font-medium">
                    Cevin Brother
                  </span>
                  <span className="font-montserrat text-xs text-gray-400 font-light">
                    Vancouver, British
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center w-36">
                <img
                  src="/cevin_key.png"
                  alt="cevin-img"
                  className="h-36 w-36 object-cover rounded-full"
                />
                <div className="flex flex-col items-center mt-2">
                  <span className="font-montserrat text-sm text-black font-medium">
                    Cevin Key
                  </span>
                  <span className="font-montserrat text-xs text-gray-400 font-light">
                    Vancouver, British
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center w-36">
                <img
                  src="/magdalena.png"
                  alt="magdalena-img"
                  className="h-36 w-36 object-cover rounded-full"
                />
                <div className="flex flex-col items-center mt-2">
                  <span className="font-montserrat text-sm text-black font-medium">
                    Magdalena
                  </span>
                  <span className="font-montserrat text-xs text-gray-400 font-light">
                    Los Angeles
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center w-36">
                <img
                  src="/magdalena.png"
                  alt="magdalena-img"
                  className="h-36 w-36 object-cover rounded-full"
                />
                <div className="flex flex-col items-center mt-2">
                  <span className="font-montserrat text-sm text-black font-medium">
                    Magdalena
                  </span>
                  <span className="font-montserrat text-xs text-gray-400 font-light">
                    Los Angeles
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center w-36">
                <img
                  src="/tunic.png"
                  alt="tunic-img"
                  className="h-36 w-36 object-cover rounded-full"
                />
                <div className="flex flex-col items-center mt-2">
                  <span className="font-montserrat text-sm text-black font-medium">
                    Tunic
                  </span>
                  <span className="font-montserrat text-xs text-gray-400 font-light">
                    Winnipeg, Manitoba
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          <div className="flex flex-col items-center">
            <img
              src="/cevin_key.png"
              alt="cevin-img"
              className="h-24 w-24 object-cover rounded-full"
            />
            <div className="flex flex-col items-center mt-2">
              <span className="font-montserrat text-sm whitespace-nowrap text-black font-medium">
                Cevin Key
              </span>
              <span className="font-montserrat whitespace-nowrap text-xs text-gray-400 font-light">
                Vancouver, British
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/magdalena.png"
              alt="magdalena-img"
              className="h-24 w-24 object-cover rounded-full"
            />
            <div className="flex flex-col items-center mt-2">
              <span className="font-montserrat text-sm whitespace-nowrap text-black font-medium">
                Magdalena Bay
              </span>
              <span className="font-montserrat text-xs whitespace-nowrap text-gray-400 font-light">
                Los Angeles
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/tunic.png"
              alt="tunic-img"
              className="h-24 w-24 object-cover rounded-full"
            />
            <div className="flex flex-col items-center mt-2">
              <span className="font-montserrat text-sm text-black whitespace-nowrap font-medium">
                Tunic
              </span>
              <span className="font-montserrat text-xs whitespace-nowrap text-gray-400 font-light">
                Winnipeg, Manitoba
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/cevin-brother.png"
              alt="cevin-brother"
              className="h-24 w-24 object-cover rounded-full"
            />
            <div className="flex flex-col items-center mt-2">
              <span className="font-montserrat text-sm text-black  whitespace-nowrap font-medium">
                Cevin Brother
              </span>
              <span className="font-montserrat  whitespace-nowrap text-xs text-gray-400 font-light">
                Vancouver, British
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/cevin_key.png"
              alt="cevin-img"
              className="h-24 w-24 object-cover rounded-full"
            />
            <div className="flex flex-col items-center mt-2">
              <span className="font-montserrat whitespace-nowrap text-sm text-black font-medium">
                Cevin Key
              </span>
              <span className="font-montserrat whitespace-nowrap text-xs text-gray-400 font-light">
                Vancouver, British
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/magdalena.png"
              alt="magdalena-img"
              className="h-24 w-24 object-cover rounded-full"
            />
            <div className="flex flex-col items-center mt-2">
              <span className="font-montserrat whitespace-nowrap text-sm text-black font-medium">
                Magdalena
              </span>
              <span className="font-montserrat whitespace-nowrap text-xs text-gray-400 font-light">
                Los Angeles
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/magdalena.png"
              alt="magdalena-img"
              className="h-24 w-24 object-cover rounded-full"
            />
            <div className="flex flex-col items-center mt-2">
              <span className="font-montserrat whitespace-nowrap text-sm text-black font-medium">
                Magdalena
              </span>
              <span className="font-montserrat whitespace-nowrap text-xs text-gray-400 font-light">
                Los Angeles
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/tunic.png"
              alt="tunic-img"
              className="h-24 w-24 object-cover rounded-full"
            />
            <div className="flex flex-col items-center mt-2">
              <span className="font-montserrat whitespace-nowrap text-sm text-black font-medium">
                Tunic
              </span>
              <span className="font-montserrat whitespace-nowrap text-xs text-gray-400 font-light lg:break-words">
                Winnipeg, Manitoba
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
