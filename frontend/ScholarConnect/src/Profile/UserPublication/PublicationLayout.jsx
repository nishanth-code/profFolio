import { Outlet } from "react-router-dom";
import UserPublications from "./UserPublication";

const PublicationLayout = () => {
  return (
    <div>
      {/* <UserPublications /> */}
      <Outlet />
    </div>
  );
};

export default PublicationLayout;
