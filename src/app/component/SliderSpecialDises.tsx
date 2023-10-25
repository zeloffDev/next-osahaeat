"use client";
import React from "react";
import img from "public/img/dishes_1.jpg.webp";
import img2 from "public/img/dishes_2.jpg.webp";
import img3 from "public/img/dishes_3.jpg.webp";
import Slider from "react-slick";
import CardSpecialDises from "./CardSpecialDises";

const arr = [
  { src: img, title: 1 },
  { src: img2, title: 1 },
  { src: img3, title: 1 },
  { src: img, title: 1 },
  { src: img2, title: 1 },
  { src: img3, title: 1 },
];

export default function SliderSpecialDises() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <Slider {...settings}>
      {arr.map((item, index) => {
        return (
          <div key={index}>
            <CardSpecialDises src={item.src} />
          </div>
        );
      })}
    </Slider>
  );
}
