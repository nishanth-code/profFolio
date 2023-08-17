import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
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
  const [submenuOpen, setSubmenuOpen] = useState([]);
  const toggleSubmenu = (index) => {
    const newStates = [...submenuOpen];
    newStates[index] = !newStates[index];
    setSubmenuOpen(newStates);
  };

  const menus = [
    {
      id: 1,
      title: "Profile",
      route: "profile",
      spacing: true,
    },
    {
      id: 2,
      title: "Publications",
      route: "profile/publication",
      icon: <MdDescription />,
      submenu: true,
      submenuItems: [
        {
          id: 3,
          title: "AddPublication",
          route: "profile/publication/add",
          icon: <MdDescription />,
        },
      ],
    },

    {
      id: 4,
      title: "Articles",
      route: "profile/article",
      icon: <MdEditDocument />,
      submenu: true,
      submenuItems: [
        {
          id: 5,
          title: "AddArticles",
          route: "profile/article/add",
          icon: <MdDescription />,
        },
      ],
    },
    {
      id: 6,
      title: "Workshops",
      route: "profile/workshop",
      icon: <MdEvent />,
      submenu: true,
      submenuItems: [
        {
          id: 7,
          title: "AddWorkshops",
          route: "profile/workshop/add",
          icon: <MdDescription />,
        },
      ],
    },
    {
      id: 8,
      title: "Patent",
      route: "profile/patent",
      icon: <LuFileBadge />,
      submenu: true,
      submenuItems: [
        {
          id: 9,
          title: "AddPatent",
          route: "profile/patent/add",
          icon: <MdDescription />,
        },
      ],
    },
    { id: 10, title: "Home", route: "", spacing: true, icon: <MdHome /> },
    { id: 11, title: "Logout", route: "login", icon: <MdLogout /> },
  ];

  if (submenuOpen.length !== menus.length) {
    // Initialize submenu states with false values for each submenu item
    setSubmenuOpen(new Array(menus.length).fill(false));
  }

  return (
    <div
      className={`bg-[#550C6B] h-screen p-5 pt-2  sticky top-0
      ${open ? "w-72" : "w-24"} duration-300 `}
    >
      {/* Arrow to close and open */}
      <FaArrowLeft
        className="bg-white text-[#550C6B] text-3xl rounded-full absolute -right-3 top-9 border border-purple cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div className="inline-flex px-4">
        <div className="text-[white] flex  my-11 text-xl ">
          <img
            className={`h-10  rounded-full text-xl ${!open && "scale-1"} `}
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

      {/* Main Menu */}
      <div className="text-white mx-4 -my-10">
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

              {/* Sub Menu Down Arrow */}
              {menu.submenu && (
                <BsChevronDown
                  className=""
                  onClick={() => toggleSubmenu(index)}
                />
              )}
            </div>

            {/* Sub Menu */}
            {menu.submenu && submenuOpen[index] && (
              <div className="text-white mx-4 ">
                {menu.submenuItems.map((submenuItem, index) => (
                  <Link
                    key={submenuItem.id || index}
                    to={"/" + submenuItem.route}
                  >
                    <div
                      className={`my text-md flex items-center p-2 ${
                        open ? " hover:bg-light-white rounded-md" : ""
                      } ${menu.spacing ? "mt-2" : "mt"}`}
                    >
                      {submenuItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
// FaUser;
// FaUserTie;

// AiFillFund

// colors -- blues #79A7D3 #6883BC
