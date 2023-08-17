import { useState } from "react";
import PublicationCard from "./PublicationCard";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Publications = () => {
  const [visiblePublications, setVisiblePublications] = useState(4);
  const Publication = [
    {
      id: 1,
      title: "Publication 1",
      author: "John Doe",
      publishedMedia: "Journal",
      doi: "2023-07-16",
      year: "2020",
      subject: "IoT",
      volume: "",
      publisher: "v24",
      editor: "arihanth",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 2,
      title: "Publication 2",
      author: "Jane Smith",
      publishedMedia: "Journal",
      doi: "2023-07-15",
      year: "2020",
      subject: "AI",
      volume: "",
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 3,
      title: "Publication 3",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "ML",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 4,
      title: "Publication 4",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "ML",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 5,
      title: "Publication 5",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "IoT",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 6,
      title: "Publication 6",
      author: "Jane Smith",
      publishedMedia: "Journal",
      doi: "2023-07-15",
      year: "2020",
      subject: "IoT",
      volume: "",
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 7,
      title: "Publication 7",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "IoT",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 8,
      title: "Publication 8",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "IoT",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
    {
      id: 9,
      title: "Publication 9",
      author: "Jane Smith",
      publishedMedia: "Book",
      doi: "2023-07-15",
      year: "2020",
      subject: "IoT",
      volume: 2,
      publisher: "v24",
      editor: "arihanth",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
  ];

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
        {Publication.slice(0, visiblePublications).map((publication) => (
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
          />
        ))}
      </div>
      <div className="flex">
        {visiblePublications < Publication.length && (
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
