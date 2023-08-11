import SideBar from "./SideBar";
import professor from "../assets/professor.jpg";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import Analysis from "./Analysis";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const ProfileDetails = () => {
  const [profileImage, setProfileImage] = useState(professor);
  // const [userName, setUserName] = useState("user_name");
  const [userDetails, setUserDetails] = useState(true);
  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl border-solid border";

  //route = /profile/signUp, method=POST

  const formik = useFormik({
    initialValues: {
      userName: "",
      designation: "",
      phoneNum: "",
      gender: "",
      dob: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  // useEffect ( () => {
  //   const imageURL = "Cloudinery URL"
  //   setProfileImage(imageURL)
  // }, [])
  const handleImageChange = (event) => {
    const newImage = URL.createObjectURL(event.target.files[0]);
    setProfileImage(newImage);
  };

  // const handleNameChange = (e) => {
  //   setUserName(e.target.value);
  // };
  return (
    <div>
      {userDetails ? (
        <div className="bg-[#fbf0ff] border absolute border-gray-200 mt-20 ml-20 pb-10 rounded-2xl h-auto shadow-lg">
          <div className="flex">
            <div className="flex ">
              {/* <SideBar /> */}
              <div className="p-7 ">
                <Link to={"/profile/edit"}>
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
                      onClick={() =>
                        document.getElementById("imageInput").click()
                      }
                    />
                   
                    <label className="pl-20 cursor-pointer font-bold ">
                      <input
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                      <MdEdit className=" inline-block mr-1" />
                      Select Image
                    </label>
                  </div>
                  <div className="mt-12 ml-12 font-In ">
                    <h1 className="text-3xl">user_name</h1>
                    {/* <input
                    type="text"
                    className="text-3xl font-bold outline-none border-b border-transparent focus:border-blue-500"
                    value={userName}
                    onChange={handleNameChange}
                  /> */}
                    <h1 className="text-sm">type_Professor</h1>
                  </div>
                </div>
                <hr className="w-[800px] h-1 mx-24 my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
              </div>
            </div>
          </div>
          <Analysis />
        </div>
      ) : (
        <div className="h-full rounded-xl flex flex-col justify-center ml-40">
          <div className="text-3xl font-semibold mt-10 pt-10 ml-72">
            Enter your profile Details
          </div>
          <div className="">
            <form onSubmit={formik.handleSubmit} method="post">
              <input
                className={style}
                id="userName"
                type="text"
                name="userName"
                placeholder="Name"
                required={true}
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
              {/* </div> */}
              {/* <div> */}
              <input
                className={style}
                id="designation"
                type="text"
                name="designation"
                placeholder="Designation"
                required={true}
                onChange={formik.handleChange}
                value={formik.values.designation}
              />
              {/* </div> */}
              {/* <div className=""> */}
              <input
                className={style}
                id="phoneNum"
                type="number"
                max={9999999999}
                name="phoneNum"
                placeholder="Phone Number"
                required={true}
                onChange={formik.handleChange}
                value={formik.values.phoneNum}
              />
              {/* </div> */}
              <input
                className={style}
                id="gender"
                type="text"
                name="gender"
                placeholder="Gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
              />
              <input
                className={style}
                id="dob"
                type="date"
                name="dob"
                placeholder="Date Of Birth"
                onChange={formik.handleChange}
                value={formik.values.dob}
              />
              {/* <div>
              <input
                className="h-10 bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="department"
                type="text"
                name="department"
                placeholder="Department"
              />
            </div> */}
              <div className=" text-center mr-64">
                <button
                  className="w-24 text-white rounded-md my-2  px-1 py-1 bg-[#0C2785] justify-center"
                  type="submit"
                  // onClick={onSubmit()}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
