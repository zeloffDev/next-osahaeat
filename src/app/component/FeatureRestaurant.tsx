import React from "react";
import CardFeatureRestaurant from "./CardFeatureRestaurant";

export default function FeatureRestaurant() {
  return (
    <div className=" w-full m-auto lg:w-9/12 p-5 lg:p-10">
      <div className="flex justify-between w-full pb-10 ">
        <h5 className="font-bold text-lg">Feature restaurant</h5>
        <p className="font-light text-sm">See All</p>
      </div>
      <div className="grid grid-rows-4 grid-cols-1 lg:grid-cols-2 gap-8">
       <CardFeatureRestaurant/>
       <CardFeatureRestaurant/>
       <CardFeatureRestaurant/>
       <CardFeatureRestaurant/>
       <CardFeatureRestaurant/>
       <CardFeatureRestaurant/>
      </div>
    </div>
  );
}
