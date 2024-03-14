import React, { useState, useEffect } from "react";
import { fetchDataFirestore } from './data/sortedTerms.js';


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFirestore();
      setUserData(data);
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

export default App;