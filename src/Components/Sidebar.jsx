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

export function Sidebarr() {
  return (
    <div className="h-[100vh] w-full p-4 rounded-lg">
      <div className="w-full h-full pb-4 ">
        <Sidebar aria-label="Default sidebar example" className="">
          <div className="">
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
                <Sidebar.Item href="#" icon={HiArrowSmLeft}>
                  Sign Out
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
        </Sidebar>
      </div>
    </div>
  );
}
