import React from "react";
import RestauranSvg from "../svg/RestauranSvg";
import StarSvg from "../svg/StarSvg";
import AddresSvg from "../svg/AddresSvg";

export default function CardFeatureRestaurant() {
  return (
    <div className="flex dark:bg-gray-800/20 dark:bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl border dark:border-0 p-2 grid-cols-12 gap-4 transition duration-300 ease-in-out hover:scale-105">
      <img
        src="https://preview.cruip.com/podcast/images/podcast-04.jpg"
        width={77}
        height={77}
        alt="Podcast 04"
        className="rounded"
      />
      <div className="truncate flex flex-col justify-between w-full">
        <p className="font-medium hover:text-sky-500 cursor-pointer">
          Focusing on one{" "}
        </p>
        <div className="flex items-center font-light truncate text-xs space-x-1">
          <StarSvg />
          <p className="pr-5">5.0 (35)</p>
          <RestauranSvg />
          <p>Hamberger</p>
        </div>
        <div className="flex items-center w-full justify-between space-x-1">
          <div>
            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Red
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              Green
            </span>
          </div>
          <div className="flex items-center pr-5 font-light truncate text-xs space-x-1">
            <AddresSvg />
            <p>4.5 Km</p>
          </div>
        </div>
      </div>
    </div>
  );
}
