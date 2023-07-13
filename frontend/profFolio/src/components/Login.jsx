import { useState } from "react";
import LoginBackground from "../assets/LoginBackground.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().matches(
        /^[A-Za-z0-9._%+-]+@drait\.edu\.in$/,
        "Invalid Email (accepts only @drait.edu.in)"
      ),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  // console.log(formik.errors);
  // console.log(formik.values);
  return (
    <>
      {/* bg-gradient-to-r from-[#c9bdbd]  to-[#776e6e] */}
      <div className="flex max-h-fit items-center relative justify-center text-center text-white bg-auto bg-no-repeat">
        <div className="">
          <img className="h-screen w-screen" src={LoginBackground} />
        </div>
        <div className="justify-center rounded-xl absolute w-2/5 h-auto backdrop-blur-sm bg-white/20 pt-8 text-[calc(10px + 2vmin)]">
          <p className="text-5xl relative my-1">LOG IN</p>
          <p>Login with one of the following options</p>
          <form onSubmit={formik.handleSubmit} method="post">
            <div className="flex w-2/4 mx-40 my-2 rounded-2xl justify-center items-center border-solid border ">
              <img
                className="h-8 w-8 mx-2"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
              <button className="my-2  bg-transparent border-solid border-white ">
                Continue with Google
              </button>
            </div>
            <div className="form-inputs">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
            <div className="form-inputs">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.email ? <p>{formik.errors.password}</p> : null}
            </div>
            <a className="" href="/register">
              Register?
            </a>
            <div className="flex justify-center ">
              <button
                className="w-24 flex justify-center my-2 mx-1 px-1 py-1  rounded-md  bg-[#0C2785]"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 flex"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                Login
              </button>
            </div>
            <div>
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] justify-center"
                type="submit"
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

export default Login;
