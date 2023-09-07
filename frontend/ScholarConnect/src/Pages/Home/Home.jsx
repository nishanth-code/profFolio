import React, { useState, useEffect } from "react";
import Body from "../../components/Body";
import HomeCard from "../../components/HomeCard";
import RecentPublication from "../../components/RecentPublication";
import axios from "../../api/authApi";

const Home = () => {
  const [publicationData, setPublicationData] = useState([]);

  const [articleData, setArticleData] = useState([]);
  const [workshopData, setWorkshopData] = useState([]);
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    try {
      axios
        .get("/publication/renderAll", {
          headers: {
            // "Content-type": "application/json",
            Authorization: `${authToken}`,
          },
        })
        .then((res) => {
          setPublicationData(res.data);
        });
      axios
        .get("/article/renderAll", {
          headers: {
            // "Content-type": "application/json",
            Authorization: `${authToken}`,
          },
        })
        .then((res) => {
          setArticleData(res.data);
        });
      axios
        .get("/workshop/render", {
          headers: {
            // "Content-type": "application/json",
            Authorization: `${authToken}`,
          },
        })
        .then((res) => {
          setWorkshopData(res.data);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  // console.log(articleData);

  const numberOfPublications = publicationData.length;

  const numberOfArticles = articleData.length;

  const numberOfWorkshops = workshopData.length;

  return (
    <>
      {/* #DF71FA #fbf0ff  #cecece*/}
      <div className="min-h-screen bg-[#fbf0ff]">
        {/* <Header /> */}
        <Body />
        <HomeCard
          publications={numberOfPublications}
          articles={numberOfArticles}
          workshops={numberOfWorkshops}
        />
        <RecentPublication publicationsData={publicationData} />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
