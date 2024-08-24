import React from "react";

function Card({ name, num, Icon }) {
  return (
    <div className="w-72 h-24 rounded-lg overflow-hidden shadow-md">
      <div className="flex flex-row w-full h-full justify-between align-middle items-center p-4 rounded-lg bg-gray-50">
        <div className="w-full h-full ">
          <div className=" text-base mb-2">{name}</div>
          <p className="text-gray-700 font-bold text-3xl">{num}</p>
        </div>
        <div className="w-full h-full flex justify-end">
          {Icon && (
            <div className="">
              <Icon className="w-20 h-14 text-black" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
