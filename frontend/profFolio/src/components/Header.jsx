import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="px-4 bg-gradient-to-b from-[#1432CF] to-[#DF71FA]">
      <div className="navbar flex justify-between ">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <p className="text-white text-3xl">ScholarConnect</p>
        <div>
          <input type="text" name="search-text" placeholder="search" />
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
        </div>
        <div>
          <button className="bg-[#1D3792] absolute rounded-md text-2xl my-2 z-999">
            See More
          </button>
          <a
            className="bg-[#1D3792] absolute rounded-md text-2xl mx-6 my-2 z-40"
            href="/login"
            bg-gradient-to-r
            from-pink-500
            via-red-500
            to-yellow-500
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
