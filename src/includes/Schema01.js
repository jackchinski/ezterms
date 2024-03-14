import { useState, useEffect } from 'react';
import { firstSchema } from '.././data/sortedTerms.js';

function Schema01() {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await firstSchema();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
    }, []);
  
    return (
        <div>
        <h1>Data from Firebase Firestore</h1>
        {userData && (
          <div key={userData.id}>
            <h2>{userData.name}</h2>
            {Object.keys(userData.flags).map((key) => (
              <div key={key}>
                <h3>{key}</h3>
                {userData.flags[key].map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
export default Schema01;