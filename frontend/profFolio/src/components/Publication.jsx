import { useState } from "react";
import PublicationCard from "./PublicationCard";
import { useFormik } from "formik";

const Publications = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const formik = useFormik({
    initialValues: {
      userName: "",
      designation: "",
      phoneNum: "",
      publisher: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const userPublication = [
    {
      id: 1,
      title: "Publication 1",
      author: "John Doe",
      date: "2023-07-16",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
        <div>
          <h1>user is not logged in</h1>
          <form onSubmit={formik.handleSubmit} method="post">
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="workType"
                type="text"
                name="workType"
                placeholder="Type"
                onChange={formik.handleChange}
                value={formik.values.workType}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="title"
                type="text"
                name="title"
                placeholder="Title of the Publication"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="journal"
                type="text"
                name="journal"
                placeholder="Enter Journal/Book Title of the Publication"
                onChange={formik.handleChange}
                value={formik.values.journal}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="year"
                type="number"
                name="year"
                placeholder="Year"
                onChange={formik.handleChange}
                value={formik.values.year}
                min="1900"
                max="2099"
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="author"
                type="text"
                name="author"
                placeholder="Enter Author"
                onChange={formik.handleChange}
                value={formik.values.author}
              />
            </div>

            <div className="">
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="Doi"
                type="number"
                name="Doi"
                placeholder="Enter Doi"
                onChange={formik.handleChange}
                value={formik.values.Doi}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="volume"
                type="text"
                name="volume"
                placeholder="Enter Volume"
                onChange={formik.handleChange}
                value={formik.values.volume}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="pageNo"
                type="text"
                name="pageNo"
                placeholder="Enter Page No"
                onChange={formik.handleChange}
                value={formik.values.pageNo}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="editor"
                type="text"
                name="editor"
                placeholder="Enter Editor"
                onChange={formik.handleChange}
                value={formik.values.editor}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="publisher"
                type="text"
                name="publisher"
                placeholder="Enter Publisher"
                onChange={formik.handleChange}
                value={formik.values.publisher}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="url"
                type="text"
                name="url"
                placeholder="Enter URL"
                onChange={formik.handleChange}
                value={formik.values.url}
              />
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
            <div className="text-white text-center ">
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] justify-center"
                type="button"
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

export default Publications;
