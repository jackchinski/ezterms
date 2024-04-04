import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { backendTerms } from "../../../data/backendTerms";

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

  if (!currentPage) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      <h1>{currentPage.nameId}</h1>
      {currentPage.assetRef ? (
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/${currentPage.assetRef}`}
            alt={`${currentPage.assetRef} Icon`}
          />
        </div>
      ) : (
        <p>Your icon asset reference does not exist</p>
      )}
      <p>Description: {currentPage.description || "Page description does not exist"}</p>
      <p>Update Info: {currentPage.updateInfo || "Page update Info does not exist"}</p>
      <section>
        <h2>{currentPage.sectionHeading || "Page section heading does not exist"}</h2>
        <h3>Danger</h3>
        <ul>
          {currentPage.Danger.map((dangerItem, index) => (
            <li key={index}>
              <p>Summary: {dangerItem.Summary}</p>
              <p>Clause Section: {dangerItem.ClauseSection}</p>
              <p>Infringement Keyword: {dangerItem.InfringementKeyword}</p>
            </li>
          ))}
        </ul>
        <h3>Safe</h3>
        <ul>
          {currentPage.Safe.map((safeItem, index) => (
            <li key={index}>
              <p>Summary: {safeItem.Summary}</p>
              <p>Clause Section: {safeItem.ClauseSection}</p>
              <p>Infringement Keyword: {safeItem.InfringementKeyword}</p>
            </li>
          ))}
        </ul>
        <h3>Caution</h3>
        <ul>
          {currentPage.Caution.map((cautionItem, index) => (
            <li key={index}>
              <p>Summary: {cautionItem.Summary}</p>
              <p>Clause Section: {cautionItem.ClauseSection}</p>
              <p>Infringement Keyword: {cautionItem.InfringementKeyword}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TermsPage;
