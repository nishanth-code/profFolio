import { Outlet } from "react-router-dom";
import UserPublications from "../Profile/UserPublication/UserPublication";
import SideBar from "./SideBar";

const PublicationPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicationPage;
