import { useFormik } from "formik";
import WorkshopFormDetails from "../../form-fields/WorkshopFormJson";
import React, { useState } from "react";
import axios from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const AddWorkshop = () => {
  const navigate = useNavigate();
  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-40 my-4 rounded-2xl  border-solid border pointer-events-auto";
  const authToken = localStorage.getItem("token");

  const formik = useFormik({
    initialValues: {
      title: "",
      organizedBy: "",
      attendedOn: "",
      duration: "",
      subject: "",
      summary: "",
    },

    onSubmit: (values) => {
      axios
        .post("/workshop/add", values, {
          headers: {
            // "Content-type": "application/json",
            Authorization: `${authToken}`,
          },
        })
        .then((res) => {
          console.log(res.data.msg);
          if (res.status == 200) {
            navigate("/profile/workshop");
          }
        });
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center mt-20 w-fit h-full">
      <h1 className="text-3xl ml-[470px] font-semibold">
        Enter Workshop Details
      </h1>
      <div className="content-center ml-28">
        <form onSubmit={formik.handleSubmit} method="post">
          <div>
            {WorkshopFormDetails.map((field) => (
              <div key={field.id}>
                <input
                  className={style}
                  id={field.id}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  onChange={formik.handleChange}
                  value={formik.values[field.name]}
                />
              </div>
            ))}
            <textarea
              className="focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-40 my-4 rounded-2xl  border-solid border pointer-events-auto"
              id="summary"
              type="text"
              rows="5"
              cols="25"
              name="summary"
              placeholder="Summary of Workshop"
              required={true}
              onChange={formik.handleChange}
              value={formik.values.summary}
            />
          </div>
          <div className="flex">
            <div className="text-white ml-[365px]">
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] "
                type="submit"
              >
                SUBMIT
              </button>
            </div>
            <div className="text-white ">
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] "
                type="reset"
              >
                RESET
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorkshop;
