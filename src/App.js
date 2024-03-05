import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

async function fetchDataFirestore() {
  const querySnapshot = await getDocs(collection(db, "test"));
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
      {userData.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
