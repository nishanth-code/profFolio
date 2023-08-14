import { useFormik } from "formik";
import WorkshopFormDetails from "../../form-fields/WorkshopFormJson";
import { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const AddWorkshop = () => {
  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-40 my-4 rounded-2xl  border-solid border pointer-events-auto";

  const url =
    "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/addpublication";

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publishedMedia: "",
      doi: "",
      year: "",
      subject: "",
      volume: "",
      editor: "",
      publisher: "",
      pageNo: "",
      url: "",
    },

    onSubmit: (values) => {
      axios.post(url, { values }, { withCredentials: true }).then((res) => {
        console.log(res.data.msg);
      });
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center  w-fit h-full">
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
              className=" focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-40 my-4 rounded-2xl  border-solid border pointer-events-auto"
              id="summary"
              typeof="text"
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
