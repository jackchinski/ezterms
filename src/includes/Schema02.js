import { useState, useEffect } from 'react';
import { secondSchema } from '.././data/sortedTerms.js';

function Schema02() {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
        async function fetchData() {
          try {
            const data = await secondSchema();
            setUserData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, []);
  
    return (
      <div>
        {userData ? (
          <div>
            <h2>ID: {userData.id}</h2>
            <h2>Instagram</h2>
            <h3>Safe:</h3>
            <ul>
              {userData.safe && Object.entries(userData.safe).map(([key, value]) => (
                <li key={key}>
                  {key}:
                  <ul>
                    {value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <h3>Caution:</h3>
            <ul>
              {userData.caution && Object.entries(userData.caution).map(([key, value]) => (
                <li key={key}>
                  {key}:
                  <ul>
                    {value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <h3>Danger:</h3>
            <ul>
              {userData.danger && Object.entries(userData.danger).map(([key, value]) => (
                <li key={key}>
                  {key}:
                  <ul>
                    {value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default Schema02;

