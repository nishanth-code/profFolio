import { Link } from "react-router-dom";

const MenuItems = () => {
  const style =
    "my-6 text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";
  return (
    <div>
      <h3 className="mt-20 text-4xl font-semibold text-white">MENU</h3>

      <div className={style}>
        <Link to={"/profile"}>Profile</Link>
        <div></div>
      </div>
      <div className={style}>
        <Link to={"/publications"}>Publications</Link>
        <div></div>
      </div>
      <div className={style}>
        <Link to={"/articles"}>Articles</Link>
        <div></div>
      </div>
      <div className={style}>
        <Link to={"/workshops"}>Workshops</Link>
        <div></div>
      </div>
      <div className={style}>
        <Link to={"/"}>Home Page</Link>
        <div></div>
      </div>
      {/* <div className="my-6 text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        <Link to={"/patent"}>Patent</Link>
        <div></div>
      </div> */}
    </div>
  );
};

export default MenuItems;
