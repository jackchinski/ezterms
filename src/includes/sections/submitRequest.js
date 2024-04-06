import React from "react";

import "../css/home.css";
import "../../App.css";

const SubmitRequest = () => {
    const handleClick = (event) => {
        event.preventDefault();
      };

  return (
    <>
      <section id="SubmitRequest">
        <div className="inner-container">
            <h1>Want an analysis on another website?</h1>
            <button onClick={handleClick}>Submit a Request</button>
        </div>
      </section>
    </>
  );
};

export default SubmitRequest;
