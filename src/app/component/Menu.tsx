import React from "react";
import style from "./HeadingWrap.module.css";
import CardMenu from "./CardMenu";
import img from "public/img/dishes_1.jpg.webp";
import img2 from "public/img/dishes_2.jpg.webp";
// import img3 from "public/img/dishes_3.jpg.webp";
import img3 from "public/img/cheers-with-restaurant-glassware.jpg";

const arr = [
  { src: img, title: 1 },
  { src: img2, title: 1 },
  { src: img3, title: 1 },
  { src: img, title: 1 },
  { src: img2, title: 1 },
  { src: img3, title: 1 },
];

export default function Menu() {
  return (
    <div className="w-full m-auto lg:w-9/12 p-5 lg:p-10">
      <div className="relative p-10 ">
        <p className={`font-bold text-3xl text-center  ${style.headingWrap}`}>
          MENU
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-8">
        {arr.map((item, index) => {
          return <CardMenu src={item.src} key={index} />;
        })}
      </div>
    </div>
  );
}
