import PublicationFormDetails from "../../form-fields/PublicationFormJson";
import { useFormik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
axios.defaults.withCredentials = true;
import moment from "moment";

const EditArticle = (props) => {
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
  const date = moment(userData.attendedOn).format("YYYY-MM-DD");
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
      axios.put(editUrl, values).then((res) => {
        console.log(res);
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
          type="text"
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
          value={formik.values.organisedBy}
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
          id="duration"
          type="text"
          name="duration"
          placeholder="Enter Duration"
          onChange={formik.handleChange}
          value={formik.values.duration}
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
          className={style}
          id="summary"
          typeof="text"
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
