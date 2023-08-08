import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  MdDashboardCustomize,
  MdDescription,
  MdEvent,
  MdEditDocument,
  MdHome,
  MdLogout,
} from "react-icons/md";
import { LuFileBadge } from "react-icons/lu";

import { useState } from "react";
import Logo from "../assets/ScholarLogo.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { id: 1, title: "Profile", route: "profile", spacing: true },
    {
      id: 2,
      title: "Publications",
      route: "profile/userName/publication/",
      icon: <MdDescription />,
    },
    {
      id: 3,
      title: "Articles",
      route: "profile/article",
      icon: <MdEditDocument />,
    },
    {
      id: 4,
      title: "Workshops",
      route: "profile/workshop",
      icon: <MdEvent />,
    },
    {
      id: 5,
      title: "Patent",
      route: "profile/patent",
      icon: <LuFileBadge />,
    },
    { id: 6, title: "Home", route: "", spacing: true, icon: <MdHome /> },
    { id: 7, title: "Logout", route: "login", icon: <MdLogout /> },
  ];

  return (
    <div
      className={`bg-[#550C6B] h-screen p-5 pt-8 relative 
      ${open ? "w-72" : "w-24"} duration-300 `}
    >
      <FaArrowLeft
        className="bg-white text-[#550C6B] text-3xl rounded-full absolute -right-3 top-9 border border-purple cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div className="inline-flex px-4">
        <div className="text-[white] flex  my-11 text-xl ">
          <img
            className={`h-10 rounded-full text-xl ${!open && "scale-1"} `}
            src={Logo}
          />
        </div>
        <h1
          className={`text-white origin-left font-Inria font-medium text-2xl px-2 my-8 py-4 duration-300 
          ${!open ? "scale-0" : ""}`}
        >
          ScholarConnect
        </h1>
      </div>
      <div className="text-white mx-4 my-4">
        {/* <img
            className={`h-10 rounded-full ${!open && "scale-1"} `}
            src={Logo}
          /> */}
        {menus.map((menu, index) => (
          <Link key={menu.id || index} to={"/" + menu.route}>
            <div
              className={`my-4 text-xl flex items-center p-2 ${
                open ? " hover:bg-light-white rounded-md" : ""
              } ${menu.spacing ? "mt-9" : "mt-2"}`}
            >
              <span
                className={`text-2xl block float-right pr-2 ${
                  open
                    ? ""
                    : "hover:bg-light-white rounded-md mr-4 pt-1 pl-1 pr-1 pb-1"
                }`}
              >
                {menu.icon ? menu.icon : <MdDashboardCustomize />}
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                {menu.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* <div className="my-6  text-xl">
          <Link to={"/profile/"}>Profile</Link>
          <div></div>
        </div>
        <div className="my-6  text-xl">
          <Link to={"/Publications/:id"}>Publications</Link>
          <div></div>
        </div>
        <div className="my-6  text-xl">
          <Link to={"/Articles/:id"}>Articles</Link>
          <div></div>
        </div>
        <div className="my-6  text-xl">
          <Link to={"/Workshops/:id"}>Workshops</Link>
          <div></div>
        </div>
        <div className="my-6 text-xl">
          <Link to={"/Patent/:id"}>Patent</Link>
          <div></div>
        </div> */}
    </div>
  );
};

export default SideBar;
// FaUser;
// FaUserTie;

// AiFillFund

// colors -- blues #79A7D3 #6883BC
