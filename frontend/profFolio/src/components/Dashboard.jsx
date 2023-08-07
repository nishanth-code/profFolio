import { Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import SideBar from "./SideBar";
import Publication from "./Publication";
import ScrollComponent from "./ScrollComponent";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      {/* <ProfileDetails /> */}
      <Publication />
      {/* <ScrollComponent /> */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
