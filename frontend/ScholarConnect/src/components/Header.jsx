// import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import Logo from "../assets/ScholarLogo.png";
import SeeMore from "./SeeMore";
import { useNavigate } from "react-router-dom";
import ScrollComponent from "./ScrollComponent";

const Header = () => {
  const [userLogin, setUserLogin] = useState(false);
  const navigate = useNavigate();

  var authToken = null;
  authToken = localStorage.getItem("token");

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      setUserLogin(true);
    } else {
      setUserLogin(false);
    }
  }, []);

  const handleUserLogin = () => {
    if (userLogin) {
      // User is logged in, so log them out
      localStorage.removeItem("token");
      setUserLogin(false);
      navigate("/login");
    } else {
      // User is not logged in, so navigate to the login page
      navigate("/login");
    }
  };

  return (
    <nav className="sticky top-0 z-20 px-4 bg-gradient-to-b from-[#1432CF] to-[#DF71FA]">
      <div className="navbar flex justify-between ">
        <div className="text-[white] font-Inria flex  my-4 text-3xl">
          <img className="h-10 w-10 rounded-full mx-5" src={Logo} />
          ScholarConnect
        </div>
        <div>
          <button
            className="bg-[#1D3792] text-white px-2 py-2 my-4 mr-24 rounded-md text-xl "
            onClick={handleUserLogin}
          >
            {userLogin ? "Logout" : "Login"}
          </button>
          <div className="flex flex-col items-center justify-center">
            <SeeMore />
          </div>
        </div>
      </div>
      <ScrollComponent />
    </nav>
  );
};

export default Header;
