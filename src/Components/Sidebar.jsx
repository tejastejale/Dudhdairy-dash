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
import { TbFileInvoice } from "react-icons/tb";
import { MdOutlineUnsubscribe,MdOutlineDeliveryDining } from "react-icons/md";
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
    <div className="h-screen w-[20vw] p-4 bg-transparent rounded-xl">
      <div className="w-full h-full pb-0 shadow-lg  bg-white rounded-lg">
        <Sidebar className="">
          <div className="h-">
            <Sidebar.Items className="">
              <Sidebar.ItemGroup>
                <Sidebar.Item href="/" icon={HiHome}>
                  Home
                </Sidebar.Item>
                {/* <Sidebar.Item href="#" icon={HiInbox} label="3">
                  Inbox
                </Sidebar.Item> */}
                <Sidebar.Item href="/customers" icon={HiUser}>
                  Customers
                </Sidebar.Item>
                <Sidebar.Item href="/products" icon={HiShoppingBag}>
                  Products
                </Sidebar.Item>
                <Sidebar.Item href="/orders" icon={TbFileInvoice}>
                  Orders
                </Sidebar.Item>
                <Sidebar.Item href="/subscription" icon={MdOutlineUnsubscribe}>
                Subscription
                </Sidebar.Item>
                <Sidebar.Item href="/vendor" icon={MdOutlineDeliveryDining}>
                Delivery Boy
                </Sidebar.Item>
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
