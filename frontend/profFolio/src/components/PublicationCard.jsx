import { useState } from "react";
import Professor from "../assets/professor.jpg";
import { Link } from "react-router-dom";
const PublicationCard = (props) => {
  const [data, setData] = useState(props.publication);

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
        </div>
        {/* <Link to={"/publications"}> */}
          <p className="mx-4 my-2">{props.title}</p>
        {/* </Link> */}
        <p className="mx-4 my-2">{props.publishedMedia}</p>
        <p className="mx-4 my-2 ">{props.doi}</p>
        <p className="mx-4 my-2 ">{props.year}</p>
        <p className="mx-4 my-2 ">{props.content}</p>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 my-2 text-blue-500 hover:underline"
        >
          <span className="font-semibold text-white">URL: </span>
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default PublicationCard;
