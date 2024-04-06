import React from "react";

import "../css/home.css";
import "../../App.css";

const classificationSystem = () => {
  return (
    <>
      <section id="ClassificationSystem">
        <div className="inner-container">
            <h1>Our Classification System</h1>
            <div className="classification-categories-container">
                <div className="classification-danger">
                    <h5>Danger</h5>
                    <p>Highlights areas where sensitive information is involved, posing potential risks that require strict data protection measures.</p>
                </div>
                <div className="classification-caution">
                    <h5>Caution</h5>
                    <p>Covers functionalities that enhance user experience but involve significant data collection, necessitating awareness and careful management of privacy settings.</p>
                </div>
                <div className="classification-safe">
                    <h5>Safe</h5>
                    <p>Involves basic interactions that are inherent to the platform's use, where users maintain a degree of control over their data. </p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default classificationSystem;
