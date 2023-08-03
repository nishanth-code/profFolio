import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-purple h-screen p-5 pt-8 relative 
      ${open ? "w-72" : "w-24"} duration-300 `}
    >
      <FaArrowLeft
        className={`bg-white text-purple text-3xl rounded-full absolute -right-3 top-9 border border-purple cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div className="inline-flex">
        <AiOutlineDashboard
          className={`text-5xl  text-white rounded cursor-pointer block float-left duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white oringin-left font-medium text-2xl px-4 py-2 duration-300 
          ${!open && "scale-0"}`}
        >
          Sidebar
        </h1>
      </div>

      <h1>This is side bar</h1>
    </div>
  );
};

export default SideBar;
// FaUser;
// FaUserTie;

// AiFillFund

// colors -- blues #79A7D3 #6883BC
