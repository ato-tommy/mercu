import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {  Autoplay,Navigation } from "swiper/modules";
import Typewriter from "typewriter-effect";
function HomeBanner() {
   const banners = [
      // {img:'./test.jpg',title:'Lorem, ipsum dolor.',subTitle:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepesunt dicta sed ullam mollitia similique!'},
      {img:'./nwBn1.jpg',title:'Lorem, ipsum dolor.',subTitle:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepesunt dicta sed ullam mollitia similique!'},
      {img:'./nwBn2.jpg',title:'Lorem, ipsum dolor.',subTitle:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepesunt dicta sed ullam mollitia similique!'},
      {img:'./newBn3.jpg',title:'Lorem, ipsum dolor.',subTitle:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepesunt dicta sed ullam mollitia similique!'},
    ]
  return (
    <>
      <Swiper
        navigation={true}
        modules={[ Autoplay,Navigation]}
        className="mySwiper w-full h-[100vh] "
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {
          banners.map((banner,index)=>(
            <SwiperSlide className="w-full h-full relative" key={index}>
            <img
              src={banner.img}
              className="w-full h-[100vh] absolute top-0 left-0"
              alt=""
            />
            <div className="bannerText text-white absolute right-20 bottom-[10%] w-[25%] flex flex-col justify-center ">
              <h1 className="text-2xl my-4">
                <Typewriter
                options={{
                 loop:true
                }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(banner.title)
                      .pauseFor(1000)
                      .start();
                  }}
                  
                />
              </h1>
              <p className="text-blue-400">
                {banner.subTitle}
              </p>
              <button className=" bg-slate-500 px-3 py-1 rounded-md mt-4  text-nowrap self-end">
                Read More
              </button>
            </div>
          </SwiperSlide>
          ))
        }
    
       
      
      </Swiper>
    </>
  )
}

export default HomeBanner