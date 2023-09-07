import React, { useEffect, useState } from "react";
import WorkshopCard from "./WorkshopCard";
import axios from "../../api/authApi";
import WorkshopShimmer from "../../components/WorkshopShimmer";

const Workshop = () => {
  const [workshopData, setWorkshopData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [visibleWorkshops, setVisibleWorkshops] = useState(3);
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/workshop/render", {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        setWorkshopData(res.data);
        setIsLoading(false);
      });
  }, []);

  const loadMoreWorkshops = () => {
    setVisibleWorkshops(visibleWorkshops + 3); // You can adjust the number as needed
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center mt-4">Workshops</h1>
      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <>
            <WorkshopShimmer />
            <WorkshopShimmer />
            <WorkshopShimmer />
          </>
        ) : (
          workshopData
            .slice(0, visibleWorkshops)
            .map((workshop) => (
              <WorkshopCard
                key={workshop.id}
                id={workshop.id}
                title={workshop.title}
                organizedBy={workshop.organizedBy}
                attendedOn={workshop.attendedOn}
                subject={workshop.subject}
                summary={workshop.summary}
                profilePicture={workshop.profilePicture}
              />
            ))
        )}
      </div>
      <div className="flex">
        {visibleWorkshops < workshopData.length && (
          <button
            className="mx-auto px-4 py-2 my-4 rounded-md bg-[#1D3792] text-white"
            onClick={loadMoreWorkshops}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Workshop;
