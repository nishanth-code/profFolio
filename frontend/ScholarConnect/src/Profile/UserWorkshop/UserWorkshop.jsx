import UserWorkshopCard from "./UserWorkshopCard";
import React, { useEffect, useState } from "react";
import axios from "../../api/authApi";
const UserWorkshop = () => {
  const [workshopData, setWorkshopData] = useState({
    workshops: [],
  });
  const [visibleUserWorkshops, setVisibleUserWorkshops] = useState(4);

  // const url =
  //   "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/workshop";
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/profile/workshop", {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        setWorkshopData(res.data);
      });
  }, []);

  const handleDeleteWorkshop = (workshopId) => {
    setWorkshopData((prevData) => ({
      ...prevData,
      workshops: prevData.workshops.filter((work) => work._id !== workshopId),
    }));
  };

  const loadMoreWorkshops = () => {
    setVisibleUserWorkshops(visibleUserWorkshops + 3); // You can adjust the number as needed
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-semibold text-center mt-4">User Workshop</h1>
      <div className="flex flex-wrap justify-center">
        {workshopData.workshops
          .slice(0, visibleUserWorkshops)
          .map((workshop) => (
            <UserWorkshopCard
              key={workshop._id}
              id={workshop._id}
              title={workshop.title}
              organizedBy={workshop.organizedBy}
              attendedOn={workshop.attendedOn}
              subject={workshop.subject}
              summary={workshop.summary}
              profilePicture={workshop.profilePicture}
              onDelete={handleDeleteWorkshop}
            />
          ))}
      </div>
      <div className="flex">
        {visibleUserWorkshops < workshopData.workshops.length && (
          <button
            className="mx-auto my-4 px-4 py-2 rounded-md bg-[#1D3792] text-white"
            onClick={loadMoreWorkshops}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
export default UserWorkshop;
