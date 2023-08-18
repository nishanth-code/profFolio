import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex-none ">
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
