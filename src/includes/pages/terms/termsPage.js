import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { backendTerms } from "../../../data/backendTerms";

import NoPage from "../../../includes/pages/NoPage";

import { AiOutlineWarning, AiOutlineSafety } from "react-icons/ai";
import { LuConstruction } from "react-icons/lu";
import { FcExpand, FcCollapse } from "react-icons/fc";

import "../../css/termsPage.css";

function TermsPage() {
  const { pageName } = useParams();
  const [termsPage, setTermsData] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

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

  if (!currentPage) {
    return (
      <div className="inner-container">
        <NoPage />
        <p style={{ textAlign: "center" }}>
          Only processed pages with ID values will show up here.
        </p>
      </div>
    );
  }

  const order = ["Danger", "Caution", "Safety"];

  const pageObjectKeys = Object.keys(currentPage)
    .filter((key) => typeof currentPage[key] === "object")
    .sort((a, b) => order.indexOf(a) - order.indexOf(b));

  const toTitleCase = (str) => {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const getKeyIcon = (key) => {
    switch (key) {
      case "Danger":
        return <AiOutlineWarning />;
      case "Caution":
        return <LuConstruction />;
      case "Safety":
        return <AiOutlineSafety />;
      default:
        return null;
    }
  };

  const toggleSection = (key) => {
    setExpandedSections({
      ...expandedSections,
      [key]: !expandedSections[key],
    });
  };

  return (
    <>
      <section id="terms-hero">
        <div className="inner-container flex-container">
          <div className="icon-box flex-item">
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
          </div>
          <div className="description-box flex-item">
            <p>
              {currentPage.description || "Page description does not exist"}
            </p>
            <p>
              <strong>
                {currentPage.updateInfo || "Page update Info does not exist"}
              </strong>
            </p>
          </div>
        </div>
      </section>

      <div className="inner-container">
        <div id="clauses">
          <h2>
            {toTitleCase(currentPage.nameId)} – Know what you're signing:{" "}
          </h2>
          {pageObjectKeys.map((key, index) => (
            <section key={index} className={key + " clause-section"}>
              <div
                className="clause-object-heading"
                onClick={() => toggleSection(key)}
              >
                <div className="clause-heading-container">
                  <div className="clause-icon">{getKeyIcon(key)}</div>
                  <h3>
                    {key} ({currentPage[key].length})
                  </h3>
                </div>
                <div className="expand-collapse-icon">
                  {expandedSections[key] ? <FcCollapse /> : <FcExpand />}
                </div>
              </div>
              {expandedSections[key] && (
                <div
                  className="section-clauses"
                  style={{ maxHeight: "300px", overflowY: "auto" }}
                >
                  {currentPage[key].map((item, itemIndex) => (
                    <div key={itemIndex} className="clause-container">
                      <p className="clause-count">{itemIndex + 1}</p>
                      <div className="clause-box">
                        <div className="clause-header">
                          <p>
                            <strong>
                              {toTitleCase(item.InfringementKeyword)}
                            </strong>
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
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default TermsPage;
