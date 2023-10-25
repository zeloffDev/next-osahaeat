import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "./Button";
import style from "./CardSpecialDises.module.css";
type Props = { src: StaticImageData };

export default function CardSpecialDises(props: Props) {
  const { src } = props;
  return (
    <div className="group flex justify-center items-center cursor-pointer relative">
      <div className="absolute text-white text-center w-5/12 z-10">
        <Button className=" z-10 rounded-full w-24 h-24 bg-red-600 group-hover:bg-red-600/0 group-hover:border duration-300 ease-in-out">
          $11.06
        </Button>
        <p className="text-2xl font-bold uppercase">
          Organic tomato salad, gorgonzola cheese, capers
        </p>
      </div>
      <div
        style={{
          width: "31vw",
          height: "31vw",
        }}
        className={style.imageContainer}
      >
        <Image
          src={src}
          alt="Picture of the author"
          className={`${style.image} group-hover:scale-110 image duration-300 ease-in-out`}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(20%)",
            // imageRendering: "pixelated",
          }}
        />
      </div>
    </div>
  );
}
