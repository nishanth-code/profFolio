import React, { useEffect, useState } from "react";
import Professor from "../../assets/professor.jpg";
import { SlBadge } from "react-icons/sl";
import axios from "../../api/authApi";
import { formatDate } from "../../utils/dateFormater";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const UserPatentCard = (props) => {
  const [patentData, setPatentData] = useState({
    patents: [],
    profilepic: "",
  });

  // useEffect(() => {
  //   axios.get("/profile/patent").then((res) => {
  //     console.log(res);
  //     setPatentData(res.data);
  //   });
  // }, []);

  // console.log(patentData);

  const id = props.id;
  const authToken = localStorage.getItem("token");

  const handleDelete = () => {
    axios
      .delete(`/patent/delete/${id}`, {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        props.onDelete(props.id);
      });
  };

  return (
    <div className="bg-[#fbf0ff] flex justify-center items-center border relative border-gray-200 mt-10 mb-4 ml-20 pb-10 rounded-2xl h-auto w-[900px] shadow-lg hover:scale-105 ease-in duration-300">
      <div className="flex ">
        <div className="p-7 ">
          <div className="flex justify-around">
            <Link to={`/profile/patent/edit/${id}`}>
              <div className="rounded-full w-32 p-2 bg-white -ml-56">
                <MdEdit className="inline-block mr-1" />
                Edit Patent
              </div>
            </Link>
            <div
              className="bg-white text-black rounded pl-2 pt-2 h-9 w-9 cursor-pointer text-center ml-2 mt-1 -mr-96"
              onClick={handleDelete}
            >
              <MdDelete />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center ml-20">
            Patent: {props.title}
          </h1>
          <div className="flex mt-16">
            <div className="relative">
              <img
                className="h-40 w-32 ml-20 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:brightness-75"
                src={props.profilePicture}
                alt="profile"
                // onClick={() =>
                //   document.getElementById("imageInput").click()
                // }
              />
            </div>
            <div className="ml-12 ">
              <h1 className="text-3xl">Inventor: {props.inventors}</h1>
              <h1 className="text-xl">{props.applicationNumber}</h1>
              <h1 className="text-lg text-gray-400">
                Publication Date: {formatDate(props.publicationDate)}
              </h1>
              <h1 className="text-md">Status: {props.status} </h1>

              <h1 className="text-lg">
                FilingDate: {formatDate(props.filingDate)}
              </h1>

              <h1 className="text-sm">Country: {props.filingCountry}</h1>
              <h1 className="text-sm">
                Subject Category: {props.subjectCategory}
              </h1>
            </div>
          </div>
          {/* <hr className="w-[800px] h-1 mx-24 my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
        </div>
      </div>
      <div className="text-[200px] text-red-300 mt-40">
        <SlBadge />
      </div>
    </div>
  );
};

export default UserPatentCard;
