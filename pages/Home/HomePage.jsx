import React from "react";
import {
  BestHosting,
  FindDomain,
  Location,
  MainInfo,
  OptimizeWebsite,
  PricePlan,
  NewsEvent,
  Partner,
  Support,
  Slider
} from "./";

const Home = () => {
  return (
    <>
      <FindDomain />
      <BestHosting />
      <OptimizeWebsite />
      <PricePlan />
      <MainInfo />
      <Support/>
      <Location />
      <Slider/>
      <NewsEvent/>,
      <Partner/>

      
    </>
  );
};

export default Home;
