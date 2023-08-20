import React, { useState } from "react";
import Professor from "../../assets/professor.jpg";
import { Link, useParams } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "../../api/authApi";
import { formatDate } from "../../utils/dateFormater";

const UserWorkshopCard = (props) => {
  const [expanded, setExpanded] = useState(false);
  const id = props.id;

  const authToken = localStorage.getItem("token");
  const handleDelete = () => {
    axios
      .delete(`/workshop/delete/${id}`, {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        props.onDelete(props.id);
      });
  };

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
      <div className="bg-[#fbf0ff] border border-gray-200 text-black font-semibold  h-auto w-96 z-10 rounded-xl my-10 mx-8 shadow-lg hover:scale-110 ease-in duration-300">
        <div className="ml-4 mt-4 flex pt-2 ">
          <img
            className="rounded-full mr-4 h-12 w-auto "
            src={props.profilePicture}
            alt="Prof"
          />
          <p className="mx-1 my-2">Title: {props.title}</p>
          <Link to={`/profile/workshop/edit/${id}`}>
            <div className="bg-white text-black rounded p-2 h-7 w-7  text-center ml-12 mr-2">
              <MdEdit />
            </div>
          </Link>
          <div
            className="bg-white text-black rounded p-2 h-7 w-7 cursor-pointer text-center ml-1"
            onClick={handleDelete}
          >
            <MdDelete />
          </div>
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
            className="border bg-gray-100   border-solid inline-block hover:underline cursor-pointer "
            onClick={toggleExpanded}
          >
            {expanded ? "See Less" : "See More"}
          </p>
        </p>
      </div>
    </div>
  );
};

export default UserWorkshopCard;
