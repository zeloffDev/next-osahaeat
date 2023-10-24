import React from "react";
import FeatureRestaurant from "./FeatureRestaurant";
import SliderHomePage from "./SliderHomePage";
import ExploreCategory from "./ExploreCategory";

export default function Body() {
  return (
    <>
      <SliderHomePage />
      <ExploreCategory/>
      <FeatureRestaurant />
    </>
  );
}
