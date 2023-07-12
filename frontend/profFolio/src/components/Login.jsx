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
      <div className="login-container">
        <div className="bg-cover bg-no-repeat">
          <img className="" src={LoginBackground} />
        </div>
        <div className="login-details ">
          <p className="text-5xl">LOG IN</p>
          <p>Login with one of the following options</p>
          <form onSubmit={formik.handleSubmit} method="post">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
            <button>Continue with Google</button>
            <button> Continue with LinkedIn</button>
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
              {formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
            <a href="/register">Register</a>
            <button type="submit">Login</button>
            <button type="submit">back</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
