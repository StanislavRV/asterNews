import "../style/main.scss";

import React from "react";
import ArticleBody from "../components/article/aricleBody";

import { Navigate, Route, Routes } from "react-router-dom";
import OneNewsPage from "./OneNewsPage";
import MaineLink from "../components/article/MainLink";
import CategoryArticles from "./CategoryArticles";
import SearchPage from "./searchPage";
import CreateArticleForm from "../components/forms/CreateArticleForm";
import ConfirmPage from "./ConfirmPage";

export default function ArticlePage() {
  
  
  return (
    <div className=" main">
      <MaineLink />
      <div className="home">
        <Routes>
          <Route path="/news" element={<ArticleBody />} />
          <Route path="/news/category/:category" element={<CategoryArticles />} />
          <Route path="/news/search/:search" element={<SearchPage />} />
          <Route path="/news/article/:id" element={<OneNewsPage />} />
          <Route path="/news/article/create" element={<CreateArticleForm />} />
          <Route path="/news/confirm" element={<ConfirmPage />} />
          <Route path="/*" element={<Navigate to="/news" />} />
        </Routes>
        
      </div>
    </div>
  );
}
