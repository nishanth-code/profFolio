import { useState } from "react";
import Professor from "../../assets/professor.jpg";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";
axios.defaults.withCredentials = true;
const UserArticleCard = (props) => {
  const [data, setData] = useState(props.article);
  const [expanded, setExpanded] = useState(false);

  const UserArticle = [
    {
      id: 1,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Something Comm",
      organisedBy: "Smith Doe",
      attendedOn: "2023-07-20",
      duration: "6 hrs",
      subject: "IT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "WIFI",
      organisedBy: "Payal Doe",
      attendedOn: "2022-12-11",
      duration: "3 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Training model",
      organisedBy: "SOme Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "ML",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      title: "Wireless Comm",
      organisedBy: "John Doe",
      attendedOn: "2023-07-16",
      duration: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const id = props.id;

  // console.log(id);

  // const url = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/delete/64d4f7254b9470d6ccd3ca76`;
  const url = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/delete/${id}`;

  const handleDelete = () => {
    axios.delete(url).then((res) => {
      console.log(res);
    });
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncateSummary = (summary, wordLimit) => {
    const words = summary.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return summary;
  };

  return (
    <div>
      <div className="bg-[#fbf0ff] border relative border-gray-200 mt-20 ml-20 pb-10 rounded-2xl h-auto w-[1100px] shadow-lg hover:scale-105 ease-in duration-300">
        <div className="flex">
          <div className="flex ">
            <div className="p-7 ">
              <div className="flex justify-around">
                <Link to={`/profile/article/edit/${id}`}>
                  <div className="rounded-full w-28 p-2 bg-white -ml-60">
                    <MdEdit className="inline-block mr-1" />
                    Edit Article
                  </div>
                </Link>
                <div
                  className="bg-white text-black rounded pl-2 pt-2 h-9 w-9  text-center ml-2 mt-1 -mr-72"
                  onClick={handleDelete}
                >
                  <MdDelete />
                </div>
              </div>
              <h1 className="text-2xl font-semibold ml text-center -mt-6">
                Article on: {props.title}
              </h1>
              <div className="flex mt-2">
                <div className="relative">
                  <img
                    className="h-32 w-24 ml-20 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:brightness-75"
                    src={Professor}
                    alt="profile"
                    // onClick={() =>
                    //   document.getElementById("imageInput").click()
                    // }
                  />
                </div>
                <div className="mt-3 ml-12 font-In ">
                  <h1 className="text-3xl">Author: {props.author}</h1>
                  <h1 className="text-sm text-gray-400">
                    Published On: {props.publishedOn}
                  </h1>
                  <h1 className="text-sm">Media: {props.publishedMedia}</h1>
                  <h1 className="text-sm">Subject: {props.subject}</h1>
                </div>
              </div>
              <hr className="w-[800px] h-1 mx-24 my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <p className="text-xl font-bold -mt-16 text-center">Summary</p>
        </div>
        <p className="text-semibold text-justify mx-5">
          {expanded ? props.summary : truncateSummary(props.summary, 50)}
          <p
            className="border bg-gray-100   border-solid inline-block hover:underline cursor-pointer "
            onClick={toggleExpanded}
          >
            {expanded ? "See Less" : "See More"}
          </p>
        </p>
      </div>
    </div>
  );
};

export default UserArticleCard;
