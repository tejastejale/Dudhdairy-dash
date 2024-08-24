import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { Sidebarr } from "./Components/Sidebar";
import Home from "./Screens/Home";
import Products from "./Screens/Products";
import Lottie from "lottie-react";
import animationData from "./Static/Images/Animation.json";
import Addproduct from "./Screens/Addproduct";
import Customers from "./Screens/Customers";
import Login from "./Screens/Login";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const navi = useNavigate();
  useEffect(() => {
    if (username === null && password === null) navi("/");
    else {
      navi("/home");
    }
  }, []);
  setTimeout(() => {
    setLoading(false);
  }, 800);

  return (
    <div className="font-Poppins overflow-hidden flex justify-start bg-blue-50 w-screen h-full">
      {loading ? (
        <div
          id="lottie-container"
          className="w-screen h-screen flex m-auto bg-blue-400 items-center justify-center"
        >
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-72 h-72 bg-transparent "
          />
        </div>
      ) : (
        <>
          {location.pathname !== "/" && (
            <div className="w-fit h-full sticky left-0">
              <Sidebarr />
            </div>
          )}
          <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
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
