import BodyImg from "../assets/Looper-BG.png";

const Body = () => {
  return (
    //  <div className=" bg-black">
      <div className="image-container">
        <h2>Home</h2>
        This is body
        <img className="absolute top-1 z-10" src={BodyImg} alt="Body image" />
      </div>
    //</div>
  );
};

export default Body;
