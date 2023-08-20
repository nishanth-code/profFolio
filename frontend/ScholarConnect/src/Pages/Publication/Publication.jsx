import React, { useState, useEffect } from "react";
import PublicationCard from "./PublicationCard";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "../../api/authApi";

const Publications = () => {
  const [visiblePublications, setVisiblePublications] = useState(4);
  const [publicationData, setPublicationData] = useState([]);
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/publication/renderAll", {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setPublicationData(res.data);
      });
  }, []);

  console.log(publicationData);

  const loadMorePublications = () => {
    setVisiblePublications(visiblePublications + 4); // You can adjust the number as needed
  };

  // Destructuring the data coming from DB and sending as props
  // const { id, author, title, doi, year, ...otherProps } = publication;
  //   <PublicationCard
  //   id={id}
  //   author={author}
  //   title={title}
  //   doi={doi}
  //   year={year}
  //   {...otherProps}
  // />

  return (
    <div className="ml-10">
      <h1 className="text-3xl font-semibold text-center mt-4">Publicaitons</h1>
      <div className="flex flex-wrap relative ">
        {publicationData.slice(0, visiblePublications).map((publication) => (
          <PublicationCard
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
            profilePicture={publication.profilePicture}
          />
        ))}
      </div>
      <div className="flex">
        {visiblePublications < publicationData.length && (
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

export default Publications;
