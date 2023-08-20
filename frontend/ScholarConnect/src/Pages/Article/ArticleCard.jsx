import React, { useState } from "react";
import Professor from "../../assets/professor.jpg";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "../../api/authApi";
import { formatDate } from "../../utils/dateFormater";
axios.defaults.withCredentials = true;
const ArticleCard = (props) => {
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
    <div>
      <div className="bg-[#550C6B] text-white border relative border-gray-200 mt-20 ml-20 pb-10 rounded-2xl h-auto w-[1100px] shadow-lg hover:scale-105 ease-in duration-300">
        <div className="flex">
          <div className="flex ">
            <div className="p-7 ">
              <h1 className="text-2xl font-semibold ml text-center -mt-6">
                Article on: {props.title}
              </h1>
              <div className="flex mt-2">
                <div className="relative">
                  <img
                    className="h-32 w-24 ml-20 rounded-xl  transition duration-300 ease-in-out transform hover:brightness-75"
                    src={props.profilePicture}
                    alt="profile"
                  />
                </div>
                <div className="mt-3 ml-12 font-In ">
                  <h1 className="text-3xl">Author: {props.author}</h1>
                  <h1 className="text-sm text-gray-400">
                    Published On: {formatDate(props.publishedOn)}
                  </h1>
                  <h1 className="text-sm">Media: {props.publishedMedia}</h1>
                  <h1 className="text-sm">Subject: {props.subject}</h1>
                </div>
              </div>
              <hr className="w-[800px] h-1 mx-24 my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <p className="text-xl font-bold -mt-16 text-center">Summary</p>
        </div>
        <p className="text-semibold text-justify mx-5">
          {expanded ? props.summary : truncateSummary(props.summary, 50)}
          <p
            className="border rounded-sm ml-2 p-1 hover:bg-white hover:text-[#550C6B] border-solid inline-block cursor-pointer"
            onClick={toggleExpanded}
          >
            {expanded ? "See Less" : "See More"}
          </p>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
