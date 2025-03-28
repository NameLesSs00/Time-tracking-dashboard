"use client"
import data from "@/app/_data/data.json";
import Card from "./Card";
import { useState } from "react";
import Profile from "./Profile";

export const LandingPage = () => {
  const [select, setSelect] = useState(1);
  const timeFrameKey =
    select === 1 ? "weekly" : select === 0 ? "daily" : "monthly";

  return (
    <>
      <Profile select={select} setSelect={setSelect} />
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          current={item.timeframes[timeFrameKey].current}
          previous={item.timeframes[timeFrameKey].previous}
          color={item.forStyle.color}
          img_src={item.forStyle.img_src}
          timeframes={timeFrameKey}
        />
      ))}
    </>
  );
};
