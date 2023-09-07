import { useFormik } from "formik";
import axios from "../../api/authApi";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { formatDateForForms } from "../../utils/dateFormateForms";

const EditPublication = (props) => {
  const { id } = useParams();
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-20 my-4 rounded-2xl  border-solid border pointer-events-auto";
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`/publication/render/${id}`, {
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
  // const date1 = moment(userData.doi).format("YYYY-MM-DD");
  // console.log(date1);
  const date = formatDateForForms(userData.doi);

  const formik = useFormik({
    initialValues: {
      title: userData.title || "",
      author: userData.author || "",
      publishedMedia: userData.publishedMedia || "",
      doi: date || "",
      year: userData.year || "",
      subject: userData.subject || "",
      volume: userData.volume || "",
      editor: userData.editor || "",
      publisher: userData.publisher || "",
      pageNo: userData.pageNo || "",
      url: userData.url || "",
    },

    enableReinitialize: true,
    onSubmit: (values) => {
      axios
        .put(`/publication/edit/${id}`, values, {
          headers: {
            // "Content-type": "application/json",
            Authorization: `${authToken}`,
          },
        })
        .then((res) => {
          setUserData(res.data);
          navigate("/profile/publication");
        });
    },
  });

  return (
    <div className="flex flex-col   h-full w-full ml-[300px]  relative">
      <div className="inset-0 flex  items-center justify-center">
        <h1 className="text-3xl font-semibold bg-white mr-54">
          Edit your Publication Details
        </h1>
      </div>

      <form className="w-96 ml-20" onSubmit={formik.handleSubmit} method="put">
        <input
          className={style}
          id="title"
          type="text"
          name="publication[title]"
          placeholder="Enter Title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <input
          className={style}
          id="author"
          type="text"
          name="author"
          placeholder="Enter Author"
          onChange={formik.handleChange}
          value={formik.values.author}
        />

        <input
          className={style}
          id="publishedMedia"
          type="text"
          name="publishedMedia"
          placeholder="Enter Journal/Book Title "
          onChange={formik.handleChange}
          value={formik.values.publishedMedia}
        />
        <input
          className={style}
          id="doi"
          type="date"
          name="doi"
          placeholder="Enter DOI"
          onChange={formik.handleChange}
          value={formik.values.doi}
        />
        <input
          className={style}
          id="year"
          type="number"
          name="year"
          placeholder="Year of Publication"
          onChange={formik.handleChange}
          value={formik.values.year}
          min={1900}
          max={2100}
        />
        <input
          className={style}
          id="subject"
          type="text"
          name="subject"
          placeholder="Subject Type"
          onChange={formik.handleChange}
          value={formik.values.subject}
        />
        <input
          className={style}
          id="volume"
          type="number"
          name="volume"
          placeholder="Enter volume"
          onChange={formik.handleChange}
          value={formik.values.volume}
        />
        <input
          className={style}
          id="editor"
          type="text"
          name="editor"
          placeholder="Enter Editor Name"
          onChange={formik.handleChange}
          value={formik.values.editor}
        />
        <input
          className={style}
          id="publisher"
          type="text"
          name="publisher"
          placeholder="Enter Publisher Name"
          onChange={formik.handleChange}
          value={formik.values.publisher}
        />

        <input
          className={style}
          id="pageNo"
          type="number"
          name="pageNo"
          placeholder="Enter page No"
          onChange={formik.handleChange}
          value={formik.values.pageNo}
        />
        <input
          className={style}
          id="url"
          type="url"
          name="url"
          placeholder="Enter URL"
          onChange={formik.handleChange}
          value={formik.values.url}
        />
        <div className="ml-56">
          <button
            className="w-24 text-white rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] "
            type="submit"
          >
            EDIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPublication;
