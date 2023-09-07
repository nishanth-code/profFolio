import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from "../../api/authApi";
import ArticleShimmer from "./ArticleShimmer";

const Article = () => {
  const [visibleArticles, setVisibleArticles] = useState(2);

  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/article/renderAll", {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        setArticleData(res.data);
        setIsLoading(false);
      });
  }, []);

  const loadMorePublications = () => {
    setVisibleArticles(visibleArticles + 2); // You can adjust the number as needed
  };

  return (
    <div className="ml-10">
      <h1 className="text-3xl font-semibold text-center mt-4">Articles</h1>
      <div className="flex flex-wrap justify-center -mt-4">
        {isLoading ? (
          <ArticleShimmer />
        ) : (
          articleData
            .slice(0, visibleArticles)
            .map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                author={article.author}
                publishedOn={article.publishedOn}
                publishedMedia={article.publishedMedia}
                subject={article.subject}
                summary={article.summary}
                profilePicture={article.profilePicture}
              />
            ))
        )}
      </div>
      <div className="flex">
        {visibleArticles < articleData.length && (
          <button
            className="mx-auto mt-4 px-4 py-2 my-4 rounded-md bg-[#1D3792] text-white"
            onClick={loadMorePublications}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Article;
