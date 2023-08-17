import React from "react";
import { Outlet } from "react-router-dom";

const PatentLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PatentLayout;
