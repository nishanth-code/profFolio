import { React, useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import professor from "../assets/professor.jpg";
import { MdEdit } from "react-icons/md";
axios.defaults.withCredentials = true;
const AddProfile = () => {
  const [profileImage, setProfileImage] = useState(professor);
  const authToken = localStorage.getItem("token");

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl border-solid border pointer-events-auto";

  const formik = useFormik({
    initialValues: {
      userName: "",
      designation: "",
      phoneNum: "",
      gender: "",
      dob: "",
    },

    onSubmit: (values) => {
      axios.post(url, { values }, {}).then((res) => {
        console.log(res);
      });
      console.log(values);
    },
  });

  const handleImageChange = (event) => {
    const newImage = URL.createObjectURL(event.target.files[0]);
    setProfileImage(newImage);
  };

  return (
    <div className="h-full rounded-xl flex flex-col justify-center ml-40">
      <div className="text-3xl font-semibold my-10 pt-10 ml-64">
        Enter your profile Details
      </div>
      <div className="">
        <form onSubmit={formik.handleSubmit} method="post">
          <div className="relative ml-[250px]">
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
                className="hidden "
                onChange={handleImageChange}
              />
              <MdEdit className=" inline-block mr-1" />
              Select Image
            </label>
          </div>
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
  );
};

export default AddProfile;
