import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div>
      <h3 className="mt-20 text-4xl font-semibold text-white">MENU</h3>
      <div className="border-solid my-3 text-xl hover:border-b-pink-600">
        <Link to={"/profile"}>Profile</Link>
        <div className="	 "></div>
      </div>
      <div className="my-3  text-xl">
        <Link to={"/profile"}>Profile</Link>
        <div></div>
      </div>
      <div className="my-3  text-xl">
        <Link to={"/profile"}>Publications</Link>
        <div></div>
      </div>
      <div className="my-3  text-xl">
        <Link to={"/profile"}>Articles</Link>
        <div></div>
      </div>
      <div className="my-3  text-xl">
        <Link to={"/profile"}>Workshops</Link>
        <div></div>
      </div>
      <div className="my-3  text-xl">
        <Link to={"/profile"}>Patent</Link>
        <div></div>
      </div>
    </div>
  );
};

export default MenuItems;
