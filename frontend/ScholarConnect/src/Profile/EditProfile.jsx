import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import professor from "../assets/professor.jpg";
import { MdEdit } from "react-icons/md";
import axios from "../api/authApi";
import { useNavigate } from "react-router-dom";
import moment from "moment";

axios.defaults.withCredentials = true;
const EditProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [profileImage, setProfileImage] = useState(professor);
  const navigate = useNavigate();
  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl border-solid border pointer-events-auto";

  // const url = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/profile/${id}`;

  // const editUrl = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/profile/edit/${id}`;
  // const editUrl = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/profile/edit/64d4f7254b9470d6ccd3ca76`;

  useEffect(() => {
    axios.get("/profile/viewProfile").then((res) => {
      // console.log(res);
      setProfileData(res.data);
      setProfileImage(res.data.profilePicture);
    });
  }, []);
  //Put ID here in dep Array
  const date = moment(profileData.dob).format("YYYY-MM-DD");

  const formik = useFormik({
    initialValues: {
      profilePicture: "",
      designation: profileData.designation,
      phoneNumber: profileData.phoneNumber,
      gender: profileData.gender,
      dob: date,
    },
    enableReinitialize: true,

    onSubmit: (values) => {
      const formData = new FormData(); // Create a FormData object
      formData.append("profilePicture", values.profilePicture); // Append the image file to FormData
      // Append other form data fields
      formData.append("designation", values.designation);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("gender", values.gender);
      formData.append("dob", values.dob);

      axios
        .put("/profile/updateProfile", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // here content-Type is multipart so that diff kinds of content can be sent
          },
        })
        .then((res) => {
          console.log(res);
          setProfileData(res.data);
          if (res.status == 200) {
            navigate("/profile");
          }
        });
    },
  });

  const handleImageChange = (event) => {
    const newImage = URL.createObjectURL(event.target.files[0]);
    setProfileImage(newImage);
    formik.setFieldValue("profilePicture", event.target.files[0]);
  };

  return (
    <div>
      <div className="h-full rounded-xl flex flex-col justify-center ml-40">
        <div className="text-3xl font-semibold my-10 pt-10 ml-72">
          Edit profile Details
        </div>
        <div className="">
          <form onSubmit={formik.handleSubmit} method="post">
            <div className="relative ml-[280px]">
              <img
                className="h-40 w-32 ml-20 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:brightness-75"
                src={profileImage}
                alt="profile"
                onClick={() => document.getElementById("imageInput").click()}
              />

              <label className="pl-20 cursor-pointer font-bold ">
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  name="profilePicture"
                  onChange={handleImageChange}
                  value={formik.values.profilePicture}
                />
                <MdEdit className="inline-block mr-1" />
                Select Image
              </label>
            </div>
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
            <input
              className={style}
              id="phoneNumber"
              type="number"
              max={9999999999}
              name="phoneNumber"
              placeholder="Phone Number"
              required={true}
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
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

            <div className=" text-center mr-64">
              <button
                className="w-24 text-white rounded-md my-2  px-1 py-1 bg-[#0C2785] justify-center"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
