import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "./myswper.scss";
import 'swiper/scss/navigation';

import "swiper/css";
import Button from "../button/button";

// SwiperCore.use([Navigation, Pagination]);
// import 'swiper/scss/pagination';

// import Slide from '../img/stories/android-phones.jpg'
// Import Swiper styles


export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //   onSlideChange={() => console.log('slide change')}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Button id='1' className="btn" onClick={(e) => console.log(e.target.id)}>
          Next
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../img/stories/buttle-mobile.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../img/stories/instagram.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../img/stories/install-windows.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../img/stories/sumsung-galaxy.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};
