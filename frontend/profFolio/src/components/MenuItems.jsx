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
        <Link to={"/publications"}>Publications</Link>
        <div></div>
      </div>
      <div className="my-6  text-xl">
        <Link to={"/articles"}>Articles</Link>
        <div></div>
      </div>
      <div className="my-6  text-xl">
        <Link to={"/workshops"}>Workshops</Link>
        <div></div>
      </div>
      <div className="my-6 text-xl">
        <Link to={"/patent"}>Patent</Link>
        <div></div>
      </div>
    </div>
  );
};

export default MenuItems;
