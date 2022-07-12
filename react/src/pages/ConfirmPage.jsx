import "../style/main.scss";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../api/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/loader/loader";
import ArticleCard from "../components/article/articleCard";
import Button from "../components/button/button";

export default function ConfirmPage() {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState([]);

  const [fetchConfirm, isPostsLoading, articleError] = useFetching(async () => {
    const responsCat = await PostService.getCategorys();
    setCategory([...responsCat.data]);
    const respons = await PostService.getConfArticles();
    setArticles([...respons.data]);
  });

  useEffect(() => {
    fetchConfirm();
   
  }, []);

  function accept(id) {
    const responsAccept = async () => await PostService.getConfAccept(id);
    responsAccept(); 
    fetchConfirm();
  }
  function deleteArticle(id) {
    const responsDel = async () => await PostService.deleteArticle(id);
    responsDel(); 
    fetchConfirm();
  }



  return (
    <>
      {isPostsLoading && <Loader />}

      <h2 className="stories-module__title">Confirm articles</h2>

      <div className="stories-module__items item">
        {articleError && (
          <h2 style={{ marginLeft: 20, color: "red" }}>
            Error: {articleError}
          </h2>
        )}

        {articles.length ? (
          articles.map((article, index) => (
            <div>
              <ArticleCard
                key={index}
                article={article}
                category={category.filter((p) => p.id == article.category_id)}
              />
              <div className="btn_adm">
              <Button className='button' onClick={() => accept(article.id)} >Confirm</Button>
              <Button className='button' onClick={() => deleteArticle(article.id)} >Delete</Button>
            </div>
            </div>
          ))
        ) : (
          <h3>No articles to accept</h3>
        )}
      </div>
    </>
  );
}
