import "./article.scss";
import "swiper/css";

import React, { useEffect, useState } from "react";
import Button from "../button/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

export default function MaineLink() {
  

  const topStoriesLink = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Android",
    },
    {
      id: 3,
      title: "Cricket",
    },
    {
      id: 4,
      title: "iPhone",
    },
    {
      id: 5,
      title: "Google",
    },
    {
      id: 6,
      title: "Nano Technology",
    },
    {
      id: 7,
      title: "Mental Health",
    },
  ];

  const [activeLink, setActiveLink] = useState("1");
  const [category, setCategory] = useState('');

  const linkCategory = (id, category) => {
   
    setActiveLink(id);
    setCategory(category);   
  }

  const routerCategory = useNavigate();
  
  useEffect(() => {
    if(category == 'All') return routerCategory(`/news`);
    routerCategory(`/news/category/${category}`);
  }, [category]);

  return (
    <div style={{width:'100%', height: '130px', backGroundColor: 'red'}}>

      <h1 className="stories-module__title">Top Stories for you</h1>
      <div className="stories-module__filter filter_swiper ">

        {topStoriesLink.map((item) => (
          <Button
          // style={{margin: '5px 0'}}
            key={item.id}
            id={item.id}
            className={
              activeLink == item.id
                ? "filter__item filter__item_active"
                : "filter__item"
            }
            onClick={() => linkCategory(item.id, item.title)}
          >
            {item.title}
          </Button>
        ))}
        {/* <hr/> */}
        
        {/* <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={5}
          navigation
          className="main_link_swiper"
        >
          {topStoriesLink.map((item) => (
            <SwiperSlide key={item.id}>
              <Button
                key={item.id}
                id={item.id}
                className={
                  activeLink == item.id
                    ? "filter__item filter__item_active"
                    : "filter__item"
                }
                onClick={() => setActiveLink(item.id)}
              >
                {item.title}
              </Button>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
}
