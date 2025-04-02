"use client";
import data from "@/app/_data/data.json";
import Card from "./Card";
import { useState } from "react";
import Profile from "./Profile";

export const LandingPage = () => {
  const [select, setSelect] = useState(1);
  const timeFrameKey =
    select === 1 ? "weekly" : select === 0 ? "daily" : "monthly";

  return (
    <main className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:place-items-center my-auto">
      <div className="md:col-span-1 md:row-span-2 md:my-auto ">
        <Profile select={select} setSelect={setSelect} />
      </div>

      {data.map((item, index) => (
        <div key={index} className="md:my-auto">
          <Card
            title={item.title}
            current={item.timeframes[timeFrameKey].current}
            previous={item.timeframes[timeFrameKey].previous}
            color={item.forStyle.color}
            img_src={item.forStyle.img_src}
            timeframes={timeFrameKey}
          />
        </div>
      ))}
    </main>
  
  );
};
