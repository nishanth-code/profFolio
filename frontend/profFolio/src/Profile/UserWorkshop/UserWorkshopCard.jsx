import { useState } from "react";
import Professor from "../../assets/professor.jpg";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";

const UserWorkshopCard = (props) => {
  const [data, setData] = useState(props.workshop);
  const UserWorkshop = [
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

  console.log();

  const url = `https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/delete/64d4f7254b9470d6ccd3ca76`;

  const handleDelete = () => {
    axios.delete(url).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="text-white h-auto w-auto">
      <div className="bg-gradient-to-b pb-2 bg-[#550C6B]  h-auto w-72 z-10 rounded-xl my-10 mx-8">
        <div className="ml-4 mt-4 flex pt-2 ">
          <img
            className="rounded-full mr-4 h-12 w-auto opacity-75"
            src={Professor}
            alt="Prof"
          />
          <p className="mx-4 my-2">Title</p>
          <Link to={`/profile/workshop/edit/${id}`}>
            <div className="bg-white text-black rounded p-2 h-7 w-7  text-center ml-12 mr-2">
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

        <p className=" my-2 mx-4 text-slate-400">Attended On</p>
        <p className=" my-2 mx-4">2 Days</p>
        <p className="mx-4 my-2 ">OrganisedBy</p>
        <p className="mx-4 my-2">subject</p>
        <p className="mx-4 my-2">
          Summary Lorem ipsum dolor sit amet consectetur adipisicing
          elit.Nesciunt natus assumenda dignissimos tempora.
        </p>
      </div>
    </div>
  );
};

export default UserWorkshopCard;
