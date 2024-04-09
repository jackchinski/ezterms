import React from "react";
import { Link } from "react-router-dom";

import Amazon from "../../assets/icons/Amazon.png";
import BeReal from "../../assets/icons/BeReal.png";
import Etsy from "../../assets/icons/Etsy.png";
import Instagram from "../../assets/icons/Instagram.png";
import LinkedIn from "../../assets/icons/LinkedIn.png";
import Pinterest from "../../assets/icons/Pinterest.png";
import Shopify from "../../assets/icons/Shopify.png";
import Snapchat from "../../assets/icons/Snapchat.png";
import Telegram from "../../assets/icons/Telegram.png";
import Tiktok from "../../assets/icons/Tiktok.png";
import Wix from "../../assets/icons/Wix.png";
import X from "../../assets/icons/X.png";

import "../css/home.css";
import "../../App.css";

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
    Tiktok,
    Wix,
    X,
  };

  return (
    <>
      <section id="SupportedPlatforms">
        <div className="inner-container">
          <h1>Supported Platforms</h1>
          <div className="platform-grid">
            {Object.entries(platformImages).map(
              ([platform, imageSrc], index) => (
                <Link className="platform-link" to={`${platform.toLowerCase()}`}>
                  {" "}
                  <div className="grid-item" key={index}>
                    <img src={imageSrc} alt={platform} />
                    <h5>{platform}</h5>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportedPlatforms;
