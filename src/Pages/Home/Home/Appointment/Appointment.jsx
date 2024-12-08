import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Appointment = () => {
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
    <section className="">
      {/* <div style={appointment}> {<h1>Visit Us</h1>{' '}}</div> */}
      {/* <img
        className="w-full"
        src="https://i.ibb.co/7Sp1WKx/healthcare-patient-doctor-blood-pressure-600nw-2304754935.jpg"
        alt=""
      /> */}

      <>
        <h1 className="text-5xl font-semibold text-center py-7">Our Reviews</h1>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper max-w-7xl mx-auto my-12"
        >
          <div className=" ">
            {' '}
            <SwiperSlide className=" p-12  border-8 bg-[#ebf3f9]">
              <div className="h-full">
                <p className=" text-lg font-normal text-black">
                  {' '}
                  ~~ People here are friendly every time! Very thorough. Always
                  checking on you to make sure you are ok.
                </p>
                <p className="text-xl -mb-8 pt-12 font-normal text-right text-blue-500">
                  KRISTY KORTNY
                </p>
              </div>
            </SwiperSlide>
          </div>
          <div className="">
            <SwiperSlide className="p-12 border-8 bg-[#ebf3f9]">
              <p className="text-lg font-normal text-black">
                {' '}
                ~~ Just finished donating platelets for the first time in my
                life and I'm so happy I did! I will gladly donate............
              </p>
              <p className="text-xl -mb-8 pt-12 font-normal text-right text-blue-500">
                ANDY SIMPSON
              </p>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className="p-12 border-8 bg-[#ebf3f9]">
              <p className="text-lg font-normal text-black">
                {' '}
                ~~ Cool - Blood goes from one arm, through a machine, back into
                other arm. Able to split my donation with those who are in need.
              </p>
              <p className="text-xl -mb-8 pt-12 font-normal text-right text-blue-500">
                BARBARA WILKIRSON
              </p>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className="p-12 border-8 bg-[#ebf3f9]">
              <p className="text-lg font-normal text-black">
                {' '}
                ~~ People here are friendly every time! Very thorough. Always
                checking on you to make sure you are ok.
              </p>
              <p className="text-xl -mb-8 pt-12 font-normal text-right text-blue-500">
                Lionel Messi
              </p>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className="p-12 border-8 bg-[#ebf3f9]">
              <p className="text-lg font-normal text-black">
                {' '}
                ~~ Just finished donating platelets for the first time in my
                life and I'm so happy I did! I will gladly donate............
              </p>
              <p className="text-xl -mb-8 pt-12 font-normal text-right text-blue-500">
                Cristiano Ronaldo
              </p>
            </SwiperSlide>
          </div>
        </Swiper>

        <p className="append-buttons pb-8">
          {/* <button onClick={() => prepend2()} className="prepend-2-slides">
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
          </button> */}
        </p>
      </>
    </section>
  );
};

export default Appointment;
