import { useState } from "react";
import professor from "../../assets/professor.jpg";
import UserArticleCard from "./UserArticleCard";
const UserArticles = () => {
  const [articleData, setArticleData] = useState({});
  const [visibleUserArticles, setVisibleUserArticles] = useState(3);

  const url =
    "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/publication/workshop";

  // useEffect(() => {
  //   axios.get(url).then((res) => {
  //     console.log(res);
  //     setPublicationData(res.data);
  //   });
  // }, []);
  // console.log(workshopData);

  const UserArticle = [
    {
      id: 1,
      title: "GAI",
      author: "John Doe",
      publishedOn: "2023-07-16",
      publishedMedia: "2 Days",
      subject: "IoT",
      summary: `Lorem ipsum dolor sit amet, consectetur
       adipiscing elit. Contrary to popular belief, Lorem
        Ipsum is not simply random text. It has roots in a 
        piece of classical Latin literature from 45 BC, making
         it over 2000 years old. Richard McClintock, a Latin 
         professor at Hampden-Sydney College in Virginia, looked
          up one of the more obscure Latin words, consectetur, 
          from a Lorem Ipsum passage, and going through the cites
           of the word in classical literature, discovered the 
           undoubtable source. Lorem Ipsum comes from sections 
           1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
           (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
           This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem 
            ipsum dolor sit amet..", comes from a line in section 1.10.32.
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
      below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
       Bonorum et Malorum" by Cicero are also reproduced in their exact original
        form, accompanied by English versions from the 1914 translation by H. Rackham.
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
        in a piece of classical Latin literature from 45 BC, making it over 2000 years o
        ld. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
    {
      id: 2,
      title: "IoT in Home Automation",
      author: "Nishanth V",
      publishedOn: "2020-07-11",
      publishedMedia: "Medium",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "ChatGPT",
      author: "Sam Altman",
      publishedOn: "2023-01-16",
      publishedMedia: "Hashnode",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "GAI",
      author: "John Doe",
      publishedOn: "2023-07-16",
      publishedMedia: "2 Days",
      subject: "IoT",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      title: "GAI",
      author: "John Doe",
      publishedOn: "2023-07-16",
      publishedMedia: "2 Days",
      subject: "AI",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const loadMoreArticles = () => {
    setVisibleUserArticles(visibleUserArticles + 3); // You can adjust the number as needed
  };

  const id = UserArticle[0].id;
  return (
    <div className="flex flex-col justify-center items-center -ml-10 mb-3">
      <div className="flex flex-col justify-center items-center w-auto h-auto">
        <h1 className="text-3xl font-semibold text-center mt-4">
          Your Articles
        </h1>
        <div className="flex flex-wrap justify-center -mt-4">
          {UserArticle.slice(0, visibleUserArticles).map((article) => (
            <UserArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              author={article.author}
              publishedOn={article.publishedOn}
              publishedMedia={article.publishedMedia}
              subject={article.subject}
              summary={article.summary}
            />
          ))}
        </div>
      </div>
      <div>
        {visibleUserArticles < UserArticle.length && (
          <button
            className="mx-auto mt-6 px-4 py-2 rounded-md bg-[#1D3792] text-white"
            onClick={loadMoreArticles}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
export default UserArticles;
