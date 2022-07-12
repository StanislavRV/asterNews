import "../style/main.scss";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../api/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/loader/loader";
import ArticleCard from "../components/article/articleCard";

export default function CategoryArticles() {
  const params = useParams();
  const [articles, setArticles] = useState([]);

  const [fetchCategoryArticles, isPostsLoading, articleError] = useFetching(
    async () => {
      const respons = await PostService.CategoryArticles(params.category);
      setArticles([...respons.data]);
    }
  );

  useEffect(() => {
    fetchCategoryArticles();
  }, [params.category]);

  return (
    <>
      {isPostsLoading && <Loader />}

      <h2 className="stories-module__title">Category: {params.category}</h2>

      

      <div className="stories-module__items item">
        {articleError && (
          <h2 style={{ marginLeft: 20, color: "red" }}>
            Error: {articleError}
          </h2>
        )}
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            article={article}
            category={params.category}
          />
        ))}
      </div>
    </>
  );
}
