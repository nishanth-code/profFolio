import PublicationCard from "../Pages/Publication/PublicationCard";

const RecentPublication = () => {
  const demoPublications = [
    {
      id: 1,
      title: "Publication 1",
      author: "John Doe",
      date: "2023-07-16",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Publication 2",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 3,
      title: "Publication 2",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 4,
      title: "Publication 2",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 5,
      title: "Publication 2",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 6,
      title: "Publication 2",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 7,
      title: "Publication 2",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 8,
      title: "Publication 2",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    // Add more demo publications as needed
  ];

  return (
    <div>
      <p className="text-5xl text-[#550C6B] mx-16 my-12">Recent Publication</p>
      <div className="flex flex-wrap mx-8">
        {demoPublications.map((publication) => (
          <PublicationCard
            key={publication.id}
            author={publication.author}
            title={publication.title}
            content={publication.content}
            publication={publication}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentPublication;
