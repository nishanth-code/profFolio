import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div>
      <h3 className="mt-20 text-4xl font-semibold text-white">MENU</h3>

      <div className="my-6  text-xl">
        <Link to={"/profile"}>Profile</Link>
        <div></div>
      </div>
      <div className="my-6  text-xl">
        <Link to={"/profile"}>Publications</Link>
        <div></div>
      </div>
      <div className="my-6  text-xl">
        <Link to={"/profile"}>Articles</Link>
        <div></div>
      </div>
      <div className="my-6  text-xl">
        <Link to={"/profile"}>Workshops</Link>
        <div></div>
      </div>
      <div className="my-6 text-xl">
        <Link to={"/profile"}>Patent</Link>
        <div></div>
      </div>
    </div>
  );
};

export default MenuItems;
