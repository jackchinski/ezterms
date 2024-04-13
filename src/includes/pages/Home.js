import React from "react";

import SupportedPlatforms from '../sections/supportedPlatforms';
import Hero from '../sections/hero';
import ClassificationSystem from '../sections/classificationSystem';
import SubmitRequest from '../sections/submitRequest';
import Footer from '../sections/footer';

import "../css/home.css";
import "../../App.css";

const Home = () => {
  return (
    <>
      <main className="container-outer">
        <p>Hello there!!!!</p>
        <Hero />
        <SupportedPlatforms />
        <ClassificationSystem />
        <SubmitRequest />
        <Footer />
      </main>
    </>
  );
};

export default Home;
