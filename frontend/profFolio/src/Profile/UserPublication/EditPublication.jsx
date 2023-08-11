import PublicationFormDetails from "../../form-fields/PublicationFormJson";
import { useFormik } from "formik";
import axios from "axios";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const EditPublication = (props) => {
  // const location = useLocation();
  // const propsData = location.state;
  // console.log(propsData);

  const { data } = useParams();
  const publicationData = JSON.parse(decodeURIComponent(data));

  // console.log(publicationData);

  const ID = publicationData[0].id;
  console.log(ID);

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mr-56 my-4 rounded-2xl  border-solid border";

  const url = "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev";

  const editUrl =
    "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/edit";

  const publicationToEdit = publicationData.find(
    (publication) => publication.id === ID
  );
  console.log(publicationToEdit);

  const formik = useFormik({
    initialValues: publicationToEdit,
    // {
    //   title: publicationToEdit.title,
    //   author: publicationToEdit.author,
    //   publishedMedia: publicationToEdit.publishedMedia,
    //   doi: publicationToEdit.doi,
    //   year: publicationToEdit.year,
    //   subject: publicationToEdit.subject,
    //   volume: publicationToEdit.volume,
    //   editor: publicationToEdit.editor,
    //   publisher: publicationToEdit.publisher,
    //   pageNo: publicationToEdit.pageNo,
    //   url: publicationToEdit.url,

    // title: publicationToEdit.title,
    // author: publicationToEdit.author,
    // date: publicationToEdit.doi,
    // content: publicationToEdit.content,
    // },

    onSubmit: (values) => {
      axios.put(url, { values }, { withCredentials: true }).then((res) => {
        console.log(res.msg);
      });
      console.log(values);
    },
  });

  console.log(formik.initialValues);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-3xl font-semibold">Edit your Publication Details</h1>

      <form onSubmit={formik.handleSubmit} method="put">
        {/* <div>
          {publicationData.map((field) => (
            <div key={field.id}>
              <input
                className={style}
                id={field.id}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                // required={field.required}
                onChange={formik.handleChange}
                value={formik.valuesname}
              />
            </div>
          ))}
        </div> */}
        <div>
          <input
            className={style}
            id={publicationToEdit.title}
            type="text"
            name={publicationToEdit.title}
            placeholder={publicationToEdit.placeholder}
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div>
          <input
            className={style}
            id={publicationToEdit.author}
            type="text"
            name={publicationToEdit.author}
            placeholder={publicationToEdit.placeholder}
            onChange={formik.handleChange}
            value={formik.values.author}
          />
        </div>
        <input
          className={style}
          id={publicationToEdit.date}
          type="date"
          name={publicationToEdit.date}
          placeholder={publicationToEdit.placeholder}
          onChange={formik.handleChange}
          value={formik.values.date}
        />
        <input
          className={style}
          id={publicationToEdit.content}
          type="text"
          name={publicationToEdit.content}
          placeholder={publicationToEdit.placeholder}
          onChange={formik.handleChange}
          value={formik.values.content}
        />
        <div className="ml-32">
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
