import React, { useEffect, useState } from "react";
import axios from "../../api/authApi";
import UserPatentCard from "./UserPatentCard";
const Patent = () => {
  const [visibleUserPatents, setVisibleUserPatents] = useState(3);

  const [patentData, setPatentData] = useState({
    patents: [],
    profilepic: "",
  });
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/profile/patent", {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setPatentData(res.data);
      });
  }, []);

  const handleDeletePatent = (patentId) => {
    setPatentData((prevData) => ({
      ...prevData,
      patents: prevData.patents.filter((pat) => pat._id !== patentId),
    }));
  };

  console.log(patentData);

  const loadMorePatents = () => {
    setVisibleUserPatents(visibleUserPatents + 3); // You can adjust the number as needed
  };

  return (
    <div className="flex flex-col justify-center items-center ml-32">
      <h1 className="text-3xl font-semibold mt-4 ml-">User Patents</h1>
      <div className=" flex flex-col justify-center items-center">
        {patentData.patents.slice(0, visibleUserPatents).map((patent) => (
          <UserPatentCard
            key={patent._id}
            id={patent._id}
            title={patent.title}
            inventors={patent.inventors}
            applicationNumber={patent.applicationNumber}
            filingCountry={patent.filingCountry}
            subjectCategory={patent.subjectCategory}
            filingDate={patent.filingDate}
            publicationDate={patent.publicationDate}
            status={patent.status}
            profilePicture={patent.profilePicture}
            onDelete={handleDeletePatent}
          />
        ))}
      </div>
      <div className="flex">
        {visibleUserPatents < patentData.patents.length && (
          <button
            className="mx-auto px-4 py-2 rounded-md bg-[#1D3792] text-white"
            onClick={loadMorePatents}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Patent;
