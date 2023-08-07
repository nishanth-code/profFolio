import { useState } from "react";
import PublicationCard from "./PublicationCard";

const Publications = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const userPublication = [
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
      title: "Publication 3",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 4,
      title: "Publication 4",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 5,
      title: "Publication 5",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 6,
      title: "Publication 6",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 7,
      title: "Publication 7",
      author: "Jane Smith",
      date: "2023-07-15",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
  ];

  return (
    <div>
      {userLoggedIn ? (
        <div>
          <h1>Publicaitons</h1>
          <div className="flex flex-wrap">
            {userPublication.map((publication) => (
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
      ) : (
        <div>
          <h1>user is not logged in</h1>
          <form>
            <input type="test" name=""/>
          </form>
        </div>
      )}
    </div>
  );
};

export default Publications;
