import { useFormik } from "formik";
import axios from "../../api/authApi";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { formatDateForForms } from "../../utils/dateFormateForms";

const EditWorkshop = (props) => {
  const { id } = useParams();
  const [workshopData, setWorkshopData] = useState("");
  const navigate = useNavigate();

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-20 my-4 rounded-2xl  border-solid border pointer-events-auto";
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`/workshop/render/${id}`, {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setWorkshopData(res.data);
      });
  }, []);
  //Put ID here in dep Array
  const date = formatDateForForms(workshopData.attendedOn);
  // console.log(date);

  const formik = useFormik({
    initialValues: {
      title: workshopData.title,
      organizedBy: workshopData.organizedBy,
      attendedOn: date,
      subject: workshopData.subject,
      summary: workshopData.summary,
    },

    enableReinitialize: true,
    onSubmit: (values) => {
      axios
        .put(`/workshop/edit/${id}`, values, {
          headers: {
            // "Content-type": "application/json",
            Authorization: `${authToken}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            navigate("/profile/workshop");
          }
        });
      console.log(values);
    },
  });

  // console.log(formik.initialValues);

  return (
    <div className="flex flex-col h-full w-full ml-[300px] mt-10  relative">
      <div className="inset-0 flex  items-center justify-center">
        <h1 className="text-3xl font-semibold bg-white mr-54">
          Edit your Workshop Details
        </h1>
      </div>

      <form className="w-96 ml-20" onSubmit={formik.handleSubmit} method="put">
        <input
          className={style}
          id="title"
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <input
          className={style}
          id="organizedBy"
          type="text"
          name="organizedBy"
          placeholder="Organized By"
          onChange={formik.handleChange}
          value={formik.values.organizedBy}
        />

        <input
          className={style}
          id="attendedOn"
          type="date"
          name="attendedOn"
          placeholder="Attend On "
          onChange={formik.handleChange}
          value={formik.values.attendedOn}
        />

        <input
          className={style}
          id="subject"
          type="text"
          name="subject"
          placeholder="Enter Subject Type"
          onChange={formik.handleChange}
          value={formik.values.subject}
        />
        <textarea
          className="focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-20 my-4 rounded-2xl  border-solid border pointer-events-auto"
          id="summary"
          rows="15"
          cols="40"
          name="summary"
          placeholder="Summary of event"
          onChange={formik.handleChange}
          value={formik.values.summary}
        />
        <div className="ml-56">
          <button
            className="w-24 text-white rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] "
            type="submit"
          >
            EDIT
          </button>
          <button
            className="w-24 text-white rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] "
            type="reset"
          >
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditWorkshop;
