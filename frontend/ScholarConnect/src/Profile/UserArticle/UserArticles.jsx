import React, { useState, useEffect } from "react";
import professor from "../../assets/professor.jpg";
import UserArticleCard from "./UserArticleCard";
import axios from "../../api/authApi";
const UserArticles = () => {
  const [articleData, setArticleData] = useState({
    articles: [],
  });
  const [visibleUserArticles, setVisibleUserArticles] = useState(3);
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/profile/article", {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setArticleData(res.data);
      });
  }, []);
  console.log(articleData.articles);

  const loadMoreArticles = () => {
    setVisibleUserArticles(visibleUserArticles + 3); // You can adjust the number as needed
  };

  const handleDeleteArticle = (articleId) => {
    setArticleData((prevData) => ({
      ...prevData,
      articles: prevData.articles.filter((arti) => arti._id !== articleId),
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center -ml-10 mb-3">
      <div className="flex flex-col justify-center items-center w-auto h-auto">
        <h1 className="text-3xl font-semibold text-center mt-4">
          Your Articles
        </h1>
        <div className="flex flex-wrap justify-center -mt-4">
          {articleData.articles.slice(0, visibleUserArticles).map((article) => (
            <UserArticleCard
              key={article._id}
              id={article._id}
              title={article.title}
              author={article.author}
              publishedOn={article.publishedOn}
              publishedMedia={article.publishedMedia}
              subject={article.subject}
              summary={article.summary}
              profilePicture={article.profilePicture}
              onDelete={handleDeleteArticle}
            />
          ))}
        </div>
      </div>
      <div>
        {visibleUserArticles < articleData.articles.length && (
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
