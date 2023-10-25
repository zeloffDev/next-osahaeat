import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "./Button";

type Props = { src: StaticImageData };

export default function CustomImageHomePage(props: Props) {
  const { src } = props;
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute text-white text-center w-5/12">
        <h1 className="font-bold text-4xl mb-3">Expert Chefs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde
          impedit, necessitatibus, soluta sit quam minima expedita atque
          corrupti reiciendis.
        </p>
        <Button className="border-white border hover:bg-white hover:text-black font-extralight p-2 mt-10">
          GET STARTED
        </Button>
      </div>
      <Image
        src={src}
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          // imageRendering: "pixelated",
        }}
      />
    </div>
  );
}
