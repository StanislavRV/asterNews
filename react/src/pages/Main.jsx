import "../style/main.scss";

import React from "react";
import LeftSide from "../components/leftSide/leftSide";
import RightSide from "../components/rightSide/rightSide";
import ArticlePage from "./ArticlePage";


export default function Main() {

  
  return (
    <div className="container main">
      <div className="page__container">
        <LeftSide />
        <ArticlePage />
        <RightSide />
        
      </div>
    </div>
    
  );
}
