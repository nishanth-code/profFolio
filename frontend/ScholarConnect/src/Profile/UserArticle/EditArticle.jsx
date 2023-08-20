import PublicationFormDetails from "../../form-fields/PublicationFormJson";
import { useFormik } from "formik";
import axios from "../../api/authApi";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
axios.defaults.withCredentials = true;
import moment from "moment";
import { formatDateForForms } from "../../utils/dateFormateForms";

const EditArticle = (props) => {
  const { id } = useParams();
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-20 my-4 rounded-2xl  border-solid border pointer-events-auto";
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`/article/render/${id}`, {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      });
  }, []);
  //Put ID here in dep Array
  const date = formatDateForForms(userData.publishedOn);
  // console.log(date);

  const formik = useFormik({
    initialValues: {
      title: userData.title,
      author: userData.author,
      publishedOn: date,
      publishedMedia: userData.publishedMedia,
      subject: userData.subject,
      summary: userData.summary,
    },

    enableReinitialize: true,
    onSubmit: (values) => {
      axios
        .put(`/article/edit/${id}`, values, {
          headers: {
            // "Content-type": "application/json",
            Authorization: `${authToken}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            navigate("/profile/article");
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
          Edit your Article Details
        </h1>
      </div>

      <form className="w-96 ml-20" onSubmit={formik.handleSubmit} method="put">
        <input
          className={style}
          id="title"
          type="title"
          name="publication[title]"
          placeholder="Title of Article"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <input
          className={style}
          id="author"
          type="text"
          name="author"
          placeholder="Author of Article"
          onChange={formik.handleChange}
          value={formik.values.author}
        />

        <input
          className={style}
          id="publishedMedia"
          type="text"
          name="publishedMedia"
          placeholder="Published Media On "
          onChange={formik.handleChange}
          value={formik.values.publishedMedia}
        />
        <input
          className={style}
          id="publishedOn"
          type="date"
          name="publishedOn"
          placeholder="Enter Duration"
          onChange={formik.handleChange}
          value={formik.values.publishedOn}
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
          type="text"
          rows="5"
          cols="25"
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

export default EditArticle;
// pointer-events-auto
