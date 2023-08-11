import { useEffect, useState } from "react";
import PublicationCard from "../../components/PublicationCard";
import { useFormik } from "formik";
import PublicationFormDetails from "../../form-fields/PublicationFormJson";
import axios from "axios";
import { Link } from "react-router-dom";

const UserPublications = () => {
  const [userDetails, setUserDetails] = useState(true);
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

  // useEffect(() => {
  //   axios.get(url).then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-full mx-40 my-4 rounded-2xl  border-solid border";

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
    {
      id: 8,
      title: "Publication 7",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 9,
      title: "Publication 7",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
  ];

  const data = encodeURIComponent(JSON.stringify(userPublication));
  const id = data[0].id;
  console.log(id);

  return (
    <div>
      {userDetails ? (
        <div className="">
          <div className="flex justify-around">
            <div>
              <h1>Publicaitons</h1>
            </div>
            <div>
              <Link to={`/profile/publication/edit/${data}`}>
                Edit Publication
              </Link>
            </div>
          </div>
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

              {/* <textarea
              className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
              id="content"
              name="content"
              type="text"
              placeholder="Publication content"
              onChange={formik.handleChange}
              value={formik.values.publisher}
            /> */}
              <div className="text-white ml-[365px]">
                <button
                  className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] "
                  type="submit"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPublications;

{
  /* <div className="flex flex-col justify-center items-center  w-fit h-full">
          <h1 className="text-3xl ml-96 font-semibold text-[#550C6B] ">
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

              {/* <textarea
              className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
              id="content"
              name="content"
              type="text"
              placeholder="Publication content"
              onChange={formik.handleChange}
              value={formik.values.publisher}
            /> */
}
//           <div className="text-white ml-[365px]">
//             <button
//               className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] "
//               type="submit"
//             >
//               SUBMIT
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )}
// </div> */}
