import professor from "../assets/professor.jpg";
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import Analysis from "../components/Analysis";
import { Link } from "react-router-dom";
import axios from "../api/authApi";
import { formatDate } from "../utils/dateFormater";
const ProfileDetails = () => {
  // const [profileImage, setProfileImage] = useState(professor);
  const [userDetails, setUserDetails] = useState({});

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl border-solid border";

  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/profile/viewprofile", {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUserDetails(res.data);
      });
  }, []);

  // , {
  //   headers: {
  //     // "Content-type": "application/json",
  //     Authorization: `${authToken}`,
  //   },
  // }

  // const numberOfWorkshops = userDetails.workshops.length;
  // const numberOfArticles = userDetails.articles.length;
  // const numberOfPublications = userDetails.publications.length;

  const id = userDetails._id;
  // console.log(id);
  return (
    <div>
      <div className="bg-[#fbf0ff] border absolute border-gray-200 mt-20 ml-20 pb-10 rounded-2xl h-auto shadow-lg">
        <div className="flex">
          <div className="flex ">
            <div className="p-7 ">
              <Link to={`/profile/edit/${id}`}>
                <div className="rounded-full w-32 p-2 bg-white">
                  <MdEdit className="inline-block mr-1" />
                  Edit Profile
                </div>
              </Link>
              <h1 className="text-2xl font-semibold ml text-center">
                {userDetails.username}'s Profile
              </h1>
              <div className="flex mt-16">
                <div className="relative">
                  <img
                    className="h-40 w-32 ml-20 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:brightness-75"
                    src={userDetails.profilePicture}
                    alt="profile"
                    // onClick={() =>
                    //   document.getElementById("imageInput").click()
                    // }
                  />
                </div>
                <div className="mt-4 ml-12 font-In ">
                  <h1 className="text-3xl">{userDetails.username}</h1>
                  <h1 className="text-sm">{userDetails.designation}</h1>
                  <h1 className="text-sm text-gray-500">
                    {formatDate(userDetails.dob)}
                  </h1>
                </div>
              </div>
              <div className="flex justify-around mt-4 -mb-6  font-semibold">
                <h1 className="text-sm mr-32">
                  PhoneNo: {userDetails.phoneNumber}
                </h1>
                <h1 className="text-sm">Gender: {userDetails.gender}</h1>
              </div>
              <hr className="w-[800px] h-1 mx-24 my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            </div>
          </div>
        </div>
        <Analysis
          numberOfWorkshops={userDetails.workshops?.length || 0}
          numberOfArticles={userDetails.articles?.length || 0}
          numberOfPublications={userDetails.publications?.length || 0}
        />
      </div>
    </div>
  );
};
export default ProfileDetails;
