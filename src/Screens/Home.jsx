import React from "react";
import Card from "../Components/Card";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaTruckRampBox } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import Lchart from "../Components/Lgraph";
import Pchart from "../Components/Pgraph";

function Home() {
  return (
    <div className="py-4 w-screen h-full">
      <div className="flex flex-row space-x-2">
        <Card Icon={BsGraphUpArrow} name={"Total Sales"} num={"$123"} />
        <Card Icon={FaTruckRampBox} name={"New Orders"} num={"$123"} />
        <Card Icon={IoPeopleSharp} name={"Customers"} num={"$123"} />
        <Card Icon={IoPeopleSharp} name={"New Visitors"} num={"$123"} />
      </div>
      <div className="flex flex-row my-5 gap-3 justify-start">
        <div className="bg-gray-50 rounded-lg shadow-md p-4 w-[50%] h-[50vh]">
          <Lchart className="w-full h-full" />
        </div>
        <div className="bg-gray-50 rounded-lg shadow-md p-4 w-[29%] h-[50vh]">
          <Pchart className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
