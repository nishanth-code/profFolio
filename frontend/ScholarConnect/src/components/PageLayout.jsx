import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MenuLayout = () => {
  return (
    <div className=" bg-[#fbf0ff]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MenuLayout;
