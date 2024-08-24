import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiHome,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export function Sidebarr() {
  const navi = useNavigate();
  const handleSignout = () => {
    console.log("Signout function triggered");
    localStorage.clear();
    setTimeout(() => {
      navi("/");
    }, 100);
  };
  return (
    <div className="h-screen w-full p-4 rounded-xl">
      <div className="w-full h-full pb-0 shadow-lg rounded-lg">
        <Sidebar className="">
          <div className="h-">
            <Sidebar.Items className="">
              <Sidebar.ItemGroup>
                <Sidebar.Item icon={HiChartPie} className="cursor-pointer">
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="/" icon={HiHome}>
                  Home
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiInbox} label="3">
                  Inbox
                </Sidebar.Item>
                <Sidebar.Item href="/customers" icon={HiUser}>
                  Customers
                </Sidebar.Item>
                <Sidebar.Item href="/products" icon={HiShoppingBag}>
                  Products
                </Sidebar.Item>
                {/* <Sidebar.Item href="/add-product" icon={HiShoppingBag}>
                  Add Products
                </Sidebar.Item> */}
                <Sidebar.Item icon={HiArrowSmLeft}>
                  <button onClick={handleSignout}>Sign Out</button>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
        </Sidebar>
      </div>
    </div>
  );
}
