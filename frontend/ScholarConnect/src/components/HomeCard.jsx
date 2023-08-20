import React from "react";

const HomeCard = (props) => {
  return (
    <>
      <div className="flex justify-between -ml-3">
        <div className="bg-gradient-to-b from-[#341649] to-[#550C6B]  h-96 w-2/5 z-10 ml-20  my-96 rounded-3xl">
          <div className="text-white text-center my-28 text-xl">
            Total Number of Publication:
            <p className="text-9xl text-center"> {props.publications} </p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#341649] to-[#550C6B]  h-96 w-2/5 z-10  mr-16 my-96 rounded-3xl">
          <div className="text-white text-center my-28 text-xl">
            Total Number of Articles:
            <p className="text-9xl text-center"> {props.articles} </p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gradient-to-b from-[#550C6B] to-[#341649] h-auto z-10 text-center rounded-3xl -mt-56 ml-96 w-1/2 py-10 pr-10">
          <p className="text-white my-2 text-xl ml-16">
            Recent Publication: {props.publications}
          </p>
          <p className="text-white my-2 text-xl ml-16">
            Recent Articles: {props.articles}
          </p>
          <p className="text-white my-2 text-xl ml-16">
            Recent Workshops: {props.workshops}
          </p>
        </div>
      </div>
    </>
  );
};
export default HomeCard;
