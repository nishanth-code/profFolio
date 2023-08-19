import React, { useEffect, useState } from "react";
import Professor from "../../assets/professor.jpg";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "../../api/authApi";
import { formatDate } from "../../utils/dateFormater";
const UserPublicationCard = (props) => {
  // const [userPublicationData, setUserPublicationData] = useState(props);

  const id = props.id;
  // // console.log(id);

  const handleDelete = () => {
    axios.delete(`/publication/delete/${id}`).then((res) => {
      console.log(res);
      props.onDelete(props.id);
    });
  };

  return (
    <div className="text-white h-auto w-auto">
      <div className="bg-[#fbf0ff] border border-gray-200 text-black font-semibold h-auto w-72 z-10 rounded-xl my-10 mx-8 pb-4 shadow-lg hover:scale-110 ease-in duration-300">
        <div className="ml-4 mt-4 flex pt-2 ">
          <img
            className="rounded-full mr-4 h-12 w-auto"
            src={props.profilePicture}
            alt="Prof"
          />
          <p className="my-3">{props.author}</p>
          <Link to={`/profile/publication/edit/${id}`}>
            <div className="bg-white text-black rounded p-2 h-7 w-7  text-center ml-12 mr-2 ">
              <MdEdit />
            </div>
          </Link>
          <div
            className="bg-white text-black rounded p-2 h-7 w-7  text-center ml-1"
            onClick={handleDelete}
          >
            <MdDelete />
          </div>
        </div>
        <p className="mx-4 my-2">Title: {props.title}</p>
        <p className="mx-4 my-2 text-gray-400">DOI: {formatDate(props.doi)}</p>
        {/* </Link> */}
        <p className="mx-4 my-2 ">Subject: {props.subject}</p>
        <p className="mx-4 my-2">Media: {props.publishedMedia}</p>
        <p className="mx-4 my-2 ">Volume: {props.volume}</p>
        <p className="mx-4 my-2 ">pageNo: {props.pageNo}</p>
        <p className="mx-4 my-2 ">Year: {props.year}</p>
        <p className="mx-4 my-2 ">Publisher: {props.publisher}</p>
        <p className="mx-4 my-2 ">Editor: {props.editor}</p>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 my-2 text-[#550C6B] hover:underline cursor-pointer"
        >
          <span className="font-semibold text-black">URL: </span>
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default UserPublicationCard;
