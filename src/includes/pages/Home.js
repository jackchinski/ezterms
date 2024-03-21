import React from "react";

import SupportedPlatforms from '../sections/supportedPlatforms';
import Hero from '../sections/hero';

import "../css/home.css";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <SupportedPlatforms />
      </main>
    </>
  );
};

export default Home;
