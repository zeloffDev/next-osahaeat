import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = { src: StaticImageData };

export default function CardMenu(props: Props) {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:shadow-xl transition duration-300 ease-in-out hover:scale-105">
      <a href="#!">
        <Image
          // style={{
          //   width: "250px",
          //   height: "0",
          //   paddingBottom: "100%",
          //   objectFit: "cover",
          //   // imageRendering: "pixelated",
          // }}
          className="rounded-t-lg"
          src={props.src}
          alt=""
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-lgfont-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Grilled Caesar salad, shaved reggiano
        </h5>
        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          illo delectus
        </p>
        <p className="mt-5 text-red-600 text-2xl font-medium">$12.00</p>
      </div>
    </div>
  );
}
