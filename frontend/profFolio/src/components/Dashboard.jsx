import { Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import SideBar from "./SideBar";
import Publication from "./Publication";
import ScrollComponent from "./ScrollComponent";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
      {/* <ProfileDetails /> */}
      {/* <Publication />  */}
      {/* <ScrollComponent /> */}
    </div>
  );
};

export default Dashboard;
