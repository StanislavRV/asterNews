import "./autors.scss";
import React, { useEffect, useState } from "react";
import PostService from "../../api/PostService";
import { useFetching } from "../../hooks/useFetching";
import AutorCard from "./autorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as IconArrow } from "../../iconsfont/big-arrow.svg";
import Button from "../button/button";
import { Navigation, Pagination } from "swiper";

export default function Autors(authors) {
  // const [autors, setAutors] = useState([]);

  // const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
  //   const respons = await PostService.getAutors();
  //   setAutors(respons.autors);

  // });

  // useEffect(() => {
  //   fetchPost();
  // }, []);

  // console.log(authors.authors);

  return (
    <>
      {/* <div className="stories-module__items"> */}



      <div className="home__creators creators-module">
        <div className="creators-module__header">
          <h2 className="creators-module__title icon-title icon-title_bold _icon-story">
            Creators you should follow
          </h2>
        </div>
        <div className="creators-module__slider swiper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={4}
            navigation
          >
            {authors.authors.map((author) => (
              <SwiperSlide
                key={author.id}
                className="creators-module__slide swiper-slide"
              >
                <AutorCard key={author.id} author={author} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
