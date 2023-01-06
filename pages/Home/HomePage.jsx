import React from "react";
import {
  BestHosting,
  FindDomain,
  Location,
  MainInfo,
  OptimizeWebsite,
  PricePlan,
} from "./";

const Home = () => {
  return (
    <>
      <FindDomain />
      <BestHosting />
      <OptimizeWebsite />
      <PricePlan />
      <MainInfo />
      <Location />
    </>
  );
};

export default Home;
