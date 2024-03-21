import React from "react";
import Amazon from "../assets/icons/Amazon.png";
import BeReal from "../assets/icons/BeReal.png";
import Etsy from "../assets/icons/Etsy.png";
import Instagram from "../assets/icons/Instagram.png";
import LinkedIn from "../assets/icons/LinkedIn.png";
import Pinterest from "../assets/icons/Pinterest.png";
import Shopify from "../assets/icons/Shopify.png";
import Snapchat from "../assets/icons/Snapchat.png";
import Telegram from "../assets/icons/Telegram.png";
import Ticktok from "../assets/icons/Ticktok.png";
import Wix from "../assets/icons/Wix.png";
import X from "../assets/icons/X.png";

import "../css/home.css";

const SupportedPlatforms = () => {
  const platformImages = {
    Amazon,
    BeReal,
    Etsy,
    Instagram,
    LinkedIn,
    Pinterest,
    Shopify,
    Snapchat,
    Telegram,
    Ticktok,
    Wix,
    X,
  };

  return (
    <>
      <section id="SupportedPlatforms">
        <h1>Supported Platforms</h1>
        <div className="platform-grid">
          {Object.entries(platformImages).map(([platform, imageSrc], index) => (
            <div className="grid-item" key={index}>
              <img src={imageSrc} alt={platform} />
              <h5>{platform}</h5>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SupportedPlatforms;
