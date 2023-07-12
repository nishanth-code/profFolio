import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="px-4 bg-gradient-to-b from-[#1432CF] to-[#DF71FA]">
      <div className="navbar flex justify-between ">
        {/* <div className="logo">
          <img className="my-4" src={Logo} alt="logo" />
        </div> */}
        {/* <div class="bg-gray-700 w-0.5 h-15 "></div> */}
        <p className="text-white  my-4 text-3xl">ScholarConnect</p>
        <div className="flex items-center  my-4 ml-auto border-b-2 border-white-600 mx-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className="bg-transparent color-white mx-2"
            type="text"
            name="search-text"
            placeholder="search"
          />
        </div>
        <div>
          <button className="bg-[#1D3792] text-white px-2 py-2 my-4 rounded-md text-xl">
            See More
          </button>
          <a
            className="bg-[#1D3792] text-white px-2 py-2 my-4 rounded-md text-xl mx-6"
            href="/login"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
