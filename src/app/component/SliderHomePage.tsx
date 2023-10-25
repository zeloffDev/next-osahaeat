"use client";
import React, { ButtonHTMLAttributes } from "react";
import Slider from "react-slick";
import img from "public/img/pexels-photo-1346132.jpeg";
import img2 from "public/img/platter-2009590_1280.jpg";
import img3 from "public/img/cheers-with-restaurant-glassware.jpg";
import CustomImageHomePage from "./CustomImageHomePage";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const arr = [
  { src: img, title: 1 },
  { src: img2, title: 1 },
  { src: img3, title: 1 },
];

const SliderHomePage: React.FC = () => {
  function SampleNextArrow(props: ButtonProps) {
    const { className, style, onClick } = props;
    return (
      <button
        className="Btn_Slick duration-300 opacity-0 absolute px-2 py-4 rounded-md flex justify-center items-center text-lg text-white bg-black bg-opacity-40 top-1/2 right-4 transform -translate-y-1/2 z-[999999999] cursor-pointer"
        onClick={onClick}
      >
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="right"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
        </svg>
      </button>
    );
  }

  function SamplePrevArrow(props: ButtonProps) {
    const { className, style, onClick } = props;
    return (
      <button
        className="Btn_Slick duration-300 opacity-0 absolute top-1/2 left-4 px-2 py-4 rounded-md flex justify-center items-center text-white bg-black bg-opacity-40 transform -translate-y-1/2 z-[999999999] cursor-pointer"
        onClick={onClick}
      >
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="left"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
        </svg>
      </button>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {arr.map((item, index) => {
        return (
          <div key={index}>
            <CustomImageHomePage src={item.src} />
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderHomePage;
