import React, { useState } from "react";
import axios from "../../api/authApi";
import { formatDate } from "../../utils/dateFormater";
axios.defaults.withCredentials = true;
const WorkshopCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncateSummary = (summary, wordLimit) => {
    const words = summary.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return summary;
  };
  return (
    <div className="text-white h-auto w-auto flex">
      <div className="bg-[#550C6B] backdrop-blur-sm border border-gray-200 font-semibold  h-auto w-96 z-10 rounded-xl my-10 mx-8 shadow-lg hover:scale-105 ease-out duration-300 pb-4">
        <div className="ml-4 mt-4 flex pt-2 ">
          <img
            className="rounded-full mr-4 h-12 w-auto "
            src={props.profilePicture}
            alt="Prof"
          />
          <p className="mx-1 my-2">Title: {props.title}</p>
        </div>

        <p className=" my-2 mx-4 text-slate-400">
          Attended On: {formatDate(props.attendedOn)}
        </p>
        <p className="mx-4 my-2 ">OrganizedBy: {props.organizedBy}</p>
        <p className="mx-4 my-2">subject: {props.subject}</p>
        <p className="mx-4 my-2">Summary: </p>
        <p className="text-semibold text-justify mx-5">
          {expanded ? props.summary : truncateSummary(props.summary, 10)}
          <p
            className="border  hover:bg-white hover:text-[#550C6B] border-solid inline-block cursor-pointer "
            onClick={toggleExpanded}
          >
            {expanded ? "See Less" : "See More"}
          </p>
        </p>
      </div>
    </div>
  );
};

export default WorkshopCard;
