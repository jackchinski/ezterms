import React, { useEffect } from 'react'; 
import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// initialization 
const app = initializeApp(firebaseConfig);
const db = getFirestore();

function App() {
  useEffect(() => {
    (async () => {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada", 
          last: "Lovelace", 
          born: 1815
        }); 

        console.log("Document writting with ID: ", docRef.id);

      } catch (e) {
        console.log("Error adding document", e);
      }
    })();
  }, []);
  
  
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          HELLO THERE EZ TERMS USERS
        </a>
      </header>
    </div>
  );
};

export default App;
