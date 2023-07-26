import { useState } from "react";

const SeeMore = () => {
  const [showSeeMore, setShowSeeMore] = useState(false);

  return (
    <div>
      {showSeeMore ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-30"
          onClick={() => setShowSeeMore(!showSeeMore)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSeeMore(!showSeeMore)}
          className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}
      <div
        className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-20 ease-in-out duration-300 ${
          showSeeMore ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h3>
      </div>
    </div>
  );
};
export default SeeMore;
