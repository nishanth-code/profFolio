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
            <div className="form-inputs">
              <input
                id="userName"
                type="text"
                name="userName"
                placeholder="User Name"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
            </div>
            <div className="form-inputs">
              <input
                id="phoneNum"
                type="number"
                name="phoneNum"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phoneNum}
              />
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
            <button type="submit">back</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
