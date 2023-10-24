import React from "react";
import AddresSvg from "../svg/AddresSvg";
import RestauranSvg from "../svg/RestauranSvg";

export default function CardExploreCategory() {
  return (
    <div className="hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 p-2 rounded-lg dark:bg-gray-800/20">
      <div className="flex mt-5 justify-center justify-items-center">
        <RestauranSvg className="w-10 h-10 fill-text-black dark:fill-white" />
      </div>
      <p className="mt-5 text-red-600 text-2xl font-medium">Drink</p>
      <p className="mt-5 text-gray-500 dark:text-white font-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae hic
        maiores. Velit nisi, reprehenderit, nobis officia.
      </p>
    </div>
  );
}
