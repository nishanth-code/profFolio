import PublicationCard from "../Pages/Publication/PublicationCard";
import React, { useState } from "react";

const RecentPublication = (props) => {
  const [visiblePublications, setVisiblePublications] = useState(4);

  const publicationData = props.publicationsData;

  // useEffect(() => {
  //   axios.get("/publication/renderAll").then((res) => {
  //     console.log(res);
  //     setPublicationData(res.data);
  //   });
  // }, []);

  // console.log(publicationData);

  const loadMorePublications = () => {
    setVisiblePublications(visiblePublications + 4); // You can adjust the number as needed
  };

  return (
    <div>
      <p className="text-5xl text-[#550C6B] mx-16 my-12">Recent Publication</p>
      <div className="flex flex-wrap mx-8">
        {publicationData.slice(0, visiblePublications).map((publication) => (
          <PublicationCard
            key={publication._id}
            id={publication._id}
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

export default RecentPublication;
