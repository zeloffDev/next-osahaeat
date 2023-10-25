import React from "react";
import AddresSvg from "../svg/AddresSvg";
import CardExploreCategory from "./CardExploreCategory";

export default function ExploreCategory() {
  return (
    <div className=" w-full m-auto  lg:w-9/12 p-5 lg:p-10">
      <div className="grid text-center grid-rows-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <CardExploreCategory />
        <CardExploreCategory />
        <CardExploreCategory />
        <CardExploreCategory />
      </div>
    </div>
  );
}
