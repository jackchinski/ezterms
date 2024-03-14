import { useState, useEffect } from 'react';
import { thirdSchema } from '.././data/sortedTerms.js';

function Schema03() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await thirdSchema();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {userData && (
        <div key={userData.id}>
          <h2>{userData.name}</h2>
          <h2>Twitter</h2>
          <div>
            <h3>caution</h3>
            <p>Summary: {userData.flags.caution.summary}</p>
            <p>Full Clause Paragraph: {userData.flags.caution.fullClause}</p>
            <p>Infringement: {userData.flags.caution.infringement}</p>
          </div>
          <div>
            <h3>danger</h3>
            <p>Summary: {userData.flags.danger.summary}</p>
            <p>Full Clause Paragraph: {userData.flags.danger.fullClause}</p>
            <p>Infringement: {userData.flags.danger.infringement}</p>
          </div>
          <div>
            <h3>safe</h3>
            <p>Summary: {userData.flags.safe.summary}</p>
            <p>Full Clause Paragraph: {userData.flags.safe.fullClause}</p>
            <p>Infringement: {userData.flags.safe.infringement}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Schema03;
