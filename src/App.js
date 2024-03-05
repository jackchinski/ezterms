import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

async function fetchDataFirestore() {
  const querySnapshot = await getDocs(collection(db, "sortedTerms"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

function App() {
  const [userData, setUserData] = useState([]);

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
      {userData.map((terms) => (
        <div key={terms.id}>
          <h2>{terms.name}</h2>
          {Object.keys(terms.flags).map((key) => (
            <div key={key}>
              <h3>{key}</h3>
              {terms.flags[key].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
