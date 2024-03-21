import React from "react";

import "../css/home.css";

import heroImg from "../assets/homepage-art-01.png";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div>
          <h1>Know before you sign.</h1>
          <p>
          Welcome to Ez Terms, your pivotal guide in navigating the often overlooked and misunderstood world of terms and conditions In today's digital age, it's alarmingly easy to consent to complex agreements without grasping their full implications, risking privacy breaches, data misuse, and unforeseen legal challenges. We're here to change that, transforming dense documents into clear, accessible information. By empowering users to make informed choices, we enhance privacy awareness and reduce accidental consent to risky terms. Developed through meticulous research and leveraging cutting-edge design and coding techniques, Ez Terms invites you to be part of a more knowledgeable, ethical online community. Join us for a safer, more transparent digital experience.
          </p>
        </div>
        <div className="hero-img-container">
            <img src={heroImg} alt="Easy Terms logo" width="300px"/>
        </div>
      </section>
    </>
  );
};

export default Hero;
