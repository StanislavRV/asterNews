import "./article.scss";

import React, { useEffect, useState } from "react";
import ArticleCard from "./articleCard";
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../api/PostService";
import Autors from "../autors/Autors";
import Loader from "../loader/loader";
import Button from "../button/button";



export default function ArticleBody() {

  const [category, setCategory] = useState([]);
  const [authors, setAuthors] = useState([]);  
  const [articles, setArticles] = useState([]);
  const [articlesNav, setArticlesNav] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

 

  const [fetchArticles, isPostsLoading, articleError] = useFetching(
    async () => {
      const respons = await PostService.getArticlesStart(currentPage);
      setArticles([...respons.data.data]);
       
    }
  );

  const showMore = () => {
    setCurrentPage(currentPage + 1);
  };

  async function allAuthors() {
    const respons = await PostService.getAuthors();
    setAuthors([...respons.data]);
  }
  
  async function navArticles() {
    const respons = await PostService.getNavArticles();
    setArticlesNav([...respons.data.data]);    
  }

  async function allCategorys() {
    const respons = await PostService.getCategorys();
    setCategory([...respons.data]);
  }

  useEffect(() => {
    allAuthors();             
    allCategorys();
    navArticles();
    fetchArticles();
  }, []);



  useEffect(() => {
    if (currentPage > 1) {
     
      async function navLinks() {
        const respons = await PostService.getArticlesCurent(currentPage);   
        setArticles([...articles, ...respons.data.data]);
      }
      navLinks();
    }
  }, [currentPage]);

  return (
    <>
      {isPostsLoading && <Loader />}
      {articleError && (
        <h2 style={{ marginLeft: 20, color: "red" }}>Error: {articleError}</h2>
      )}     

    
      <div className="stories-module__items">
        {articlesNav.map((article, index) =>
          
            <ArticleCard              
              key={index}              
              article={article}
              index={index}
              category={category.filter((p) => p.id == article.category_id)}
            />
      
        )}
      </div>
      
      <Autors authors={authors}/>
     

      <div className="stories-module__items">
        {articles.map((article, index) =>
         
            <ArticleCard               
              key={index}
              article={article}
              titleArticle={"none"}
              category={category.filter((p) => p.id == article.category_id)}
            />
         
        )}
      </div>
     
      <div className="news-module__buttton">
        <Button         
          className="button button_dark-border"
          onClick={showMore}
        >
          Show More
        </Button>
      </div>
      
    
    </>
  );
}
