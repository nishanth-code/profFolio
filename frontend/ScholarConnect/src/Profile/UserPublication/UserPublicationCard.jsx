import { useState } from "react";
import Professor from "../../assets/professor.jpg";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";
axios.defaults.withCredentials = true;

const UserPublicationCard = (props) => {
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

  // const url = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/delete/&{id}`;
  const url = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/delete/64d4f7254b9470d6ccd3ca76`;

  const handleDelete = () => {
    axios.delete(url).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="text-white h-auto w-auto">
      <div className="bg-[#fbf0ff] border border-gray-200 text-black font-semibold h-auto w-72 z-10 rounded-xl my-10 mx-8 pb-4 shadow-lg hover:scale-110 ease-in duration-300">
        <div className="ml-4 mt-4 flex pt-2 ">
          <img
            className="rounded-full mr-4 h-12 w-auto"
            src={Professor}
            alt="Prof"
          />
          <p className="my-3">{props.author}</p>
          <Link to={`/profile/publication/edit/${id}`}>
            <div className="bg-white text-black rounded p-2 h-7 w-7  text-center ml-12 mr-2 ">
              <MdEdit />
            </div>
          </Link>
          <div
            className="bg-white text-black rounded p-2 h-7 w-7  text-center ml-1"
            onClick={handleDelete}
          >
            <MdDelete />
          </div>
        </div>
        {/* <Link to={"/publications"}> */}
        <p className="mx-4 my-2">Title: {props.title}</p>
        <p className="mx-4 my-2 text-gray-400">DOI: {props.doi}</p>
        {/* </Link> */}
        <p className="mx-4 my-2 ">Subject: {props.subject}</p>
        <p className="mx-4 my-2">Media: {props.publishedMedia}</p>
        {/* Check if its book or journal and render accordingly */}
        <p className="mx-4 my-2 ">Volume: {props.volume}</p>
        <p className="mx-4 my-2 ">Year: {props.year}</p>
        <p className="mx-4 my-2 ">{props.content}</p>
        <p className="mx-4 my-2 ">Publisher: {props.publisher}</p>
        <p className="mx-4 my-2 ">Editor: {props.editor}</p>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 my-2 text-[#550C6B] hover:underline"
        >
          <span className="font-semibold text-black">URL: </span>
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default UserPublicationCard;
