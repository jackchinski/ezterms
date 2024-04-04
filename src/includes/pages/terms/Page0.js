import React, { useState, useEffect } from 'react';
import { backendTerms } from '../../../data/backendTerms';

function Page0() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await backendTerms();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  if (!userData) {
    return null;
  }

  return (
    <div>
      <h1>{userData.nameId}</h1>
      <h2>{userData.sectionHeading}</h2>
      <p>Description: {userData.description}</p>
      <p>Update Info: {userData.updateInfo}</p>
      <h3>Danger</h3>
      <ul>
        {userData.Danger.map((dangerItem, index) => (
          <li key={index}>
            <p>Summary: {dangerItem.Summary}</p>
            <p>Clause Section: {dangerItem.ClauseSection}</p>
            <p>Infringement Keyword: {dangerItem.InfringementKeyword}</p>
          </li>
        ))}
      </ul>
      <h3>Safe</h3>
      <ul>
        {userData.Safe.map((safeItem, index) => (
          <li key={index}>
            <p>Summary: {safeItem.Summary}</p>
            <p>Clause Section: {safeItem.ClauseSection}</p>
            <p>Infringement Keyword: {safeItem.InfringementKeyword}</p>
          </li>
        ))}
      </ul>
      <h3>Caution</h3>
      <ul>
        {userData.Caution.map((cautionItem, index) => (
          <li key={index}>
            <p>Summary: {cautionItem.Summary}</p>
            <p>Clause Section: {cautionItem.ClauseSection}</p>
            <p>Infringement Keyword: {cautionItem.InfringementKeyword}</p>
          </li>
        ))}
      </ul>
      {userData.assetRef && (
        <div>
        <img src={`${process.env.PUBLIC_URL}/${userData.assetRef}`} alt={`${userData.assetRef} Icon`} />
      </div>
      )}
    </div>
  );
}

export default Page0;
