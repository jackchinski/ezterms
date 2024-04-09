import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { backendTerms } from "../../../data/backendTerms";
import NoPage from "../../../includes/pages/NoPage";

import { AiOutlineWarning, AiOutlineSafety } from "react-icons/ai";
import { LuConstruction } from "react-icons/lu";

import "../../css/termsPage.css";

function TermsPage() {
  const { pageName } = useParams();
  const [termsPage, setTermsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await backendTerms();
        setTermsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (!termsPage) {
    return null;
  }

  const currentPage = termsPage.find((page) => page.nameId === pageName);

  const order = ["Danger", "Caution", "Safe"];

  const pageObjectKeys = Object.keys(currentPage)
    .filter((key) => typeof currentPage[key] === "object")
    .sort((a, b) => order.indexOf(a) - order.indexOf(b));

  if (!currentPage) {
    return (
      <div className="inner-container">
        <NoPage />
      </div>
    );
  }

  const toTitleCase = (str) => {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const getKeyIcon = (key) => {
    switch (key) {
      case "Danger":
        return <AiOutlineWarning />;
      case "Caution":
        return <LuConstruction />;
      case "Safe":
        return <AiOutlineSafety />;
      default:
        return null;
    }
  };

  return (
    <>
  <section id="terms-hero">
    <div className="inner-container flex-container">
      {currentPage.assetRef ? (
        <div className="flex-item">
          <img
            src={`${process.env.PUBLIC_URL}/${currentPage.assetRef}`}
            alt={`${currentPage.assetRef} Icon`}
          />
        </div>
      ) : (
        <p>Your icon asset reference does not exist</p>
      )}
      <div className="flex-item">
        <p>
          {currentPage.description || "Page description does not exist"}
        </p>
        <p>{currentPage.updateInfo || "Page update Info does not exist"}</p>
      </div>
    </div>
  </section>
  <div className="inner-container">
    <div>
      {pageObjectKeys.map((key, index) => (
        <div key={index} className={key}>
          <div className="clause-object-heading">
          <div className="clause-icon">{getKeyIcon(key)}</div>
          <h3>
           {key} ({currentPage[key].length})
          </h3>
          </div>
          {currentPage[key].map((item, itemIndex) => (
            <div key={itemIndex} className="clause-container">
              <p className="clause-count">
                {itemIndex + 1}
              </p>
              <div className="clause-box">
                <div className="clause-header">
                  <p>
                    <strong>{toTitleCase(item.InfringementKeyword)}</strong>
                  </p>
                  <p>
                    Found in:{" "}
                    <strong>{toTitleCase(item.ClauseSection)}</strong>
                  </p>
                </div>
                <p>{item.Summary}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</>

  );
}

export default TermsPage;
