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
  SliderSection,
} from "./";

const Home = () => {
  return (
    <>
      <FindDomain />
      <BestHosting />
      <OptimizeWebsite />
      <PricePlan />
      <MainInfo />
      <Support />
      <Location />
      <SliderSection />
      <NewsEvent />,
      <Partner />
    </>
  );
};

export default Home;
