import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div>
      <h3 className="mt-20 text-4xl font-semibold text-white">MENU</h3>

      <div className="my-6 text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        <Link to={"/dashboard"}>Dashboard</Link>
        <div></div>
      </div>
      <div className="my-6 text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        <Link to={"/publication"}>Publications</Link>
        <div></div>
      </div>
      <div className="my-6 text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        <Link to={"/article"}>Articles</Link>
        <div></div>
      </div>
      <div className="my-6 text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        <Link to={"/workshop"}>Workshops</Link>
        <div></div>
      </div>
      <div className="my-6 text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        <Link to={"/patent"}>Patent</Link>
        <div></div>
      </div>
    </div>
  );
};

export default MenuItems;
