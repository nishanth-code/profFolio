import { Outlet } from "react-router-dom";
import UserPublications from "../Profile/UserPublication/UserPublication";
import SideBar from "./SideBar";
import React from "react";

const PublicationPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicationPage;
