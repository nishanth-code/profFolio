import React, { useState } from "react";
import { useFormik } from "formik";

const EditProfile = () => {
  const [profileData, setProfileData] = useState("");

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl border-solid border";

  const formik = useFormik({
    initialValues: {
      userName: "",
      designation: "",
      phoneNum: "",
      gender: "",
      dob: "",
    },

    onSubmit: (values) => {
      // axios.post(url, { values }, {}).then((res) => {
      //   console.log(res);
      // setUserData(res.data);
      // });

      console.log(values);
    },
  });
  return (
    <div>
      <div className="h-full rounded-xl flex flex-col justify-center ml-40">
        <div className="text-3xl font-semibold mt-10 pt-10 ml-72">
          Edit profile Details
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
    </div>
  );
};

export default EditProfile;
