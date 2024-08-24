import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebarr } from "./Components/Sidebar";
import Home from "./Screens/Home";
import Products from "./Screens/Products";
import Lottie from "lottie-react";
import animationData from "./Static/Images/Animation.json";
import Addproduct from "./Screens/Addproduct";
import Customers from "./Screens/Customers";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show animation for 0.5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="font-Poppins overflow-hidden flex justify-start bg-blue-50 w-screen h-full">
      {loading ? (
        <div
          id="lottie-container"
          className="w-screen h-screen flex m-auto items-center justify-center"
        >
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-72 h-72"
          />
        </div>
      ) : (
        <>
          <div className="w-fit h-full sticky left-0 ">
            <Sidebarr className="" />
          </div>
          <div className="w-full h-screen overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/add-product" element={<Addproduct />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
