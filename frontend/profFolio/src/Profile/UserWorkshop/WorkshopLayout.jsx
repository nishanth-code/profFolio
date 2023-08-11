import React from "react";
import { Outlet } from "react-router-dom";

const WorkshopLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default WorkshopLayout;
