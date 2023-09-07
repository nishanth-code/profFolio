import React, { useEffect, useState } from "react";
import UserPublicationCard from "./UserPublicationCard";
import axios from "../../api/authApi";

const UserPublications = () => {
  const [publicationData, setPublicationData] = useState({
    publications: [],
  });

  const [visibleUserPublications, setVisibleUserPublications] = useState(3);
  // const authToken = localStorage.getItem("token");
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/profile/publication", {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        setPublicationData(res.data);
      });
  }, []);

  const handleDeletePublication = (publicationId) => {
    setPublicationData((prevData) => ({
      ...prevData,
      publications: prevData.publications.filter(
        (pub) => pub._id !== publicationId
      ),
    }));
  };

  console.log(publicationData);

  const loadMorePublications = () => {
    setVisibleUserPublications(visibleUserPublications + 3); // You can adjust the number as needed
  };

  return (
    <div className="flex flex-col ml-20">
      <h1 className="text-3xl font-semibold text-center mt-4">
        User Publicaitons
      </h1>
      <div className="flex flex-wrap justify-center">
        {/* @Dev: 1st slicing array to 3(visibleUserPublications) so it just renders 3 cards then can load more
                2nd Mapping through the publications Array */}
        {publicationData.publications
          .slice(0, visibleUserPublications)
          .map((publication) => (
            <UserPublicationCard
              key={publication._id}
              id={publication._id}
              author={publication.author}
              title={publication.title}
              doi={publication.doi}
              year={publication.year}
              publishedMedia={publication.publishedMedia}
              subject={publication.subject}
              volume={publication.volume}
              pageNo={publication.pageNo}
              editor={publication.editor}
              publisher={publication.publisher}
              url={publication.url}
              profilePicture={publication.profilePicture}
              onDelete={handleDeletePublication}
            />
          ))}
      </div>
      <div className="flex">
        {visibleUserPublications < publicationData.publications.length && (
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

export default UserPublications;
