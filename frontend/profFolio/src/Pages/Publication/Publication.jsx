import { useState } from "react";
import PublicationCard from "../../components/PublicationCard";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Publications = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const Publication = [
    {
      id: 1,
      title: "Publication 1",
      author: "John Doe",
      publishedMedia: "Journal",
      doi: "2023-07-16",
      year: "2020",
      subject: "IoT",
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
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      url: "https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd",
    },
  ];

  return (
    <div>
      <div className="image-container relative ">
        {/* <img className="absolute" src={BgImage} alt="Bg Image 2" /> */}
      </div>
      <div>
        <h1>Publicaitons</h1>
        <div className="flex flex-wrap relative ">
          {Publication.map((publication) => (
            <PublicationCard
              key={publication.id}
              author={publication.author}
              title={publication.title}
              publishedMedia={publication.publishedMedia}
              doi={publication.doi}
              year={publication.year}
              url={publication.url}
              content={publication.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
