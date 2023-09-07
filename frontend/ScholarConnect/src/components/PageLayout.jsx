import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
const MenuLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbf0ff]">
      <Header />
      <Outlet />
      <Footer className="bottom-0" />
    </div>
  );
};
export default MenuLayout;
