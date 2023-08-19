import PublicationCard from "../Pages/Publication/PublicationCard";
import React from "react";

const RecentPublication = () => {
  const demoPublications = [
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
  ];

  return (
    <div>
      <p className="text-5xl text-[#550C6B] mx-16 my-12">Recent Publication</p>
      <div className="flex flex-wrap mx-8">
        {demoPublications.map((publication) => (
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
    </div>
  );
};

export default RecentPublication;
