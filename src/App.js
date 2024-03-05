import React, { useState, useEffect } from "react";
import colRef from "./firebase.config";
import { getDocs } from "firebase/firestore";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(colRef);
        const dataArray = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Firebase Firestore</h1>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <strong>Name:</strong> {item.Name}, <strong>ID:</strong> {item.id}
              <br />
              <strong>Flags:</strong> 
              <ul>
                <li>Safe: {item.Flags.Safe.join(", ")}</li>
                <li>Caution: {item.Flags.Caution.join(", ")}</li>
                <li>Danger: {item.Flags.Danger.join(", ")}</li>
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
