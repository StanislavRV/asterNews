import React from "react";
import Button from "../button/button";
// import './autors.scss';

export default function AutorCard(author) {
  
  let aut = author.author;
  
  return (
    <>
      
        <div className="slide-creator">
          <div className="slide-creator__body">
            <div className="slide-creator__avatar-ibg">
              <img src={aut.path_img_author} alt={aut.author} />
            </div>
            <div className="slide-creator__title">{aut.author}</div>
            <div className="slide-creator__position">{aut.position}</div>
          </div>

          <Button className="slide-creator__link button button_min">Follow</Button>
        </div>
     
    </>
  );
}
