import BodyImg from "../assets/Looper-BG.png";
import Rectangle from "../assets/Rectangle-4.png";

const Body = () => {
  return (
    <div className="">
      <div className="image-container relative">
        <h2>Home</h2>
        This is body
        <img className="absolute " src={BodyImg} alt="Body image" />
      </div>
      <div className="h-96 my-16 bg-gradient-to-b from-[#341649] to-[#550C6B] bg-opacity-100 flex justify-between">
        <div className="h-96">
          <img
            className="absolute  w-2/4 h-2/4"
            src={Rectangle}
            alt="Reactangle Image"
          />
        </div>
        <div className="w-2/5 my-14 mx-">
          <p className="mx-12 text-6xl text-white font-Inria">
            Empowering humanity through scientific exploration.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Body;
