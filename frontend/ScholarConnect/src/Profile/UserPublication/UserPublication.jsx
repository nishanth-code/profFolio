import { useEffect, useState } from "react";
import UserPublicationCard from "./UserPublicationCard";
import PublicationFormDetails from "../../form-fields/PublicationFormJson";
import axios from "../../api/authApi";
axios.defaults.withCredentials = true;

const UserPublications = () => {
  const [publicationData, setPublicationData] = useState({});
  const [visibleUserPublications, setVisibleUserPublications] = useState(3);
  const authToken = localStorage.getItem("token");

  const url =
    "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/profile/publication";

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      console.log(res);
      setPublicationData(res.data);
    });
  }, []);

  console.log(publicationData);

  const userPublication = [
    {
      id: 1,
      title: "Publication 1",
      author: "John Doe",
      publishedMedia: "Journal",
      doi: "2023-07-16",
      year: "2020",
      subject: "IoT",
      volume: "",
      publisher: "v24",
      editor: "arihanth",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 2,
      title: "Publication 2",
      author: "Jane Smith",
      publishedMedia: "Journal",
      doi: "2023-07-15",
      year: "2020",
      subject: "AI",
      volume: "",
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 3,
      title: "Publication 3",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "ML",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 4,
      title: "Publication 4",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "ML",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 5,
      title: "Publication 5",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "IoT",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 6,
      title: "Publication 6",
      author: "Jane Smith",
      publishedMedia: "Journal",
      doi: "2023-07-15",
      year: "2020",
      subject: "IoT",
      volume: "",
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 7,
      title: "Publication 7",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "IoT",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 8,
      title: "Publication 8",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "IoT",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 9,
      title: "Publication 9",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "IoT",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
  ];

  const loadMorePublications = () => {
    setVisibleUserPublications(visibleUserPublications + 3); // You can adjust the number as needed
  };
  // const data = encodeURIComponent(JSON.stringify(userPublication));
  const id = userPublication[0].id;
  // console.log(id);

  return (
    <div className="flex flex-col ml-20">
      <h1 className="text-3xl font-semibold text-center mt-4">
        User Publicaitons
      </h1>
      <div className="flex flex-wrap justify-center">
        {userPublication
          .slice(0, visibleUserPublications)
          .map((publication) => (
            <UserPublicationCard
              key={publication.id}
              id={publication.id}
              author={publication.author}
              title={publication.title}
              doi={publication.doi}
              year={publication.year}
              publishedMedia={publication.publishedMedia}
              subject={publication.subject}
              volume={publication.volume}
              editor={publication.editor}
              publisher={publication.publisher}
              url={publication.url}
              content={publication.content}
            />
          ))}
      </div>
      <div className="flex">
        {visibleUserPublications < userPublication.length && (
          <button
            className="mx-auto px-4 py-2 rounded-md bg-[#1D3792] text-white"
            onClick={loadMorePublications}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default UserPublications;

{
  /* <textarea
className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
id="content"
name="content"
type="text"
placeholder="Publication content"
onChange={formik.handleChange}
value={formik.values.publisher}
/> */
}
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
