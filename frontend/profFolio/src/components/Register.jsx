import { useState } from "react";
import LoginBackground from "../assets/LoginBackground.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      phoneNum: "",
      email: "",
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

  return (
    <>
      <div className="flex max-h-fit items-center relative justify-center text-center text-white bg-auto bg-no-repeat">
        <div className="">
          <img className="h-screen w-screen" src={LoginBackground} />
        </div>
        <div className=" justify-center rounded-xl absolute w-2/5 h-auto backdrop-blur-sm bg-white/30 pt-8 text-[calc(10px + 2vmin)]">
          <p className="text-5xl relative">REGISTER</p>

          <form onSubmit={formik.handleSubmit} method="post">
            <div className="">
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="userName"
                type="text"
                name="userName"
                placeholder="User Name"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
            </div>
            <div className="">
              <input
                className="h-10 invalid:border-red-500 appearance-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNum"
                type="number"
                max={9999999999}
                name="phoneNum"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phoneNum}
              />
            </div>
            <div className="">
              <input
                className="h-10 focus:outline-none invalid:border-red-500 bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <p className="text-red-600  text-md font-semibold -pt-2">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="">
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center text-white w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.email ? <p>{formik.errors.password}</p> : null}
            </div>
            <div className="flex justify-center ">
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] justify-center"
                type="submit"
              >
                register
              </button>
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] justify-center"
                type="button"
              >
                back
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
