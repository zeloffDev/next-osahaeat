import React from "react";
import FeatureRestaurant from "./FeatureRestaurant";
import SliderHomePage from "./SliderHomePage";
import ExploreCategory from "./ExploreCategory";
import SliderSpecialDises from "./SliderSpecialDises";

export default function Body() {
  return (
    <>
      <SliderHomePage />
      <ExploreCategory />
      <FeatureRestaurant />
      <SliderSpecialDises/>
    </>
  );
}
