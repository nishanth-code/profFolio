import SideBar from "../components/SideBar";
import professor from "../assets/professor.jpg";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import Analysis from "../components/Analysis";
import { Link } from "react-router-dom";
import axios from "axios";
// axios.defaults.withCredentials = true;

const ProfileDetails = () => {
  const [profileImage, setProfileImage] = useState(professor);
  const [userDetails, setUserDetails] = useState({});
  const authToken = localStorage.getItem("token");
  console.log(authToken);
  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl border-solid border";

  //route = /profile/signUp, method=POST

  // useEffect ( () => {
  //   const imageURL = "Cloudinery URL"
  //   setProfileImage(imageURL)
  // }, [])

  const url =
    "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/profile/viewprofile";

  // const url = "https://scholarconnect.onrender.com/profile/viewprofile";

  useEffect(() => {
    // console.log(authToken);

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUserDetails(res.data);
      });
  }, []);
  // pass uerId soo that changes reflect on profile page

  console.log(userDetails);

  // const  userDetails.

  // const handleImageChange = (event) => {
  //   const newImage = URL.createObjectURL(event.target.files[0]);
  //   setProfileImage(newImage);
  // };

  // const handleNameChange = (e) => {
  //   setUserName(e.target.value);
  // };

  const id = 1;
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
                Profile Page
              </h1>
              <div className="flex mt-16">
                <div className="relative">
                  <img
                    className="h-40 w-32 ml-20 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:brightness-75"
                    src={profileImage}
                    alt="profile"
                    // onClick={() =>
                    //   document.getElementById("imageInput").click()
                    // }
                  />
                </div>
                <div className="mt-12 ml-12 font-In ">
                  <h1 className="text-3xl">user_name</h1>
                  <h1 className="text-sm">type_Professor</h1>
                </div>
              </div>
              <hr className="w-[800px] h-1 mx-24 my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            </div>
          </div>
        </div>
        <Analysis />
      </div>
    </div>
  );
};
export default ProfileDetails;

// const [profileImage, setProfileImage] = useState(professor);

// const handleImageChange = async (event) => {
//   const imageFile = event.target.files[0];

//   if (imageFile) {
//     // Upload image to Cloudinary
//     const formData = new FormData();
//     formData.append("file", imageFile);
//     formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary upload preset

//     const response = await fetch(
//       "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     const data = await response.json();
//     const newImageUrl = data.secure_url;

//     // Update profile image
//     setProfileImage(newImageUrl);
//   }
// };
