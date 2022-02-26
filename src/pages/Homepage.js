import React from "react";
import HomeHero from "../sections/HomeHero";
import HomeServices from "../sections/HomeServices";
import HomeWhy from "../sections/HomeWhy";
import HomeWorks from "../sections/HomeWorks";
import HomeFeatures from "../sections/HomeFeatures";
import HomeClient from "../sections/HomeClient";

const Homepage = () => {
  return (
    <>
      <HomeHero />
      <HomeWorks />
      <HomeServices />
      <HomeWhy />
      <HomeFeatures />
      <HomeClient />
    </>
  );
};

export default Homepage;
