import { useState } from "react";
import Professor from "../../assets/professor.jpg";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

const PublicationCard = (props) => {
  const [data, setData] = useState(props.publication);
  const userPublication = [
    {
      id: 1,
      title: "Publication 10",
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

  const id = props.id;
  // console.log(id);

  return (
    <div className="text-white h-auto w-auto">
      <div className="bg-gradient-to-b pb-2 bg-[#550C6B]  h-auto w-72 z-10 rounded-xl my-10 mx-8">
        <div className="mx-4 mt-4 flex pt-2 ">
          <img
            className="rounded-full mr-4 h-12 w-auto opacity-75"
            src={Professor}
            alt="Prof"
          />
          <p className="my-3">{props.author}</p>
          {/* <Link to={`/profile/publication/edit/${id}`}>
            <div className="bg-white text-black rounded p-2 h-7 w-7  text-center ml-20">
              <MdEdit />
            </div>
          </Link> */}
        </div>

        <p className="mx-4 my-2">Title: {props.title}</p>
        <p className="mx-4 my-2 text-gray-400">DOI: {props.doi}</p>
        <p className="mx-4 my-2 ">Subject: {props.subject}</p>
        <p className="mx-4 my-2">Media: {props.publishedMedia}</p>
        {/* Check if its book or journal and render accordingly */}
        <p className="mx-4 my-2 ">Volume: {props.volume}</p>
        <p className="mx-4 my-2 ">Year: {props.year}</p>
        <p className="mx-4 my-2 ">Publisher: {props.publisher}</p>
        <p className="mx-4 my-2 ">Editor: {props.editor}</p>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 my-2 text-white hover:underline"
        >
          <span className="font-semibold text-white">URL: </span>
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default PublicationCard;
