import { Outlet } from "react-router-dom";
import UserPublications from "./UserPublication";
import React from "react";
const PublicationLayout = () => {
  return (
    <div>
      {/* <UserPublications /> */}
      <Outlet />
    </div>
  );
};

export default PublicationLayout;
