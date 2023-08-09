import { useEffect, useState } from "react";
import PublicationCard from "./PublicationCard";
import { useFormik } from "formik";
import PublicationFormDetails from "../PublicationFormJson";
import axios from "axios";

const UserPublications = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const url = "https://scholarconnect.onrender.com/publication/addpublication";

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
      // axios.post(url, { values }, { withCredentials: true }).then((res) => {
      //   console.log(res.msg);
      // });
      console.log(values);
    },
  });

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-40 my-4 rounded-2xl justify-center items-center border-solid border";

  const userPublication = [
    {
      id: 1,
      title: "Publication 1",
      author: "John Doe",
      date: "2023-07-16",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      required: false,
    },
    {
      id: 2,
      title: "Publication 2",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 3,
      title: "Publication 3",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 4,
      title: "Publication 4",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 5,
      title: "Publication 5",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 6,
      title: "Publication 6",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 7,
      title: "Publication 7",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
  ];

  return (
    <div>
      {userLoggedIn ? (
        <div>
          <h1>Publicaitons</h1>
          <div className="flex flex-wrap">
            {userPublication.map((publication) => (
              <PublicationCard
                key={publication.id}
                author={publication.author}
                title={publication.title}
                content={publication.content}
                publication={publication}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-full w-full grid ">
          <h1 className="text-3xl ml-64">Enter Publication Details</h1>
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
            {/* <textarea
              className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
              id="content"
              name="content"
              type="text"
              placeholder="Publication content"
              onChange={formik.handleChange}
              value={formik.values.publisher}
            /> */}
            <div className="text-white text-center ml-72">
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] "
                type="submit"
                // onClick={() => redirect("/")}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserPublications;
