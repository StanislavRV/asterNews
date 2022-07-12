import "./article.scss";

import React, { useEffect, useState } from "react";
import { ReactComponent as IconShare } from "../../iconsfont/share.svg";
import { ReactComponent as IconRead } from "../../iconsfont/read.svg";
import { useNavigate } from "react-router-dom";
import moment from "moment";


export default function ArticleCard({ article, titleArticle, category, index }) {
  const router = useNavigate();
  const date = moment(article.publish);
  const startDate = date.startOf("hour").fromNow();


  function createMarkup() {
    return {__html: `${article.article}`};
  }
  

  return (
    <>
      <div
        id={article.id}
        className={
          index == 0
            ? "stories-module__item item item_big"
            : "stories-module__item item"
        }
      >
        <div
          className="item__body"
          onClick={() => router(`/news/article/${article.id}`)}
        >
          <h4 className="item__title">
            <div className="item__link-title">{article.title}</div>
          </h4>
          <div className="item__main">
          
              <div className={article.path_title_img ? "item__text" : "item__text_noImage"} dangerouslySetInnerHTML={createMarkup()}/>
           
            {article.path_title_img ? (
              <div className="item__imageCard">
                <img src={article.path_title_img} alt="Article img" />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="item__footer">
          <div className="item__info info-item">
            <div className="info-item__category">{category[0].category}</div>
            <div className="info-item__time">{startDate}</div>
          </div>
          <div className="item__actions actions-item">
            <div className="actions-item__link ">
              <IconShare style={{ alignSelf: "center" }} className="icon_nav" />
              Share
            </div>
            <div className="actions-item__link ">
              <IconRead className="icon_nav" />
              Read Later
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
