import BodyImg from "../assets/Looper-BG.png";
import Rectangle from "../assets/Rectangle-4.png";

const Body = () => {
  return (
    <>
      <div className="image-container relative -top-28">
        {/* <h2>Home</h2>
        This is body */}
        <img className="absolute" src={BodyImg} alt="Body image" />
      </div>
      <div className="h-96 my-24 relative mx-16 rounded-3xl bg-gradient-to-b from-[#341649] to-[#550C6B]  flex justify-between">
        <div className="h-96">
          <img
            className="absolute rounded-tl-3xl rounded-bl-3xl w-2/4 h-96"
            src={Rectangle}
            alt="Reactangle Image"
          />
        </div>
        <div className="w-2/5 z-1 my-14 mx-">
          <p className="mx-12 text-6xl text-white font-Inria">
            Empowering humanity through scientific exploration.
          </p>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Body;

// Shimmer
// import React, { useState, useEffect } from "react";
// import BodyImg from "../assets/Looper-BG.png";
// import Rectangle from "../assets/Rectangle-4.png";

// const Body = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate an asynchronous image loading process
//     const image = new Image();
//     image.src = BodyImg;
//     image.onload = () => {
//       setIsLoading(false);
//     };
//   }, []);

//   return (
//     <div className="">
//       <div className="image-container relative">
//         {isLoading ? (
//           <div className="absolute h-full w-full bg-gradient-to-r from-transparent to-transparent via-white animate-shimmer"></div>
//         ) : null}
//         <img className={`absolute ${isLoading ? "hidden" : ""}`} src={BodyImg} alt="Body image" />
//       </div>
//       {/* Rest of your component */}
//     </div>
//   );
// };

// export default Body;

// @keyframes shimmer {
//   0% {
//     background-position: -1000px 0;
//   }
//   100% {
//     background-position: 1000px 0;
//   }
// }
