import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Gallery = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <section className="md:max-w-7xl mx-auto pt-2 md:pt-16 my-12 md:my-20">
      <div className=" text-4xl  font-bold text-center">
        Checkout Our Gallery
      </div>
      <div className="p-12 my-10">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={25}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-auto md:w-auto h-auto md:h-64"
              src="https://i.ibb.co/YWRKbw6/photo-1615461065929-4f8ffed6ca40.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=""
              src="https://i.ibb.co/4KBb0nX/mau-344.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/5RfDgwM/photo-1536856136534-bb679c52a9aa.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/hykqb2K/g6.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-auto h-auto md:h-64"
              src="https://i.ibb.co/4VVqgzS/photo-1615461066159-fea0960485d5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/ZzhQfft/g1.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/WKkxwhh/HM-5.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/gJ0VSNZ/g2.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/3sbVB1d/photo-1631815589600-85ee48945ce1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/KDCNQXW/01272023-Blood-Donations-2021-074234.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/nQS8D15/g3.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/N98Zf1M/g9.webp" alt="" />
          </SwiperSlide>
        </Swiper>
        {/* 
        <p className="append-buttons">
          <button onClick={() => prepend2()} className="prepend-2-slides">
            Prepend 2 Slides
          </button>
          <button onClick={() => prepend()} className="prepend-slide">
            Prepend Slide
          </button>
          <button onClick={() => append()} className="append-slide">
            Append Slide
          </button>
          <button onClick={() => append2()} className="append-2-slides">
            Append 2 Slides
          </button>
        </p> */}
      </div>
    </section>
  );
};

export default Gallery;
