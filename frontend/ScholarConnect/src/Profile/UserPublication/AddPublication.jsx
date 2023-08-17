import { useFormik } from "formik";
import PublicationFormDetails from "../../form-fields/PublicationFormJson";
import { useState } from "react";
// import axios from "axios";
import axios from "../../api/authApi";
import { Navigate, useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const AddPublication = () => {
  const navigate = useNavigate();

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-40 my-4 rounded-2xl  border-solid border pointer-events-auto";

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
      axios.post("/publication/addpublication", values).then((res) => {
        console.log(res.data.msg);
        if (res.status == 200) {
          navigate("/profile/publication");
        }
      });
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center  w-fit h-full">
      <h1 className="text-3xl ml-[470px] font-semibold">
        Enter Publication Details
      </h1>
      <div className="content-center ml-28">
        <form onSubmit={formik.handleSubmit} method="post">
          <div>
            {PublicationFormDetails.map((field) => (
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

export default AddPublication;
