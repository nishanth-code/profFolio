// import Logo from "../assets/logo.png";
import { useState } from "react";
import Logo from "../assets/ScholarLogo.png";
import SeeMore from "./SeeMore";
const Header = () => {
  const [userLogin, setUserLogin] = useState(false);

  return (
    <nav className="sticky top-0 z-20 px-4 bg-gradient-to-b from-[#1432CF] to-[#DF71FA]">
      <div className="navbar flex justify-between ">
        {/* <div className="logo">
          <img className="my-4" src={Logo} alt="logo" />
        </div> */}
        {/* <div class="bg-gray-700 w-0.5 h-15 "></div> */}
        <div className="text-[white] font-Inria flex  my-4 text-3xl">
          <img className="h-10 w-10 rounded-full mx-5" src={Logo} />{" "}
          ScholarConnect
        </div>
        <div>
          <button
            className="bg-[#1D3792] text-white px-2 py-2 my-4 mr-20 rounded-md text-xl "
            onClick={() => {
              setUserLogin(!userLogin);
            }}
          >
            {userLogin ? "Login" : "Logout"}
          </button>
          {/* {userLogin ? (
            <button
              className="bg-[#1D3792] text-white px-2 py-2 my-4 rounded-md text-xl mx-4"
              onClick={() => {
                setUserLogin(false);
              }}
            >
              Login
            </button>
          ) : (
            <button
              className="bg-[#1D3792] text-white px-2 py-2 my-4 mx-20 rounded-md text-xl "
              onClick={() => {
                setUserLogin(true);
              }}
            >
              Logout
            </button>
          )} */}
          {/* <button className="bg-[#1D3792] text-white px-2 py-2 my-4 rounded-md text-xl">
            See More */}
          <div className="flex flex-col items-center justify-center">
            <SeeMore />
          </div>
          {/* </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
