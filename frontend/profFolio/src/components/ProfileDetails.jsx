import SideBar from "./SideBar";
import professor from "../assets/professor.jpg";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import Analysis from "./Analysis";
import { useFormik } from "formik";
import * as Yup from "yup";

const ProfileDetails = () => {
  const [profileImage, setProfileImage] = useState(professor);
  const [userName, setUserName] = useState("user_name");
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  const formik = useFormik({
    initialValues: {
      userName: "",
      designation: "",
      phoneNum: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().matches(
        /^[A-Za-z0-9._%+-]+@drait\.edu\.in$/,
        "Invalid Email (please use college email ID)"
      ),
    }),

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

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      {userLoggedIn ? (
        <div className="flex">
          <div className="flex fle">
            {/* <SideBar /> */}
            <div className="p-7">
              <h1 className="text-2xl font-semibold ml">Profile Page</h1>
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
                  <div className="absolute bottom-2 right-2 bg-white text-black px-2 py-1 rounded-full cursor-pointer opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <MdEdit className="inline-block mr-1" />
                    Edit pic
                  </div>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="mt-12 ml-12 font-In ">
                  <h1 className="text-3xl">user_name</h1>
                  <input
                    type="text"
                    className="text-xl font-bold outline-none border-b border-transparent focus:border-blue-500"
                    value={userName}
                    onChange={handleNameChange}
                  />
                  <h1 className="text-sm">type_Professor</h1>
                </div>
              </div>
              <hr className="w-96 h-1 mx-12 my-4 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            </div>
          </div>
          <Analysis />
        </div>
      ) : (
        <div className="bg-gray-100 mx-40 w-full h-auto rounded-xl">
          <div className="ml-36 mt-40 pt-10 text-center">
            <p>Login with one of the following options</p>
          </div>
          <form onSubmit={formik.handleSubmit} method="post">
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="userName"
                type="text"
                name="userName"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="designation"
                type="text"
                name="designation"
                placeholder="Designation"
                onChange={formik.handleChange}
                value={formik.values.designation}
              />
            </div>
            <div className="">
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="phoneNum"
                type="number"
                max={9999999999}
                name="phoneNum"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phoneNum}
              />
            </div>

            {/* <div>
              <input
                className="h-10 bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="department"
                type="text"
                name="department"
                placeholder="Department"
              />
            </div> */}
            <div className="text-white text-center ">
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] justify-center"
                type="button"
                // onClick={() => redirect("/")}
              >
                SUBMIT
              </button>
            </div>
          </form>
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
