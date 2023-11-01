import React from "react";
import CardFeatureRestaurant from "./CardFeatureRestaurant";
import fetchWithAuth from "../httpClient";
import { FeatureRestaurant } from "../type/FeatureRestaurant.type";
import { response } from "../type/type";

export default async function FeatureRestaurant() {
  const res: response<FeatureRestaurant[]> = await fetchWithAuth(
    "/restaurant?page=1&pageSize=6",
    {
      method: "GET",
      next: { revalidate: 10 },
    }
  );
  return (
    <div className=" w-full m-auto lg:w-9/12 p-5 lg:p-10">
      <div className="flex justify-between w-full pb-10 ">
        <h5 className="font-bold text-lg">FEATURE RESTAURANT</h5>
        <p className="font-light text-sm">See All</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-8">
        {res?.data?.map((item) => {
          return <CardFeatureRestaurant {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
