import { useFormik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import moment from "moment";
axios.defaults.withCredentials = true;

const EditPublication = (props) => {
  // const { id } = useParams();
  const [userData, setUserData] = useState("");

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-20 my-4 rounded-2xl  border-solid border pointer-events-auto";

  const id = props.id;
  console.log(id);

  const url = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/render/${id}`;
  // const url = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/render/64d4f7254b9470d6ccd3ca76`;

  const editUrl = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/edit/64d4f7254b9470d6ccd3ca76`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setUserData(res.data);
    });
  }, []);
  //Put ID here in dep Array
  const date = moment(userData.doi).format("YYYY-MM-DD");
  // console.log(date);

  const formik = useFormik({
    initialValues: {
      title: userData.title,
      author: userData.author,
      publishedMedia: userData.publishedMedia,
      doi: date,
      year: userData.year,
      subject: userData.subject,
      volume: userData.volume,
      editor: userData.editor,
      publisher: userData.publisher,
      pageNo: userData.pageNo,
      url: userData.url,
    },

    enableReinitialize: true,
    onSubmit: (values) => {
      axios.put(editUrl, values).then((res) => {
        console.log(res);
      });
      console.log(values);
    },
  });

  // console.log(formik.initialValues);

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

// const location = useLocation();
// const propsData = location.state;
// console.log(propsData);

// const publicationData = JSON.parse(decodeURIComponent(data));

// console.log(publicationData);

// const publicationToEdit = publicationData.find(
//   (publication) => publication.id === ID
// );
// console.log(publicationToEdit);
